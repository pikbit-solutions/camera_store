import React from 'react'
import Sold from '@mui/icons-material/AssignmentTurnedIn';
import { useDispatch } from 'react-redux';
import { sellProduct } from '../../../redux/actions/productActions';

const ItemSoldBtn = ({pid}) => {
const dispatch = useDispatch();

    const sellItem = () => {
        console.log(pid);
        dispatch(sellProduct(pid));
    }

    return (
        <div className='item-button' onClick={sellItem}>
            <div className='item-button-sold'>
                <Sold fontSize = 'large'/>
            </div> 
        </div>
    )
}

export default ItemSoldBtn
