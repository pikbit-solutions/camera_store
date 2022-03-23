import React, { useState, useEffect, useRef } from 'react'
import Specs from './SpecDetails'
import FileBase from 'react-file-base64'
import { addProduct, getProducts } from '../../../redux/actions/productActions'
// import {getProducts} from '../../redux/actions/productActions.js';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = ({ active, btn }) => {
  
  const dispatch = useDispatch();
  const specRef = useRef();
  const [specData, setSpecData] = useState([]);
  const [productData, setProductData] = useState(
    {
      modelname: '',
      stock: 0,
      price: 0,
      specs: [],
      description: '',
      images: [],
      featureImg: ' '
    });

    useEffect(()=>{
        dispatch(getProducts());
    },[productData]);
    
  const submitHandle = (e) => {
    e.preventDefault();
    setProductData({...productData,specs:specData});
    dispatch(addProduct(productData));
    clearForm();
  }

  const specHandle = (specs)=>{
    setSpecData(specs);
  }

  const clearForm=()=>{
    specRef.current.clearSpecs();
    setProductData({modelname: '',stock: 0,price: 0,specs: [],description: '',images: [],featureImg: ' '})
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
              <Specs placehold="add specs" giveSpecs={specHandle} ref={specRef}/>
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
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
                />
              </div>

              <div className='product-image'>
                <div>Image 2 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
                />
              </div>

              <div className='product-image'>
                <div>Image 3 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
                />
              </div>

              <div className='product-image'>
                <div>Image 4 :</div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
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
            <button type='submit'>Save</button>
            <button onClick={clearForm}>clear</button>
          </div>

        </div>
      </form>

    </div>
  )
}

export default AddProduct
