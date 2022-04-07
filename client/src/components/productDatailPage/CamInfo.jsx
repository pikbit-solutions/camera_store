import React from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';

const CamInfo = ({ID}) => {

const [specificProduct,setSpecificProduct] = UseState([]); 
  const fetchProduct = async () => {
    try {
      const { data } = await specificProApi(ID);
      setSpecificProduct(data.specs)
    }
    catch (error) {
      console.log(error.message);
    }
  }
  fetchProduct();

  return (
    <div className='camInfo-main'>
      {specificProduct.length>0 && (
        <div className='camInfo-container'>
            <div className='camInfo-specs'>
                {specificProduct.length>0 && specificProduct.map((item)=>{
                    return(
                        <li key={item}>{item}</li>
                    )
                })}
            </div>
            <div className='camInfo-btns'>
                <div>
                    <div className='info-sell-btn'>
                        Buy Now
                    </div>
                </div>
                <div className='info-msg-btn'>  
                    Message
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default CamInfo