import React, { useState} from 'react'
// import ItemList from './AddRemove/ItemList'
import Item from './SItem';
import { useDispatch, useSelector } from 'react-redux';


const SoldItems = () => {
    const products = useSelector((state) => state.products);
    
    return (
        <div>
            <div>
                <div className='item-table'>
                    <div className='table'>
                        <div className='table-title'>
                            <div className='table-title-1'>Sold Items</div>
                        </div>
                        <div className='item-list'>
                            {products.map(product=>{
                                if(product.sold === true)
                                return (<Item key={product._id}
                                    id = {product._id}
                                    image={product.featureImg}
                                    camName={product.modelname}
                                    camPrice={product.price}
                                />);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoldItems
