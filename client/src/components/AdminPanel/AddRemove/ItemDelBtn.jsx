import React from 'react'
import Delete from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { delProduct } from '../../../redux/actions/productActions';

const ItemDelBtn = ({pid}) => {
    const dispatch = useDispatch();

    const delItem = () => {
        // console.log(pid);
        dispatch(delProduct(pid))
    }
    return (

        <div className='item-button' onClick={delItem} >
            <div className='item-button-delete'>
                <Delete fontSize = 'large'/>
            </div>
        </div>
    )
}

export default ItemDelBtn
