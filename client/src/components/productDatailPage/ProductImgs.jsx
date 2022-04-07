import React, { useState } from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';
import CircularProgress from '@mui/material/CircularProgress';

const ProductImgs = ({ID}) => {

    const [specificProduct, setSpecificProduct] = UseState([]);
    const fetchProduct = async () => {
        try {
            const { data } = await specificProApi(ID);
            setSpecificProduct(data)
        }
        catch (error) {
            console.log(error.message);
        }
    }
    fetchProduct();

    const pic1 = specificProduct.featureImg;
    const pic2 = specificProduct.featureImg;
    const pic3 = specificProduct.featureImg;
    const pic4 = require('../../assets/images/specificProduct/SRX1004.jpg')

    const [imgList, setImgList] = useState(pic1);
    let picFocus = (id) => {
        switch (id) {
            case '1': setImgList(pic1); break;
            case '2': setImgList(pic2); break;
            case '3': setImgList(pic3); break;
            case '4': setImgList(pic4); break;
            default : setImgList(pic1); break;
        }
    }

    return (
        <div className='pro-imgs-main'>
            {specificProduct.featureImg ? (<div className='pro-imgs-container'>
                <div className='pro-disp-img'>
                    <img src={imgList || pic1} alt="main-pic1" />
                </div>
                <div className='pro-sm-imgs'>
                    <div className='pro-img'>
                        <img src={pic1} alt="pic1" id='1' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                    <div className='pro-img'>
                        <img src={pic2} alt="pic2" id='2' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                    <div className='pro-img'>
                        <img src={pic3} alt="pic3" id='3' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                    <div className='pro-img'>
                        <img src={pic4} alt="pic4" id='4' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                </div>
            </div>):(<CircularProgress color="warning" />)}
        </div>
    )
}

export default ProductImgs