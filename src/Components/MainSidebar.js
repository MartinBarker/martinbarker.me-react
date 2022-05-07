import React from 'react'
import "./MainSidebar.css"
import ProgressiveImage from "./ProgressiveImage";
import { Link, useNavigate } from "react-router-dom";
const MainSidebar = ({ children }) => {

    function getRandomImage() {

    }

    //toggle open/close sidenav depending on current status
    function sideNavClicked() {
        console.log('sideNavClicked()')
        setShowSideNav(!showSideNav)
        setToggleSidebarIcon(!toggleSidebarIcon)

    }

    function menuItemClicked() {
        console.log('toggleMenuItem()')
        setToggleMenuItem(!toggleMenuItem)
    }

    const [showSideNav, setShowSideNav] = React.useState(true);
    const [toggleMenuItem, setToggleMenuItem] = React.useState(true);
    const [toggleSidebarIcon, setToggleSidebarIcon] = React.useState(false);

    return (
        <>
            <div className="main-content">
                {/* Sidebar */}
                <div id="mySidebar" className={` super-animation sidebar ${showSideNav ? 'sidebar-show' : ' '} `} >
                    {/* Martin Barker */}
                    <div className="color0">
                        {/* Name Text */}
                        <a href="#" className='sidebar-header color1'>Martin Barker</a>
                    </div>

                    <a href="#" className='color2'>About</a>

                    <a className="color3" data-ulid="expand_this" onClick={menuItemClicked} href="#">Projects X</a>
                    <ul className={` ${toggleMenuItem ? 'ul-show' : ' '} `}>
                        <li><a href="#">tagger.site</a></li>
                        <li>
                            <Link to="/rendertune">RenderTune</Link>
                        </li>
                        <li><a href="#">Vinyl2Digital</a></li>
                        <li><a href="#">Popularify</a></li>
                    </ul>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>

                    {/* Image Display LazyLoad */}
                    <div className='imgColor'>
                        <button >Refresh Colors</button>
                        <br></br>
                        <ProgressiveImage
                            className={"colorSrcImg"}
                            alt={"color source image"}
                            overlaySrc={
                                require("../aesthetic-images/thumbnails/418112_thumb.jpg")
                            }
                            src={
                                require("../aesthetic-images/418112.jpg")
                            }
                        />

                    </div>
                </div>

                {/* Page Contents */}
                <div id="main" className={` super-animation ${showSideNav ? 'show-sidebar' : ' '} `}>

                    {/* Open & Close Sidebar Button */}
                    <button className={`sidebarBtn ${toggleSidebarIcon ? 'collapsed-sidebarBtn' : ' '} `} onClick={sideNavClicked}>
                        <a className={`chevron-char ${toggleSidebarIcon ? 'sidebar-collapsed' : ' '} `} >&gt;</a>
                    </button>

                    <div>
                        <h1>responsive page content responsive page content responsive page content </h1>
                        <br></br>
                        <h4>responsive page content </h4>
                    </div>

                    {/* 
                    <div className={`  ${!toggleSidebarIcon ? ' ' : '  '}`}>
                        {children}
                    </div>
                    */}

                </div>
            </div>
        </>
    )
}

export default MainSidebar