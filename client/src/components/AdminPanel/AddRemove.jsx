import React, { useState} from 'react'
// import ItemList from './AddRemove/ItemList'
import AddProduct from './AddRemove/AddProduct'
import Item from './AddRemove/ARItem';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';



const AddRemove = () => {
    const [currentId, setCurrentId] = useState(null); //for update product
    const products = useSelector((state) => state.products);
    const [loadAdd, setloadAdd] = useState(0);

    const addButtonSwitch = () => {
        setloadAdd(1)
    }

    const abtn = () => {
        setloadAdd(0);
        setCurrentId(null);
    }

    

    return (
        <div>
            <div className={loadAdd === 1 ? "comp-deactivate" : ""}>
                <div className='item-table'>
                    <div className='table'>
                        <div className='table-title'>
                            <div className='table-title-1'>Product List</div>
                            <div className='table-title-2'>
                                <div className='item-add-button' onClick={addButtonSwitch} >+Add</div>
                            </div>
                        </div>
                        <div className='item-list'>
                            {products.length>0 ? products.map(product=>{
                                if(product.sold === false)
                                return (<Item key={product._id}
                                    id = {product._id}
                                    image={product.featureImg}
                                    camName={product.modelname}
                                    camPrice={product.price}
                                    setCurrentId={setCurrentId}
                                    loadAdd={loadAdd}
                                    setLoadAdd={setloadAdd}
                                    imageLink={product.images.length>0?product.images[0]:'null'}
                                />);
                                })
                                : <CircularProgress style={{margin:'auto'}} color='warning' />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <AddProduct active={loadAdd === 1 ? "" : "comp-deactivate"} btn={abtn} currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default AddRemove
