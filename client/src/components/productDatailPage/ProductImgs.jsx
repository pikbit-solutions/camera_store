import React, { useState } from 'react'

const ProductImgs = () => {

    const pic1 = require('../../assets/images/specificProduct/SRX1001.png') 
    const pic2 = require('../../assets/images/specificProduct/SRX1002.jpg') 
    const pic3 = require('../../assets/images/specificProduct/SRX1003.jpg') 
    const pic4 = require('../../assets/images/specificProduct/SRX1004.jpg') 



    const [imgList, setImgList] = useState(pic1);
    let picFocus = (ID) => {
        // console.log(pic)
        switch (ID) {
            case '1':setImgList(pic1);break;
            case '2':setImgList(pic2);break;
            case '3':setImgList(pic3);break;
            case '4':setImgList(pic4);break;
        }
    }

  return (
    <div className='pro-imgs-main'>
        <div className='pro-imgs-container'>
            <div className='pro-disp-img'>
                <img src={imgList} alt="main-pic1" />
            </div>
            <div className='pro-sm-imgs'>
                <div className='pro-img'>
                    <img src={pic1} alt="pic1" id='1' onClick={(e)=>{picFocus(e.target.id)}}/>                    
                </div>
                <div className='pro-img'>
                    <img src={pic2} alt="pic2" id='2' onClick={(e)=>{picFocus(e.target.id)}}/>
                </div>
                <div className='pro-img'>
                    <img src={pic3} alt="pic3" id='3' onClick={(e)=>{picFocus(e.target.id)}}/>
                </div>
                <div className='pro-img'>
                    <img src={pic4} alt="pic4" id='4' onClick={(e)=>{picFocus(e.target.id)}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductImgs