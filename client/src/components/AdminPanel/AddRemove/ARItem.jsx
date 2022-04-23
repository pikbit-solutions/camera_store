import React from 'react'
import SoldBtn from './ItemSoldBtn'
import EditBtn from './ItemEditBtn'
import DelBtn from './ItemDelBtn'

const ARItem = ({image,camName,camPrice,id,loadAdd,setCurrentId,setLoadAdd,imageLink}) => {

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
                        <SoldBtn pid={id}/>
                        <EditBtn pid={id} loadAdd={loadAdd} setCurrentId={setCurrentId} setLoadAdd={setLoadAdd}/>
                        <DelBtn pid={id} imageLink={imageLink}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ARItem
