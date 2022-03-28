import { Button, Rating } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'


function card({imagepath, price,name,specs,id}) {
    return (
        <div className='card'>
            <div className='card-photo'>
            <img className='card-img' width={250} src={imagepath} alt='camera-img'/>
            </div>
            <div className='card-body'>
                <h2>{name}</h2>
                {specs.slice(0,4).map((spec)=>{
                    return(
                        <p>{spec}</p>
                    )
                })}
            </div>
            <div className='card-end'>
                <h3 className='price-card'>Rs. {price}.00</h3>
                {/* <Rating size="small" name="read-only" value={value} readOnly /> */}
                <Link to={`product/${id}`}>
                    <button>Checkout</button>
                </Link>
            </div>

        </div>
    )
}

export default card
