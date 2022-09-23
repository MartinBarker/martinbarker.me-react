import React, { useState } from 'react'
import './SidebarLayout.css';
import { Link } from "react-router-dom";
import { useAuth }  from "../../Contexts/AuthContext"

const SidebarLayout = ({ children }) => {
    const [error, setError] = useState("")
    
    const mediaQuery = window.matchMedia("(min-width: 42rem)");
    const [query, setQuery] = React.useState(mediaQuery);
    const [expanded, setExpanded] = React.useState(query.matches);
    const { currentUser, logout } = useAuth()

    React.useEffect(() => {
      mediaQuery.addListener(setQuery);
      return () => mediaQuery.removeListener(setQuery);
    }, [mediaQuery]);
  
    React.useEffect(() => {
      setExpanded(query.matches);
    }, [query]);
    
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
            <div>

                <input
                    type="checkbox"
                    className="sidebar-checkbox"
                    id="sidebar-checkbox"
                    checked={expanded}
                    onChange={(e) => setExpanded(e.target.checked)}
                ></input>

                <div className="sidebar" id="sidebar">
                    
                      
                    <div className="sidebar-item">
                        <p>martinbarker.me</p>
                    </div>

                    <nav className="sidebar-nav">
                        <Link className="sidebar-nav-item" to="/">Home</Link>
                        <Link className="sidebar-nav-item" to="/tagger">tagger</Link>
                        <Link className="sidebar-nav-item" to="/ytapi">Ytapi</Link>
                        <Link className="sidebar-nav-item" to="/rendertune">rendertune</Link>
                        <Link className="sidebar-nav-item" to="/pcd">public copyright database</Link>
                        <hr></hr>
                        <a>~~ Auth ~~</a>
                        <Link className="sidebar-nav-item" to="/login">Login</Link>
                        <Link className="sidebar-nav-item" to="/signup">Signup</Link>
                        <Link className="sidebar-nav-item" to="/profile">Profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                        
                    </nav>

                </div>

                <div className="wrap">  
                    <label htmlFor="sidebar-checkbox" className="sidebar-toggle">CLICK</label>
                    <br></br>
                    {error && <h1>error={error}</h1>}
                    {children}
                </div>

            </div>
        </>
    )
}

export default SidebarLayout