import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    //hooks
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            //navigate.push("/")
        }catch(err){
            setError(`Failed to log in: ${err}`)
        }
        setLoading(false)
    }

    return (
        <>
            <h2>Log In</h2>
            <h3>Signed in user: {currentUser && currentUser.email}</h3>
            {error && <h1>error={error}</h1>}
            <form onSubmit={handleSubmit}>
                <label >Email:</label>
                <br></br>
                <input type="text" ref={emailRef}></input>
                <br></br>
                <label >Password:</label>
                <br></br>
                <input type="text" ref={passwordRef}></input>
                <br></br>
                <br></br>
                <button disabled={loading}>Log In</button>
            </form>

            <div>Need an account? <Link to="/signup">Sign Up</Link></div>

        </>

    )
}
