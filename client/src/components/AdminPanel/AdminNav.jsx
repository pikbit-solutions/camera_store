import React, {useState} from 'react'
import navlogo from '../../assets/images/navLogo.png'
import { Link } from "react-router-dom";

const AdminNav = () => {
    const [isActive, setIsActive] = useState(false);
    const activator = () => {
        setIsActive(!isActive);
        // console.log(isActive)
    }

    return (
        <div className='navbar'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <a href="#"><img src={navlogo} alt="LOGO" /></a>
                    <div className='nav-item-toggler' onClick={activator}>
                        <div className='nav-toggler'>
                            <div className='nav-tog-bar'></div>
                            <div className='nav-tog-bar'></div>
                            <div className='nav-tog-bar'></div>
                        </div>
                    </div>
                </div>
                <div className={isActive?'nav-items':'nav-items nav-active'}>
                    {/* <a href="#home" className='nav-item'>
                      <div>Home</div>
                    </a> */}
                    <div className='admin-nav-person'>
                        <p className='admin-person-tag'>Admin</p>
                    </div>
                    <Link to="/storepage" className='nav-item'>
                      <div>Logout</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNav
