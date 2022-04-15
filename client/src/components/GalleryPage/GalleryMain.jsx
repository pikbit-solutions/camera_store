import React from 'react'
import '../../assets/styles/Gallery/galleryMain.scss'
import SubGroup from './SubGroup';
import Navbar from '../HomePage/navBar'


const GalleryMain = () => {
  return (
    <div className='gal'>
        <Navbar />
        <div className='gal-main'>
            <div className='gal-title'>
                <h1>Gallery</h1>
            </div>
            <div className='gal-container'>
                <SubGroup/>
            </div>
        </div>
    </div>
  )
}

export default GalleryMain