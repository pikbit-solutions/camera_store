import React, { useEffect, useState } from "react";
import { listAll, getDownloadURL } from "firebase/storage";
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

  useEffect(() => {
    async function fetchimages() {
      if (images.length == 0) {
        await imgAll();
      }
    }
    fetchimages();
  }, [images])

  return (
    <div>
      <div className="gal-cols">
        <div className="left">
          {images.length > 0 ? images.slice(0, (images.length) / 3).map((image) => {
            return (<Photo key={image} source={image} />)
          }) : ''}
        </div>

        <div className="mid">
          {images.length > 0 ? images.slice(((images.length / 3)), ((images.length) / 3) * 2).map((image) => {
            return (<Photo key={image} source={image} />)
          }) : ''}

        </div>

        <div className="right">
          {images.length > 0 ? images.slice(((images.length) / 3 * 2)).map((image) => {
            return (<Photo key={image} source={image} />)
          }) : ''}
        </div>
      </div>
    </div>
  );
};

export default SubGroup;
