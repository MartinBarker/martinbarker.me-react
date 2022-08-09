import React from 'react'
import './SidebarLayout.css';
import { Link } from "react-router-dom";

const SidebarLayout = ({ children }) => {

    const mediaQuery = window.matchMedia("(min-width: 42rem)");
    const [query, setQuery] = React.useState(mediaQuery);
    const [expanded, setExpanded] = React.useState(query.matches);
  
    React.useEffect(() => {
      mediaQuery.addListener(setQuery);
      return () => mediaQuery.removeListener(setQuery);
    }, [mediaQuery]);
  
    React.useEffect(() => {
      setExpanded(query.matches);
    }, [query]);
    
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
                        <Link className="sidebar-nav-item" to="/rendertune">rendertune</Link>
                        <Link className="sidebar-nav-item" to="/pcd">public copyright database</Link>
                        <hr></hr>
                        <a>~~ Auth ~~</a>
                        <Link className="sidebar-nav-item" to="/login">Login</Link>
                        
                    </nav>

                </div>

                <div className="wrap">
                    
                    <div className="topnav">
                        
                        <a className="active" href="#home">   zzzzzzzz 
                            <label htmlFor="sidebar-checkbox" className="sidebar-toggle">CLICK</label>
                        </a>
                        <a href="#news">Login</a>
                        <a href="#contact">Signout</a>
                        <a href="#about">Account</a>
                        <a href="#about">SignUp</a>
                    </div>
                    
                    {children}
                    
                
                </div>

            </div>
        </>
    )
}

export default SidebarLayout