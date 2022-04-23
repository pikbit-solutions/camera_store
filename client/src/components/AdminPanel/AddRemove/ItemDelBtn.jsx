import React from 'react'
import Delete from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { delProduct } from '../../../redux/actions/productActions';
import { storage } from '../../../firebase/Fbindex';
import { ref, deleteObject, listAll } from 'firebase/storage'

const ItemDelBtn = ({ pid, imageLink }) => {
    const dispatch = useDispatch();

    const delItem = () => {
        // console.log(pid);
        const delRef = ref(storage, imageLink).parent;
        listAll(delRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    deleteObject(itemRef).then(() => {
                        console.log('deleted !', itemRef.fullPath)
                    }).catch((error) => {
                        alert(' Delete Error ! ');
                        console.log(error)
                    });
                });
            })
            .catch((error) => {
                alert(' Can\'t load Gallery Images ! ');
            })
        dispatch(delProduct(pid))

    }
    return (

        <div className='item-button' onClick={delItem} >
            <div className='item-button-delete'>
                <Delete fontSize='large' />
            </div>
        </div>
    )
}

export default ItemDelBtn
