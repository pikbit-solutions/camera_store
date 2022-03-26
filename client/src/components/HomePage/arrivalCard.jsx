import React from 'react'
import {Link} from "react-router-dom";

const arrivalCard = ({imgPath, itm_model, itm_prize, proId }) => {
    // console.log(proId);
    return (
        <div className='arr-card'>
            <div className='arr-card-holder'>
                <div className='arr-itm-img'><img src={imgPath} alt="cam" /></div>
                <div className='arr-item-info'>
                    <h2>{itm_model}</h2>
                    <h1>Rs. {itm_prize}.00</h1>
                </div>
                <div >
                    <Link to={`store/product/${proId}`} className='arr-item-btn'>
                        <div>CHECKOUT</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default arrivalCard
