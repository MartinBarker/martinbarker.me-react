import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    //hooks
    const emailRef = useRef()
    const { login, currentUser, resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }catch(err){
            setError(`Failed to reset password: ${err}`)
        }
        setLoading(false)
    }

    return (
        <>
            <h2>Password Reset</h2>
            <h3>Signed in user: {currentUser && currentUser.email}</h3>

            {error && <h1>error={error}</h1>}
            
            <div>{message && <h3>{message}</h3>}</div>
            
            <form onSubmit={handleSubmit}>
                <label >Email:</label>
                <br></br>
                <input type="text" ref={emailRef}></input>
  
                <br></br>
                <br></br>
                <button disabled={loading}>Reset Password</button>
            </form>
            
            <div><Link to="/login">Log In</Link></div>
            <div><Link to="/signup">Sign Up</Link></div>


        </>

    )
}
