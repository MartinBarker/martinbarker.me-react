import React, { useEffect, useState } from 'react';
//import './NavBar.css'; // Import your CSS file for styling

const NavBar = ({ children }) => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    // Function to check if screen size is mobile
    const checkMobileScreen = () => {
        setIsMobileScreen(window.innerWidth <= 768); // Adjust the width as per your mobile breakpoint
    };

    // Add event listener on component mount
    useEffect(() => {
        checkMobileScreen();
        window.addEventListener('resize', checkMobileScreen);

        // Cleanup function to remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkMobileScreen);
        };
    }, []);

    return (
        <nav className={isMobileScreen ? 'top-nav' : 'side-nav'}>
            {children}
        </nav>
    );
};

export default NavBar;