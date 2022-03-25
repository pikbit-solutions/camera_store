import { Button, Rating } from '@mui/material';
import React from 'react';


function card({imagepath, price,name,specs}) {
    return (
        <div className='card'>
            <div className='card-photo'>
            <img className='card-img' width={250} src={imagepath} alt='camera-img'/>
            </div>
            <div className='card-body'>
                <h2>{name}</h2>
                {specs.map((spec)=>{
                    return(
                        <p>{spec}</p>
                    )
                })}
            </div>
            <div className='card-end'>
                <h3 className='price-card'>{price}</h3>
                {/* <Rating size="small" name="read-only" value={value} readOnly /> */}
                <Button>Check Out</Button>
            </div>

        </div>
    )
}

export default card
