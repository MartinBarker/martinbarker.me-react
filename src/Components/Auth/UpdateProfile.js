import React, { useRef, useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link } from "react-router-dom";

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    //const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        //check if passwords dont match
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        const promises = []
        setError("")
        setLoading(true)
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(()=>{
            //navigate("/");
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
        })

    }

    return (
        <>
            <h2>Signup</h2>
            <h3>Signed in user: {currentUser && currentUser.email}</h3>
            {error && <h1>error={error}</h1>}
            <form onSubmit={handleSubmit}>
                <label >Email:</label>
                <br></br>
                <input type="text" ref={emailRef} defaultValue={currentUser.email}></input>
                <br></br>
                <label >Password:</label>
                <br></br>
                <input type="text" ref={passwordRef} placeholder="Leave blank to keep the same"></input>
                <br></br>
                <label >Password Confirmation:</label>
                <br></br>
                <input type="text" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"></input>
                <br></br>
                <input disabled={loading} type="submit" value="Update"></input>
            </form>

            <div><Link to="/">Cancel</Link></div>
        </>

    )
}
