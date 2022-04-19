import React from 'react'

const GalleryPhoto = ({source}) => {
  return (
    <div>
        <img className="gal-img" src={source} />
    </div>
  )
}

export default GalleryPhoto