const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const cors = require("cors")
const connectDB = require("./ConnectDB/ConnectDB")

dotenv.config()
const app = express()


app.use(cors())
app.use(express.json({limit:"5mb"}))
app.use(morgan("tiny"))


app.use("/user", require("./Routes/User"))
app.use("/blog", require("./Routes/Blogs"))


app.listen(process.env.port, async () => {
    await connectDB()
    console.log(`Server up at port ${process.env.PORT}`);
})