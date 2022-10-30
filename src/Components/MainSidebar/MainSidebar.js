import React, { useEffect } from 'react'
import "./MainSidebar.css"
import ProgressiveImage from "../ProgressiveImage";
import { Link } from "react-router-dom";
//get images from folder


function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../aesthetic-images/', (false), (/^\.\/.*$/), ('sync')))
const thumbnails = importAll(require.context('../../aesthetic-images/thumbnails/', (false), (/^\.\/.*$/), ('sync')))
    


const MainSidebar = ({ children }) => {

    useEffect(
        getRandomImage, // <- function that will run on every dependency update
        [] // <-- empty dependency array
    )

    function getRandomImage() {
        console.log('getRandomImage() images=',images.length)
        console.log('getRandomImage() thumbnails=',thumbnails.length)
        var randomImgIndex = Math.floor(Math.random() * images.length) + 0
        console.log('getRandomImage() randomImgIndex=',randomImgIndex)
        var randomImg = images[randomImgIndex]
        var randomImgThumbnail = images[randomImgIndex]
        console.log('randomImg= ', randomImg)
        console.log('randomImgThumbnail= ', randomImgThumbnail)

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
                        <a href="/" className='sidebar-header color1'>Martin Barker</a>
                    </div>

                    <a href="/" className='color2'>About</a>

                    <a className="color3" data-ulid="expand_this" onClick={menuItemClicked} href="/">Projects X</a>
                    <ul className={` ${toggleMenuItem ? 'ul-show' : ' '} `}>
                        <li><a href="/">tagger.site</a></li>
                        <li>
                            <Link to="/rendertune">RenderTune</Link>
                        </li>
                        <li><a href="/">Vinyl2Digital</a></li>
                        <li><a href="/">Popularify</a></li>
                    </ul>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>

                    {/* Image Display LazyLoad */}
                    <div className='imgColor'>
                        <button >Refresh Colors</button>
                        <br></br>
                        <ProgressiveImage
                            className={"colorSrcImg"}
                            alt={"color source image"}
                            overlaySrc={
                                colorSrcImg
                                //require("../aesthetic-images/thumbnails/418112_thumb.jpg")
                            }
                            src={
                                colorSrcImg
                                //require("../aesthetic-images/418112.jpg")
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

                    <div className={`  ${!toggleSidebarIcon ? ' ' : '  '}`}>
                        {children}
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainSidebar