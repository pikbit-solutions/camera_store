import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { addProduct, getProducts, updateProduct } from '../../../redux/actions/productActions'
// import {getProducts} from '../../redux/actions/productActions.js';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CancelIcon from '@mui/icons-material/Cancel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage, productImageRef } from '../../../firebase/Fbindex.js';

const AddProduct = ({ active, btn, currentId, setCurrentId }) => {

  const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);
  //for specs
  const [changeFocus, setChangeFocus] = useState("")
  let [addSpec, setAddSpec] = useState([])
  let [filteredArray, setFilteredArray] = useState([]);

  //load images
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  //upload buffer
  const [process, setProcess] = useState({
    img1: 0,
    img2: 0,
    img3: 0
  });

  //for others 
  const dispatch = useDispatch();
  const [productData, setProductData] = useState( //data of the product
    {
      modelname: '',
      stock: 0,
      price: 0,
      specs: [],
      description: '',
      images: [],
      featureImg: ' '
    });

  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, productData]);
  // useEffect(() => {
  //   console.log(image2);
  // }, [image2]);

  useEffect(() => {
    if (product) {
      setProductData(product);
      // console.log("something")
      setAddSpec(product.specs)
      setAddSpec(product.specs)
      setFilteredArray(addSpec.map((specification) => {
        return (<div style={{ display: "flex", alignContent: "center" }} key={specification}>
          <div className='spec-name'>{specification}</div>
          <div className='spec-cancel-icon'><CancelIcon style={{ fontSize: "20px" }} onClick={() => { delSpec(specification) }} /></div>
        </div>)
      }))
    }
  }, [currentId]);

  //firebase image upload
  const handleImage1 = () => {
    if (image1) {
      const oneImg = ref(productImageRef, `${productData.modelname}_${productData.price}/1_${image1.name}`)
      const uploadTask = uploadBytesResumable(oneImg, image1);
      uploadTask.on(
        'state_changed',
        snapshot => { setProcess({ ...process, img1: (Math.floor(snapshot.totalBytes / snapshot.bytesTransferred * 100)) }) },
        error => { console.log(error) },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(URL => {
            setProductData({ ...productData, images: [...productData.images, URL] });
            // console.log(`Successfull => ${URL} ------ ${productData.images}`);
          })
        }
      )
    }
  }
  const handleImage2 = () => {
    if (image2) {
      const oneImg = ref(productImageRef, `${productData.modelname}_${productData.price}/2_${image2.name}`)
      const uploadTask = uploadBytesResumable(oneImg, image2);
      uploadTask.on(
        'state_changed',
        snapshot => { setProcess({ ...process, img2: (Math.floor(snapshot.totalBytes / snapshot.bytesTransferred * 100)) }) },
        error => { console.log(error) },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(URL => {
            setProductData({ ...productData, images: [...productData.images, URL] });
            // console.log(`Successfull => ${URL} ------ ${productData.images}`);
          })
        }
      )
    }
  }
  const handleImage3 = () => {
    if (image3) {
      const oneImg = ref(productImageRef, `${productData.modelname}_${productData.price}/3_${image3.name}`)
      const uploadTask = uploadBytesResumable(oneImg, image3);
      uploadTask.on(
        'state_changed',
        snapshot => { setProcess({ ...process, img3: (Math.floor(snapshot.totalBytes / snapshot.bytesTransferred * 100)) }) },
        error => { console.log(error) },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(URL => {
            setProductData({ ...productData, images: [...productData.images, URL] });
            // console.log(`Successfull => ${URL} ------ ${productData.images}`);
          })
        }
      )
    }
  }

  //submit button event
  const submitHandle = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateProduct(currentId, productData));
    }
    else {
      dispatch(addProduct(productData));
    }

    clearForm();
  }

  //clear the form
  const clearForm = (e) => {
    // e.preventDefault();
    setAddSpec([]);
    setFilteredArray([]);
    setCurrentId(null);
    setProductData({ modelname: '', stock: 0, price: 0, specs: [], description: '', images: [], featureImg: ' ' })
  }

  //render function
  const renderSpec = () => {
    setProductData({ ...productData, specs: [...addSpec] });
    setFilteredArray(addSpec.map((specification) => {
      return (<div style={{ display: "flex", alignContent: "center" }} key={specification}>
        <div className='spec-name'>{specification}</div>
        <div className='spec-cancel-icon'><CancelIcon style={{ fontSize: "20px" }} onClick={() => { delSpec(specification) }} /></div>
      </div>)
    }))
  }

  //add a specification
  const addSpecItem = () => {
    changeFocus !== "" && changeFocus !== " " && addSpec.push(changeFocus);
    setAddSpec(addSpec);
    renderSpec();
    setChangeFocus("");
  }

  //delete a specification
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
          {currentId ? 'Edit' : 'Add'} Product
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
                {filteredArray.map((item) => { return item })}
              </div>
              <div className='add-spec'>
                <input type='text'
                  value={changeFocus}
                  onChange={(e) => { setChangeFocus(e.target.value) }} />
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
            <div className='add-images'>

              <div className='product-image'>
                <div>
                  <label>Image 1 : </label>
                  <input type='file' onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage1(e.target.files[0]);
                    }
                    else setImage1(null);
                  }} />
                  {image1 ? <div className='upload-btn' onClick={handleImage1}><CloudUploadIcon fontSize='medium' /></div> : ''}
                  <div>
                    {(process.img1 > 0) ? `${process.img1}%` : '_'}
                  </div>

                </div>
                {/* <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
                /> */}
              </div>

              <div className='product-image'>
                <div>
                  <label>Image 2 : </label>
                  <input type='file' onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage2(e.target.files[0]);
                    }
                    else setImage2(null);
                  }} />
                  {image2 ? <div className='upload-btn' onClick={handleImage2}><CloudUploadIcon fontSize='medium' /></div> : ''}
                  <div>
                    {(process.img2 > 0) ? `${process.img2}%` : '_'}
                  </div>
                </div>
                {/* <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
                /> */}
              </div>

              <div className='product-image'>
                <div>
                  <label>Image 3 : </label>
                  <input type='file' onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage3(e.target.files[0]);
                    }
                    else setImage3(null);
                  }} />
                  {image3 ? <div className='upload-btn' onClick={handleImage3}><CloudUploadIcon fontSize='medium' /></div> : ''}
                  <div>
                    {(process.img3 > 0) ? `${process.img3}%` : '_'}
                  </div>
                </div>
                {/* <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProductData({ ...productData, images: [...productData.images, base64] })}
                /> */}
              </div>

            </div>


          </div>
          <div className='pro-add-btn-set'>
            <button className='SubmitBtn' onClick={submitHandle}>{currentId ? 'Save' : 'Add'}</button>
            <button className='ClearBtn' onClick={clearForm}>clear</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default AddProduct
