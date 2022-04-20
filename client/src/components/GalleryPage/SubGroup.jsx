import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { galleryRef } from "../../firebase/Fbindex.js";
import Photo from "./GalleryPhoto";

const SubGroup = () => {
  const [images, setImages] = useState([]);

  const imgAll = async () => {
    listAll(galleryRef)
      .then((res) => {
        return res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setImages((allImages) => [...allImages, url])
          });
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(async () => {
    if (images.length == 0) {
      await imgAll();
    }
  }, [images])

  return (
    <div>
      <div className="gal-cols">
        <div className="left">
          {images.length > 0 ? images.slice(0, (images.length) / 3).map((image) => {
            return (<Photo source={image} />)
          }) : ''}
        </div>

        <div className="mid">
          {images.length > 0 ? images.slice(((images.length / 3)), ((images.length) / 3) * 2).map((image) => {
            return (<Photo source={image} />)
          }) : ''}

        </div>

        <div className="right">
          {images.length > 0 ? images.slice(((images.length) / 3 * 2)).map((image) => {
            return (<Photo source={image} />)
          }) : ''}
        </div>
      </div>
    </div>
  );
};

export default SubGroup;
