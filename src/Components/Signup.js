import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        //check if passwords dont match
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            //navigate.push("/")
        }catch(err){
            setError(`Failed to create account: ${err}`)
        }
        setLoading(false)
    }

    return (
        <>
            <h2>Signup</h2>
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
                <label >Password Confirmation:</label>
                <br></br>
                <input type="text" ref={passwordConfirmRef}></input>
                <br></br>
                <input disabled={loading} type="submit" value="Submit"></input>
            </form>

            <div>Already have an account? <Link to="/login">Login</Link></div>
        </>

    )
}
