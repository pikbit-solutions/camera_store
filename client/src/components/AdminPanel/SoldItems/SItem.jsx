import React from 'react'
import DelBtn from '../AddRemove/ItemDelBtn'

const SItem = ({image,camName,camPrice,id}) => {

    return (
        <div>
            <div className='item'>
                <div className='item-image'>
                    <img src={image} alt="cam1" />
                </div>
                <div className='item-name'>{camName}</div>
                <div className='item-price'>Rs. {camPrice}.00</div>
                <div className='ibl'>
                    <div className='item-button-list'>
                        <DelBtn pid={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SItem