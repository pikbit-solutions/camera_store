import React from 'react'
import Homepage from './homepage'
import Navbar from './navBar'
import '../../assets/styles/homePage/home.scss'

const home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Homepage />
        </div>
    )
}

export default home
