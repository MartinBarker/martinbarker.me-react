import React, { Component } from 'react'
import './SidebarCss.css';

export default class SidebarCss extends Component {
    render() {
        
        const [isSidebarOpen,setIsSidebarOpen] = React.useState(false);
        /*
        function sideNavClicked() {
            //isSidebarOpen ? closeNav() : openNav();
          }

        function openNav() {
            //setIsSidebarOpen(true)
            //isSidebarOpen = true;
            //document.getElementById('mySidebar').classList.add('sidebar-show');
            //document.getElementById('main').classList.add('main-show');
          }

        function closeNav() {
            //setIsSidebarOpen(false)
            //isSidebarOpen = false;
            //document.getElementById('mySidebar').classList.remove('sidebar-show');
            //document.getElementById('main').classList.remove('main-show');
          }

          function toggleMenuItem(){
            console.log('expand menu item')
          }
          */
         function exFunc(){
             console.log('exFunc')
         }
        return (
            <>

                <div className="main-content">
                    <div id="mySidebar" className={`sidebar super-animation `}>
                        <a className="closebtn" onClick={exFunc}>×</a>
                        <a href="#">About</a>
                        <a data-ulid="expand_this" onClick={exFunc} href="#">Expand This ▼</a>
                        <ul id="expand_this">
                            <li><a href="#">Coffee</a></li>
                            <li><a href="#">Coverage</a></li>
                        </ul>

                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>

                    <div id="main" className="super-animation main-show">
                        <button onClick={exFunc} className="openbtn" >☰</button>
                        <h2>Collapsed Sidebar</h2>
                        <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
                    </div>
                </div>
            </>

        )


    }
}
