import React from 'react'
import './SidebarLayout.css';

const SidebarLayout = ({ children }) => {

    return (
        <>
            
            <div>

                <label htmlFor="sidebar-checkbox" className="sidebar-toggle"></label>
                <input type="checkbox" className="sidebar-checkbox" id="sidebar-checkbox"></input>


                <div className="sidebar" id="sidebar">

                    <div className="sidebar-item">
                        <p>Find the things you love but forgot to save.</p>
                    </div>

                    <nav className="sidebar-nav">
                        <a className="sidebar-nav-item" href="/">Home</a>
                        <a className="sidebar-nav-item" href="/get-started">Get Fetching</a>
                        <a className="sidebar-nav-item" href="http://app.fetching.io/sessions/new">Login</a>
                        <a className="sidebar-nav-item" href="/faq">FAQ</a>
                        <a className="sidebar-nav-item" href="/blog">Blog</a>
                        <a className="sidebar-nav-item" href="/about">About</a>
                        <a className="sidebar-nav-item" href="/privacy-policy">Privacy</a>
                        <a className="sidebar-nav-item" href="/privacy-policy" data-uv-trigger>Contact Us</a>
                    </nav>

                </div>

                <div className="wrap">
                    
                    <div className="topnav">
                        <a className="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                    
                    page content page content page content page content 
                    <br></br>
                    page content page content page content page content 
                    <hr></hr>
                    page content page content page content page content 
                    <br></br>
                    page content page content page content page content 
                    <hr></hr>
                    page content page content page content page content 
                    <br></br>
                    page content page content page content page content 
                    <hr></hr>
                    
                
                </div>

            </div>
        </>
    )
}

export default SidebarLayout