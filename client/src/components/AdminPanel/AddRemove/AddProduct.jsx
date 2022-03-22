import React, { useState } from 'react'
import Specs from './SpecDetails'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/actions/productActions'

const AddProduct = ({ active, btn }) => {

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDescrip, setProductDescrip] = useState('')
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(
    {
      modelname: '',
      stock: 0,
      price: 0,
      specs: [' '],
      description: '',
      images: [],
      featureImg: ' '
    });

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
  }

  return (
    <div className={active}>

      <div className='titlebar'>
        {/* <div className='title-deco'></div> */}
        <div className='title'>
          Add Product
        </div>
        <div className='product-back' onClick={btn}>Back</div>
      </div>

      <form onSubmit={submitHandle}>
        <div className='form'>

          <div className='item'>
            <div className='item-name'>
              <p> Name  : </p>
            </div>
            <div className='item-input'>
              <input type='text'
                value={productData.modelname}
                id='item-name'
                placeholder='Enter Item Name Here'
                onChange={(e) => { setProductData({ ...productData, modelname: e.target.value }) }} />
            </div>
          </div>

          <div className='item'>
            <div className='item-name'>
              <p> Price  : </p>
            </div>
            <div className='item-input'>
              <input type='text'
                value={productData.price}
                id='item-price'
                placeholder='Enter Price Here'
                onChange={(e) => { setProductData({ ...productData, price: e.target.value }) }} />
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
                value={productData.description}
                placeholder='Enter product description'
                onChange={(e) => { setProductData({ ...productData, description: e.target.value }) }} />
            </div>
          </div>

          <div className='product-add-images'>
            <div className='add-images'>

              <div className='product-image'>
                <div>Image 1 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ file }) => setProductData({ ...productData, images: [...productData.images, file] })}
                />
              </div>

              <div className='product-image'>
                <div>Image 2 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ file }) => setProductData({ ...productData, images: [...productData.images, file] })}
                />
              </div>

              <div className='product-image'>
                <div>Image 3 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ file }) => setProductData({ ...productData, images: [...productData.images, file] })}
                />
              </div>

              <div className='product-image'>
                <div>Image 4 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ file }) => setProductData({ ...productData, images: [...productData.images, file] })}
                />
              </div>

            </div>
            <div className='add-feature-image'>
              <div>
                <div>Feature Image :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={( {base64} ) => setProductData({ ...productData, featureImg: base64 })}
                  
                />
              </div>
            </div>
          </div>

        </div>
        <button type='submit'>Save</button>
      </form>

    </div>
  )
}

export default AddProduct
