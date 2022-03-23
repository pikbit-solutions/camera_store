import React, { useState} from 'react'
// import ItemList from './AddRemove/ItemList'
import AddProduct from './AddRemove/AddProduct'
import Item from './AddRemove/ARItem';
import { useDispatch, useSelector } from 'react-redux';


const AddRemove = () => {
    const products = useSelector((state) => state.products);
    const [loadAdd, setloadAdd] = useState(0);

    const addButtonSwitch = () => {
        setloadAdd(1)
    }

    const abtn = () => {
        setloadAdd(0)
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
                            {products.map(product=>{
                                return (<Item key={product._id}
                                    id = {product._id}
                                    image={product.featureImg}
                                    camName={product.modelname}
                                    camPrice={product.price}
                                />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <AddProduct active={loadAdd === 1 ? "" : "comp-deactivate"} btn={abtn}/>
        </div>
    )
}

export default AddRemove
