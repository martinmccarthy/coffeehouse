import Menu from '../Menu/Menu';
import './Navbar.css';
import { useState } from 'react';

import * as motion from "motion/react-client";

function Navbar({COMPANY_NAME}) {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleHamburgerClick() {
        const menuButton = document.querySelector(".menuButton");
        menuButton.classList.toggle("open");
        setMenuOpen(!menuOpen);
    }
    
    return(
        <div className="navContainer">
            <div className="titleContainer">
                <h1 className="navTitle">{COMPANY_NAME}</h1>
            </div>
            <div className="hamburgerContainer">
                <motion.div onClick={handleHamburgerClick} className="menuButton"
                    whileHover={{scale: 1.2}}>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                    <span className="hamburgerSpan"></span>
                </motion.div>
            </div>

            <Menu isOpen={menuOpen} />
        </div>
    )
}

export default Navbar;