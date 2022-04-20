import React, { useState as UseState, useEffect as UseEffect } from "react";
import ImageGallery from "react-image-gallery";
import "../../assets/styles/ReviewSection/review.scss";
import { reviewsRef } from "../../firebase/Fbindex.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";


const images = [];

const Reviews = () => {
  const [referenceArray, setReferenceArray] = UseState([]);
  const [imageArray, setImageArray] = UseState([]);
  const [fkBtn, setFkBtn] = UseState(false);

  const seee = () => {
    setFkBtn(!fkBtn);
  }
  // UseEffect(async()=>{
    const imgAll = () => {
      listAll(reviewsRef)
        .then((res) => {
          setReferenceArray(res.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  // },[]);
  
  UseEffect(()=>{
    // referenceArray==0 && imageArray.length==0 && setImageArray(images);
    if(imageArray.length<=25){
      referenceArray==0 && imageArray.length==0 && setImageArray(images);
    }
    // setFkBtn(!fkBtn);
  },[fkBtn]);

  
  if(referenceArray.length==0) imgAll();
  referenceArray.map((reference)=>{
     getDownloadURL(reference).then((url)=>{images.push({original : url})});
  })

  console.log(referenceArray);
  console.log(imageArray); 





  // console.log(galleryRef.listAll());
  return (
    <div className="rw-all">
      <div className="rw-title">Reviews</div>
      <div className="rw-crsl">
        {!fkBtn && <div className="rw-btn-container" onClick={seee}><div className="rw-btn">Click to See Customer Reviews<span></span></div></div>}
        {fkBtn && <ImageGallery items={imageArray} />}
      </div>
      <div className="rw-padding" />
    </div>
  );
};

export default Reviews;
