import React, { useState, useEffect } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ref, uploadBytesResumable, listAll, getDownloadURL,deleteObject } from 'firebase/storage';
import { storage, reviewsRef } from '../../../firebase/Fbindex.js';
import ProItem from './ProItem';

const AddReview = () => {

  //same as << AddGalleryImage.jsx >>
  const [images, setImages] = useState([]);
  const [imgName, setImgName] = useState('');
  const [image, setImage] = useState(null);
  const [process, setProcess] = useState(0);
  const [flashAlert, setFlashAlert] = useState(false);

  //firebase image upload
  const handleImage = (event) => {
    event.preventDefault();
    if (image) {
      const ImgRef = ref(reviewsRef, `${imgName}_${image.name}`)
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
    await listAll(reviewsRef)
      .then((res) => {
        return res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setImages((allImages) => [...allImages, url])
          });
        });
      })
      .catch((error) => {
        alert(' Can\'t load reviews ! ');
      })
  }

  //use effect for render images on specific renders
  // useEffect(async () => {
  //   if (images.length == 0) {
  //     await imgAll();
  //   }
  // }, [images])

  const clearAll = (event) => {
    event.preventDefault();
    setImgName('');
    setImage(null);
  }

  //delete function of specific image
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
      {flashAlert && <div className='rev-alert'>Review Added Successfully ! </div>}
      <div className='titlebar'>
        <div className='title'>
          Add Review
        </div>
      </div>
      <form >
        <div className='form rev-admin-form'>
          <div className='item'>
            <div className='item-name'>
              <p> Review Name  : </p>
            </div>
            <div className='item-input'>
              <input type='text'
                onChange={(e) => { setImgName(e.target.value) }}
                value={imgName}
                id='item-price'
                placeholder='Review Name'
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
          <div className='pro-add-btn-set rev-admin-btns'>
            {image && imgName !== '' && <button className='SubmitBtn' onClick={handleImage}>Add</button>}
            <button className='ClearBtn' onClick={clearAll}>clear</button>
          </div>
        </div>
      </form>
      <div>
        <div className='titlebar'>
          <div className='title'>
            Remove Review
          </div>
          {images.length==0 && <div className='rev-admin-see-btn' onClick={imgAll}>
            See All Reviews
          </div>}
        </div>
        <div className='rev-admin-all-container'>
          {
            images.length>0 ? images.map((img) =>
              <ProItem imgLink={img} key={img} DelItem={() => {DelItem(img)}}/>
            ) : ''
          }
        </div>
      </div>
    </div>
  )
}

export default AddReview