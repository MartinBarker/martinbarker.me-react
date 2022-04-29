import React from 'react'
import "./MainSidebar.css"
import ProgressiveImage from "./ProgressiveImage";

const MainSidebar = ({ children }) => {

    function getRandomImage(){

    }

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
                    <a href="#" className='sidebar-header'>Martin Barker</a>
                    <a href="#" >About</a>
                    <a  data-ulid="expand_this" onClick={menuItemClicked} href="#">Projects X</a>
                    <ul className={` ${toggleMenuItem ? 'ul-show' : ' '} `}>
                        <li><a  href="#">tagger.site</a></li>
                        <li><a  href="#">RenderTune</a></li>
                        <li><a  href="#">Vinyl2Digital</a></li>
                        <li><a  href="#">Popularify</a></li>
                    </ul>
                    <a  href="#">Blog</a>
                    <a  href="#">Contact</a>

                    {/* Image Display LazyLoad */}

                    <div>
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