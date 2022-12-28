const mongoose = require("mongoose")

mongoose.set('strictQuery', true);

const connectDB = () => {
    return mongoose.connect(process.env.DB_URI).then(() => {
        console.log("DATABASE CONNECTED");
    }).catch((e) => {
        console.log(e);
    })
}

module.exports = connectDB;