import React from "react";
import Photo from "./GalleryPhoto";
import Img1 from "../../assets/images/aboutbg.jpg";
import Img2 from "../../assets/images/Sony.jpg";
import Img3 from "../../assets/images/red.jpg";
import Img4 from "../../assets/images/wa3.png";

const SubGroup = () => {
  return (
    <div>
      <div className="gal-cols">
        <div className="left">
          <Photo source={Img1} />
          <Photo source={Img2} />
          <Photo source={Img3} />
          <Photo source={Img1} />
          <Photo source={Img1} />
        </div>

        <div className="mid">
          <Photo source={Img2} />
          <Photo source={Img1} />
          <Photo source={Img1} />
          <Photo source={Img4} />
          <Photo source={Img3} />
        </div>

        <div className="right">
          <Photo source={Img1} />
          <Photo source={Img4} />
          <Photo source={Img3} />
          <Photo source={Img2} />
          <Photo source={Img1} />
          <Photo source={Img3} />
        </div>
      </div>
    </div>
  );
};

export default SubGroup;
