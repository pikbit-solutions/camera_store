import React from 'react'
import Delete from '@mui/icons-material/Delete';

const ItemDelBtn = () => {
    return (
        <div className='item-button'>
            <div className='item-button-delete'>
                <Delete fontSize = 'large'/>
            </div>
        </div>
    )
}

export default ItemDelBtn
