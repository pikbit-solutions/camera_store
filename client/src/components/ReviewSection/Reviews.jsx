import React, { useState as UseState, useEffect as UseEffect } from "react";
import ImageGallery from "react-image-gallery";
import "../../assets/styles/ReviewSection/review.scss";
import { galleryRef } from "../../firebase/Fbindex.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import img1 from "../../assets/images/5D.png";
import img2 from "../../assets/images/700D.png";
import img3 from "../../assets/images/50D.png";
import { async } from "@firebase/util";

const images = [{ original: img1 }, { original: img2 }, { original: img3 }];

const Reviews = () => {
  const [imageArray, setImageArray] = UseState([]);
  
//   {UseEffect(async () => {
//     listAll(galleryRef)
//       .then((res) => {
//         // res.prefixes.forEach((folderRef) => {console.log(folderRef)});
//         res.items.forEach((itemRef) => {
//           getDownloadURL(itemRef)
//             .then((url) => {
//               return setImageArray([...imageArray, url]);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         });
//         console.log(imageArray);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [])}
    // console.log(galleryRef.listAll());
  return (
    <div className="rw-all">
      <div className="rw-title">Reviews</div>
      <div className="rw-crsl">
        {/* {imageArray.map((imge) => (
          <div>{imge}</div> */}
        ))}
      </div>
      <div className="rw-padding" />
    </div>
  );
};

export default Reviews;
