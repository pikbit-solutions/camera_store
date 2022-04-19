import React,{useEffect, useRef} from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';

const CamTitles = ({ ID }) => {
  const [specificProduct, setSpecificProduct] = UseState([]);
  const flag = useRef(true);
  useEffect(async () => {
    try {
      if (flag.current) {
        const { data } = await specificProApi(ID);
        setSpecificProduct(data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
    flag.current = false;
  }, []);

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