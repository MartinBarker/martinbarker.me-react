import React, { useContext, useState, useEffect } from 'react'
import "./MainSidebar.css"
import ProgressiveImage from "./ProgressiveImage";
import { Link, useNavigate } from "react-router-dom";
import Vibrant from "node-vibrant";

//get images from folder
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../aesthetic-images/', (false), (/^\.\/.*$/), ('sync')))
const thumbnails = importAll(require.context('../aesthetic-images/thumbnails/', (false), (/^\.\/.*$/), ('sync')))
    
const MainSidebar = ({ children }) => {
    useEffect(() => {
        getRandomImage() // Run! Like go get some data from an API.
    }, []);

    function getRandomImage() {

        var randomImgIndex = Math.floor(Math.random() * images.length) + 0
        var randomImg = images[randomImgIndex]
        var randomImgThumbnail = images[randomImgIndex]
        console.log('getRandomImage() randomImg= ', randomImg)

        setColorSrcImg(randomImg)
        setColorSrcImgThumbnail(colorSrcImgThumbnail)

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
    const [colorSrcImg, setColorSrcImg] = React.useState("");
    const [colorSrcImgThumbnail, setColorSrcImgThumbnail] = React.useState("");

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

                    <a className="color3" data-ulid="expand_this" onClick={menuItemClicked} href="#">Projects <p id='projects-arrow'>▼</p></a>
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
                        <button onClick={getRandomImage}>Refresh Colors</button>
                        <br></br>
                        

                        <div className="content">
                            <div className="row"> 
                                <div className="cell">
                                <ProgressiveImage
                                    className={"colorSrcImg"}
                                    alt={"color source image"}
                                    overlaySrc={colorSrcImg}
                                    src={colorSrcImg}
                                />
                                </div>
                            </div>
                        </div>


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