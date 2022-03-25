import React, { useState, useEffect, useRef } from 'react'
import FileBase from 'react-file-base64'
import { addProduct, getProducts } from '../../../redux/actions/productActions'
// import {getProducts} from '../../redux/actions/productActions.js';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CancelIcon from '@mui/icons-material/Cancel';

const AddProduct = ({ active, btn }) => {
  const [changeFocus, setChangeFocus] = useState("")
  let [addSpec, setAddSpec] = useState([])
  let [filteredArray, setFilteredArray] = useState([]);
  const dispatch = useDispatch();
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

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    clearForm();
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [productData]);

  const clearForm = () => {
    setAddSpec([]);
    setFilteredArray([]);
    setProductData({ modelname: '', stock: 0, price: 0, specs: [], description: '', images: [], featureImg: ' ' })
  }

  const renderSpec = () => {
    setProductData({...productData,specs:[...addSpec]});
    setFilteredArray(addSpec.map((specification) => {
      return (<div style={{ display: "flex", alignContent: "center" }} key={specification}>
        <div className='spec-name'>{specification}</div>
        <div className='spec-cancel-icon'><CancelIcon style={{ fontSize: "20px" }} onClick={() => { delSpec(specification) }} /></div>
      </div>)
    }))
  }

  const addSpecItem = () => {
    changeFocus !== "" && changeFocus !== " " && addSpec.push(changeFocus);
    setAddSpec(addSpec);
    renderSpec();
    setChangeFocus("");
  }

  const delSpec = (val) => {
    let ind = addSpec.indexOf(val);
    addSpec.splice(ind, 1);
    setAddSpec(addSpec);
    renderSpec();
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

      <form >
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
            <div className="spec-item">
                {filteredArray.map((item)=>{return item})}
            </div>
            <div className='add-spec'>
                <input type='text' 
                       value={changeFocus} 
                       onChange={(e)=>{setChangeFocus(e.target.value)}} />
                <div className='add-spec-btn' onClick={addSpecItem}>
                    <AddCircleOutlineIcon />
                </div>
            </div>
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
                  onDone={({ base64 }) => setProductData({ ...productData, featureImg: base64 })}

                />
              </div>
            </div>
            <button onClick={submitHandle}>Save</button>
            <button onClick={clearForm}>clear</button>
          </div>

        </div>
      </form>

    </div>
  )
}

export default AddProduct
