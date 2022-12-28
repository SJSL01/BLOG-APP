import React from 'react'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import { Link } from "react-router-dom"
import "../index.css"

export default function Register() {

    const { signup, user } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/signup")
        }
    }, [])

    const [confirmPassword, setConfirmPassword] = useState("")

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        if (!userData.email.match(emailReg)) {
            return toast.error("Enter a valid email")
        }
        if (confirmPassword !== userData.password) {
            return toast.error("Passwords donot match!!!!")
        }
        signup(userData)
    }
    return (
        <div className='register'>
            <h1>REGISTER</h1>
            <form>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required value={userData.email} name="email"
                        onChange={(e) => { handleInput(e) }} />
                </div>

                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" id='Password' required value={userData.password} name="password"
                        onChange={(e) => { handleInput(e) }} />
                </div>
                <div>
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" id='ConfirmPassword' required value={confirmPassword} name="confirmPassword"
                        onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>

                <div>
                    <button type='submit' onClick={(e) => { handleSubmit(e) }}>SignUp</button>
                </div>

            </form>

            <div>Have a account <Link to={"/"}>Login</Link></div>
        </div>
    )
}
