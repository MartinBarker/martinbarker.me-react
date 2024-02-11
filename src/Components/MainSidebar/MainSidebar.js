import React, { useEffect } from 'react'
import ProgressiveImage from "../ProgressiveImage";
import { Link } from "react-router-dom";
import { ColorExtractor } from 'react-color-extractor'
import * as Vibrant from 'node-vibrant'
import "./MainSidebar.css"

//get images
function importAll(r) {return r.keys().map(r);} 
const images = importAll(require.context('../../aesthetic-images/', (false), (/^\.\/.*$/), ('sync')))
const thumbnails = importAll(require.context('../../aesthetic-images/thumbnails/', (false), (/^\.\/.*$/), ('sync')))

const MainSidebar = ({ children }) => {
    const [showSideNav, setShowSideNav] = React.useState(true);
    const [toggleMenuItem, setToggleMenuItem] = React.useState(true);
    const [toggleSidebarIcon, setToggleSidebarIcon] = React.useState(false);
    const [colorSrcImg, setColorSrcImg] = React.useState("");
    const [colorSrcImgThumbnail, setColorSrcImgThumbnail] = React.useState("");
    const [imgColors, setImgColors] = React.useState(getInitImage);

    function getInitImage(){
        var randomImg = images[Math.floor(Math.random() * images.length) + 0]
        var randomImgThumbnail = thumbnails[Math.floor(Math.random() * images.length) + 0]
        let vibrantObjFunc = function(randomImg) {
            let v = new Vibrant(randomImg)
            return v.getPalette()
        }
          let swatches = vibrantObjFunc(randomImg)
          console.log('swatches=',swatches) 
          let colorSwatches = swatches.then(function(result) {
            console.log('swatches result=',result) 
            setColorSrcImg(randomImg)
            setColorSrcImgThumbnail(randomImgThumbnail)
            return(['#0000FF','#0000FF','#0000FF','#0000FF','#0000FF'])
          })
        console.log('colorSwatches: ',colorSwatches)
        return(['#0000FF','#0000FF','#0000FF','#0000FF','#0000FF'])
    }

    useEffect(()=>{
        //refreshImage()
        const handleResize = () => {
            console.log(`resize, window.innerWidth=${window.innerWidth}`)
            if(window.innerWidth > 767){
                console.log(`show sidebar}`)
                setShowSideNav(true)
                setToggleSidebarIcon(false)
            }else if(window.innerWidth < 767){
                console.log(`show topnavbar}`)
                setShowSideNav(false)
                setToggleSidebarIcon(true)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function refreshImage() {
        /*
        var randomImgIndex = Math.floor(Math.random() * images.length) + 0
        var randomImg = images[randomImgIndex]
        var randomImgThumbnail = thumbnails[randomImgIndex]
        var colorSrcImg = randomImg
        //remove leading '/' char
        colorSrcImg = colorSrcImg.substring(1);
        console.log('refreshImage() colorSrcImg= ', colorSrcImg)
        setColorSrcImg(colorSrcImg)
        setColorSrcImgThumbnail(randomImgThumbnail)
        */
    }

    function getReadableTextColor(inputHexColor) {
        var rgbColor = hexToRgb(inputHexColor)
        if(!rgbColor){
            //rgbColor=['#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF']
        }
        if (((rgbColor[0]) * 0.299 + (rgbColor[1]) * 0.587 + (rgbColor[2]) * 0.114) > 186) {
          return ("#000000")
        } else {
          return ("#ffffff")
        }
      }

      function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ] : null;
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

    function handleImgColors(colors){
        console.log('handleImgColors() colors=',colors)
    } //this.setState(state => ({ colors: [...state.colors, ...colors] }))

    function getInitialRenderImg(){
        console.log('getInitialRenderImg()')
        var randomImg = images[Math.floor(Math.random() * images.length) + 0]
        var randomImgThumbnail = thumbnails[Math.floor(Math.random() * images.length) + 0]
        console.log('randomImg=',randomImg)
        try{
            //let v = new Vibrant('/static/media/R-3453636-1507227902-2543.jpeg (1).b861b8f5.jpg')
            //v.getPalette((err, palette) => console.log(palette))
            Vibrant.from('/static/media/large_6b7ff0dcff0aeddee4070c6cd96e982d.24983b55.jpg').getPalette((err, palette) => console.log(palette))
        }catch(e){
            console.log('e=',e)
        }
        let hexColors = ['#FF0000','#FF0000','#FF0000','#FF0000','#FF0000']
        return hexColors
    }

    return (
        <>
            <div className="main-content">

                {/* TopNavBar */}
                <header id="titlebar">
                    <div id="drag-region">
                        <div id="window-title">
                            <span>RenderTune <span id="version">v1.1.4</span></span> 
                        </div>S
                        <div id="window-controls">
                            X
                        </div>
                    </div>
                </header>

                {/* Sidebar */}
                <div id="mySidebar"  style={{ 'backgroundColor': imgColors[2], color: `${getReadableTextColor(imgColors[2])}` }} className={` super-animation sidebar ${showSideNav ? 'sidebar-show' : ' '} `} >

                    <div className="color0">
                        <a  className='sidebar-header color1'>Martin Barker</a>
                    </div>
                    
                    <a  className='color2'>About</a>
                    <a className="color3" data-ulid="expand_this" onClick={menuItemClicked} >Projects <p id='projects-arrow'>▼</p></a>
                    <ul className={` ${toggleMenuItem ? 'ul-show' : ' '} `}>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/rendertune">RenderTune</Link>
                        <Link to="/vinyl2digital">Vinyl2Digital</Link>
                        <Link to="/tagger">tagger.site</Link>
                        <Link to="/ytcpdb">YouTube Copyright DB</Link>
                        <Link to="/splitbysilence">splitbysilence</Link>
                        <Link to="/signup">signup</Link>
                        <Link to="/login">login</Link>
                        <Link to="/forgot-password">forgot-password</Link>
                        <Link to="/Profile">profile</Link>
                    </ul>
                    <br></br><br></br><br></br>
                    <div id='imgColor'>
                        <div className="content">
                            <button onClick={refreshImage}>Refresh Colors</button>
                            <div className="row">
                                <div className="cell">
                                    {colorSrcImg !== "" ?
                                        <ColorExtractor
                                            onError={error => console.log(`err=`, error)}
                                            src={colorSrcImg}
                                            getColors={colors => setImgColors(colors)}
                                        />
                                        : null}
                                    <ProgressiveImage
                                        className={"colorSrcImg"}
                                        alt={"color source image"}
                                        overlaySrc={colorSrcImgThumbnail}
                                        src={colorSrcImg}
                                    />
                                </div>
                                <div className="colorBox" title="Color 1" style={{ background: imgColors[0] }}> </div>
                                <div className="colorBox" title="Color 1" style={{ background: imgColors[1] }}> </div>
                                <div className="colorBox" title="Color 1" style={{ background: imgColors[2] }}> </div>
                                <div className="colorBox" title="Color 1" style={{ background: imgColors[3] }}> </div>
                                <div className="colorBox" title="Color 1" style={{ background: imgColors[4] }}> </div>
                                <div className="colorBox" title="Color 1" style={{ background: imgColors[5] }}> </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Contents */}
                <div id="main" className={` apple super-animation ${showSideNav ? 'show-sidebar' : ' '} `}>
                    {/* Open & Close Sidebar Button */}
                    <button className={`sidebarBtn ${toggleSidebarIcon ? 'collapsed-sidebarBtn' : ' '} `} onClick={sideNavClicked}>
                        <a  className={`chevron-char ${toggleSidebarIcon ? 'sidebar-collapsed' : ' '} `} >&gt;</a>
                    </button>
                    {children}
                
                </div>
            </div>
        </>
    )
}

export default MainSidebar