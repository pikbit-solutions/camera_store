import React, { useState } from 'react'
import Specs from './SpecDetails'
const AddProduct = ({ active, btn }) => {

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDescrip, setProductDescrip] = useState('')



  return (
    <div className={active}>

      <div className='titlebar'>
        {/* <div className='title-deco'></div> */}
        <div className='title'>
          Add Product
        </div>
        <div className='product-back' onClick={btn}>Back</div>
      </div>

      <div className='form'>

        <div className='item'>
          <div className='item-name'>
            <p> Name  : </p>
          </div>
          <div className='item-input'>
            <input type='text'
              value={productName}
              id='item-name'
              placeholder='Enter Item Name Here'
              onChange={(e) => { setProductName(e.target.value) }} />
          </div>
        </div>

        <div className='item'>
          <div className='item-name'>
            <p> Price  : </p>
          </div>
          <div className='item-input'>
            <input type='text'
              value={productPrice}
              id='item-price'
              placeholder='Enter Price Here'
              onChange={(e) => { setProductPrice(e.target.value) }} />
          </div>
        </div>

        <div className='item'>
          <div className='item-name'>
            <p> Specifications  : </p>
          </div>
          <div className='item-input'>
            <Specs placehold="add specs" />
          </div>
        </div>

        <div className='item' id='item-txtarea'>
          <div className='item-name' >
            <p> Description  : </p>
          </div>
          <div className='item-input'>
            <textarea className='item-description'
              id='item-description'
              value={productDescrip}
              placeholder='Enter product description'
              onChange={(e) => { setProductDescrip(e.target.value) }} />
          </div>
        </div>

          <div className='product-add-images'>
            <div className='add-images'>

              <div className='product-image'>
                <div>Image 1 :</div>
                <input type="file" />
              </div>

              <div className='product-image'>
                <div>Image 2 :</div>
                <input type="file" />
              </div>

              <div className='product-image'>
                <div>Image 3 :</div>
                <input type="file" />
              </div>
              
              <div className='product-image'>
                <div>Image 4 :</div>
                <input type="file" />
              </div>

            </div>
            <div className='add-feature-image'>
              <div>
                <div>Feature Image :</div>
                <input type="file" />
              </div>
            </div>
          </div>

      </div>

    </div>
  )
}

export default AddProduct
