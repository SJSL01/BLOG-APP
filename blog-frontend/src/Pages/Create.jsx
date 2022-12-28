import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Filebase64 from "react-file-base64"
import AuthContext from '../Context/AuthContext'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import "../index.css"
export default function Create() {


    const navigate = useNavigate()

    const [blog, setBlog] = useState({
        image: "",
        title: "",
        description: "",
        date_time: ""
        // user: user?._id
    })

    const create = async () => {
        try {
            // console.log(user);
            // setBlog({ ...blog, user: user })

            const res = await axios.post("https://backend-blog-sjsl.onrender.com/blog/create", blog)
            console.log(res.data);

            navigate("/home", { replace: true })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='create'>
                <h1>
                    Create A Blog
                </h1>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <Filebase64 onDone={(file) => { setBlog({ ...blog, image: file.base64 }) }} />
                        <img style={{ width: "200px" }} src={blog.image} alt="" />
                    </div>
                    <div>
                        <input type="text"
                            onChange={(e) => { setBlog({ ...blog, title: e.target.value }) }} placeholder='title' />

                    </div>
                    <div>
                        <textarea
                            onChange={(e) => { setBlog({ ...blog, description: e.target.value }) }}
                            placeholder='description' />
                    </div>
                    <div>
                        <button onClick={() => { create() }}>CREATE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
