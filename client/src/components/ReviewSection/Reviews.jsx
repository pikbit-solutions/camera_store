import React from 'react'
import ImageGallery from 'react-image-gallery';
import '../../assets/styles/ReviewSection/review.scss'

import img1 from '../../assets/images/5D.png'
import img2 from '../../assets/images/700D.png'
import img3 from '../../assets/images/50D.png'

const images = [    
                    { original: img1 }, 
                    { original: img2 }, 
                    { original: img3 },
                ];

                
const Reviews = () => {
    return (
        <div className='rw-all'>
            <div className='rw-title'>Reviews</div>
            <div className='rw-crsl'>
                <ImageGallery items={images} />
            </div>
            <div className='rw-padding'/>
        </div>
    )
}

export default Reviews