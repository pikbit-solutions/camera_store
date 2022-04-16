import React from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';

const AddressLine = ({ID}) => {

  return (
    <div className='address-main'>
        <div className='address'>
            Store / Product / {ID}
        </div>
    </div>
  )
}

export default AddressLine