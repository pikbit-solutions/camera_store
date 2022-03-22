import React from 'react'
import Sold from '@mui/icons-material/AssignmentTurnedIn';

const ItemSoldBtn = () => {
    return (
        <div className='item-button'>
            <div className='item-button-sold'>
                <Sold fontSize = 'large'/>
            </div> 
        </div>
    )
}

export default ItemSoldBtn
