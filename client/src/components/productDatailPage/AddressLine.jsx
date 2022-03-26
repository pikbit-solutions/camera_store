import React from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';

const AddressLine = ({ID}) => {
  const [specificProduct,setSpecificProduct] = UseState([]); 
  const fetchProduct = async () => {
    try {
      const { data } = await specificProApi(ID);
      setSpecificProduct(data)
    }
    catch (error) {
      console.log(error.message);
    }
  }
  fetchProduct();

  return (
    <div className='address-main'>
        <div className='address'>
            Store / Product / {specificProduct.modelname}
        </div>
    </div>
  )
}

export default AddressLine