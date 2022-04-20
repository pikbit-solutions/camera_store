import React, { useRef, useState } from 'react'
import { ref, uploadBytesResumable } from 'firebase/storage';
import { galleryRef } from '../../../firebase/Fbindex.js';

const AddGalleryImage = () => {
    
  const [imgName, setImgName] = useState('');
  const [image, setImage] = useState(null);
  const [process, setProcess] = useState(0);
  const [flashAlert, setFlashAlert] = useState(false);

  //firebase image upload
  const handleImage = (event) => {
    event.preventDefault();
    if (image) {
      const ImgRef = ref(galleryRef, `${imgName}_${image.name}`)
      const uploadTask = uploadBytesResumable(ImgRef, image);
      uploadTask.on(
        'state_changed',
        snapshot => { setProcess(Math.floor(snapshot.totalBytes / snapshot.bytesTransferred * 100)) },
        error => { alert('Upload Error! \n Please retry again.') },
        () => {
          setFlashAlert(true);
          setTimeout(() => {
            setFlashAlert(false);
          }, 4000)
        }
      )
    }
  }

  const clearAll = (event) => {
    event.preventDefault();
    setImgName('');
    setImage(null);
  }

  return (
    <div>
      {flashAlert && <div className='rev-alert'>Photo Added Successfully to the Gallery ! </div>}
      <div className='titlebar'>
        <div className='title'>
          Add Photo
        </div>
      </div>
      <form >
        <div className='form rev-admin-form'>
          <div className='item'>
            <div className='item-name'>
              <p> Photo Name  : </p>
            </div>
            <div className='item-input'>
              <input type='text'
                onChange={(e) => { setImgName(e.target.value) }}
                value={imgName}
                id='photo-id'
                placeholder='Photo Name'
              />
            </div>
          </div>

          <div className='product-add-images'>
            <div className='product-image'>
              <div className='rev-admin-content'>
                <label>Image : </label>
                <input type='file'
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage(e.target.files[0]);
                    }
                    else { setImage(null); }
                  }} />
                {/* {image ? <div className='upload-btn' ><CloudUploadIcon fontSize='medium' /></div> : ''} */}
              </div>
            </div>
          </div>
        </div>

        <div className='pro-add-btn-set rev-admin-btns'>
          {image && imgName !== '' && <button className='SubmitBtn' onClick={handleImage}>Add</button>}
          <button className='ClearBtn' onClick={clearAll}>clear</button>
        </div>
      </form>
    </div>
  )
}

export default AddGalleryImage