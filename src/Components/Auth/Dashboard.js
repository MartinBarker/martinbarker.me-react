import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    //const navigate = useNavigate();

    async function handleLogout(){
        setError('')
        try{
            logout()
            //navigate.push("/login")
        }catch(err){
            setError(`Failed to logout: ${err}`)
        }
    }

    return (
        <>
            <h2>Dashboard</h2>
            <div><Link to="/signup">Sign Up</Link></div>
            <div><Link to="/login">Log in</Link></div>
            <div><Link to="/update-profile">Update Profile</Link></div>

            <h2>Profile</h2>
            <div><strong>Email: </strong>{currentUser.email}</div>
            {error && <h1>error={error}</h1>}

            <button onClick={handleLogout}>Log Out</button>
        </>

    )
}

