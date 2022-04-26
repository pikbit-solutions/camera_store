import React, { useState } from 'react'
import navlogo from '../../assets/images/navLogo.png'
import { Link } from "react-router-dom";


const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const activator = () => {
        setIsActive(!isActive);
        // console.log(isActive)
    }

    return (
        <div className='navbar'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <a href="/"><img src={navlogo} alt="LOGO" /></a>
                    <div className='nav-item-toggler' onClick={activator}>
                        <div className='nav-toggler'>
                            <div className='nav-tog-bar'></div>
                            <div className='nav-tog-bar'></div>
                            <div className='nav-tog-bar'></div>
                        </div>
                    </div>
                </div>
                <div className={isActive ? 'nav-items' : 'nav-items nav-active'}>
                    <a href="/" className='nav-item'>
                        <div>Home</div>
                    </a>
                    <Link to="/store" className='nav-item'>
                        <div>Store</div>
                    </Link>
                    <Link to="/gallery" className='nav-item'>
                        <div>Gallery</div>
                    </Link>
                    <Link to="/login" className='nav-item'>
                        <div>Login</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
