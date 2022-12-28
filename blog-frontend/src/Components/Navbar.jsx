import React from 'react'
import { useContext } from 'react'

import { Link } from "react-router-dom"
import AuthContext from '../Context/AuthContext'
import '../index.css';
export default function Navbar() {
    const { setUser } = useContext(AuthContext)
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", backgroundColor: "yellowgreen", padding: "2vh 2vw" }}>
            <ul>
                <li>
                    <h2>BlogApp</h2>
                </li>
            </ul>

            <ul style={{ display: "flex", gap: "5vw" }}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li onClick={() => {
                    setUser(null)
                    sessionStorage.clear()
                }}><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    )
}
