import React from 'react'
import { useState as UseState, useRef, useEffect } from 'react';
import { specificProApi } from '../../api/apiMain';

const AddressLine = ({ ID }) => {
  const [specificProduct, setSpecificProduct] = UseState([]);
  const flag = useRef(true);
  useEffect(() => {
    async function fetchdata() {
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
    }
    fetchdata();
  }, []);
  return (
    <div className='address-main'>
      <div className='address'>
        Store / {specificProduct.modelname}
      </div>
    </div>
  )
}

export default AddressLine