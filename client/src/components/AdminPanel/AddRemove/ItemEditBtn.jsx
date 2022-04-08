import React from 'react'
import Edit from '@mui/icons-material/Edit';


const ItemEditBtn = ({pid,setCurrentId,setLoadAdd}) => {
    const editItem = () => {
        setLoadAdd(1);
        setCurrentId(pid);
    }
    
    return (
        <div className='item-button' onClick={editItem}>
            <div className='item-button-edit'>
                <Edit fontSize = 'large'/>
            </div>
        </div>
    )
    
}

export default ItemEditBtn
