import React from 'react'
import LazyLoad from './LazyImage'
import "./MainSidebar.css"
import LazyImage from "./LazyImage";

const MainSidebar = ({ children }) => {

    //toggle open/close sidenav depending on current status
    function sideNavClicked(){
        console.log('sideNavClicked()')
        setShowSideNav(!showSideNav)
    }

    function menuItemClicked(){
        console.log('toggleMenuItem()')
        setToggleMenuItem(!toggleMenuItem)
    }

    const [showSideNav, setShowSideNav] = React.useState(true);
    const [toggleMenuItem, setToggleMenuItem] = React.useState(true);

    return (
        <>
            <div className="main-content">
                <div 
                    id="mySidebar" 
                    className={`
                        super-animation 
                        sidebar 
                        super-animation 
                        ${showSideNav ? 'sidebar-show' : ' '}
                    `}
                >
                    <a href="#">About</a>
                    <a data-ulid="expand_this" onClick={menuItemClicked} href="#">Expand This ▼</a>
                    <ul className={`
                        ${toggleMenuItem ? 'ul-show' : ' '}
                    `}>
                        <li><a href="#">Coffee</a></li>
                        <li><a href="#">Coverage</a></li>
                    </ul>

                    <a href="#">Clients</a>
                    <a href="#">Contact</a>

                    {/* Image Display LazyLoad */}

                    <div>
                        <button >Refresh Colors</button>
                        {/* 
                        <LazyImage
                            src={require('../aesthetic-images/HUGE.jpg')}
                            alt={`Random image`}
                        />
                        */}

                    </div>
                </div>

                <div 
                    id="main" 
                    className={`
                    super-animation 
                        super-animation 
                        ${showSideNav ? 'main-show' : ' '}
                    `}
                >
                    <button className="openbtn" onClick={sideNavClicked}>☰</button>  
                    <h2>Collapsed Sidebar</h2>
                    <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
                    {children}

                </div>
            </div>
        </>
    )
}

export default MainSidebar