import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../index.css"
import Navbar from '../Components/Navbar'
import AuthContext from '../Context/AuthContext'
import { toast } from 'react-hot-toast'

export default function Home() {

    const [loader, setloader] = useState(true)

    const [blog, setBlog] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        try {
            const res = await axios.get("https://blog-frontend-sjsl08.onrender.com/blog/getBlogs")
            console.log(res.data);
            setBlog(res.data)
            setloader(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='postContainer'>
                {loader && <h2 className='loading'>Loading.....</h2>}
                {blog && blog.map((data) => {
                    return (
                        <div className='blog'>
                            <div className='title'>{data.title}</div>
                            <div className='description'>{data.description}</div>
                            <div style={{ width: "300px" }} className='image'>
                                <img style={{ width: "100%" }} src={data.image} alt="" /></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
