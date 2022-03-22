import React from 'react'
import SoldBtn from './ItemSoldBtn'
import EditBtn from './ItemEditBtn'
import DelBtn from './ItemDelBtn'

const ARItem = ({image,camName,camPrice}) => {
    return (
        <div>
            <div className='item'>
                <div className='item-image'>
                    <img src={image} alt="cam1" />
                </div>
                <div className='item-name'>{camName}</div>
                <div className='item-price'>{camPrice}</div>
                <div className='ibl'>
                    <div className='item-button-list'>
                        <SoldBtn/>
                        <EditBtn/>
                        <DelBtn/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ARItem
