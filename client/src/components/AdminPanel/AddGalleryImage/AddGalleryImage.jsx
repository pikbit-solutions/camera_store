import ProItem from '../AddReview/ProItem'
import React, { useState } from 'react'
import { ref, uploadBytesResumable, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage, galleryRef } from '../../../firebase/Fbindex.js';

const AddGalleryImage = () => {

  const [images, setImages] = useState([]); //all gallery images
  const [imgName, setImgName] = useState(''); //image Name - upload
  const [image, setImage] = useState(null); //image - upload
  const [process, setProcess] = useState(0); //percentage while uploading
  const [flashAlert, setFlashAlert] = useState(false); //flash alert to trigger after uploading succeeded

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

  //load all images from firebase 
  const imgAll = async () => {
    await listAll(galleryRef)
      .then((res) => {
        return res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setImages((allImages) => [...allImages, url])
          });
        });
      })
      .catch((error) => {
        alert(' Can\'t load Gallery Images ! ');
      })
  }

  //clear button
  const clearAll = (event) => {
    event.preventDefault();
    setImgName('');
    setImage(null);
  }

  //Delete button function for each image
  const DelItem = (imgLink) => {
    const delRef = ref(storage, imgLink);
    deleteObject(delRef).then(() => {
      setImages(imgs => imgs.filter(img => img !== imgLink))
      // console.log('deleted !')
    }).catch((error) => {
      alert(' Upload Error ! ');
    });
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
          {image && imgName !== '' && <button className='SubmitBtn' onClick={handleImage} >
            {(process === 0 || process === 100) ? 'Add' : 'Uploading'}</button>}
          <button className='ClearBtn' onClick={clearAll}>clear</button>
        </div>
      </form>
      <div>
        <div className='titlebar'>
          <div className='title'>
            Remove photos
          </div>
          {images.length === 0 && <div className='rev-admin-see-btn' onClick={imgAll}>
            See Gallery Images
          </div>}
        </div>
        <div className='rev-admin-all-container'>
          {
            images.length > 0 ? images.map((img) =>
              <ProItem imgLink={img} key={img} DelItem={() => { DelItem(img) }} />
            ) : ''
          }
        </div>
      </div>
    </div>
  )
}

export default AddGalleryImage