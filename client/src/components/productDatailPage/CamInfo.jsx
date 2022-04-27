import React, { useEffect, useRef } from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';

const CamInfo = ({ ID }) => {

  const [specificProduct, setSpecificProduct] = UseState([]);
  const flag = useRef(true);
  useEffect(() => {
    async function fetchdata() {
      try {
        if (flag.current) {
          const { data } = await specificProApi(ID);
          setSpecificProduct(data.specs);
          // console.log(specificProduct)
          flag.current = false;
        }
      }
      catch (error) {
        console.log(error.message);
      }
    }
    fetchdata();
  }, [specificProduct]);

  return (
    <div className='camInfo-main'>
      {specificProduct && (
        <div className='camInfo-container'>
          <div className='camInfo-specs'>
            {specificProduct.length > 0 && specificProduct.map((item) => {
              return (
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
              <a style={{color : 'inherit', textDecoration:'none'}} target='_blank' href="https://api.whatsapp.com/send?phone=94764881820&app=facebook&entry_point=page_cta">
                Message
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CamInfo