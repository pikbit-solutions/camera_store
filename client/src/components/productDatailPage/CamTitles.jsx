import React from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';

const CamTitles = ({ ID }) => {
  const [specificProduct, setSpecificProduct] = UseState([]);
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
    <>
      {specificProduct.modelname && (
        <div className='camTitle-main'>
          <div className='camTitle-name'>
            {specificProduct.modelname}
          </div>
          <div className='camTitle-price'>
            Rs. {specificProduct.price}.00
          </div>
        </div>
      )}
    </>
  )
}

export default CamTitles