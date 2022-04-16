import React, { useState } from 'react'
import { useState as UseState, useEffect, useRef} from 'react';
import { specificProApi } from '../../api/apiMain';
import CircularProgress from '@mui/material/CircularProgress';
import blankImg from '../../assets/images/specificProduct/blank/blank.jpg'

const ProductImgs = ({ ID }) => {

    const [specificProduct, setSpecificProduct] = UseState([]);
    const flag = useRef(true);
    useEffect(async () => {
        try {
            if (flag.current) {
                const { data } = await specificProApi(ID);
                setSpecificProduct(data);
            }
        }
        catch (error) {
            console.log(error.message);
        }
        flag.current = false;
    }, []);
    const [pictures, setPictures] = useState([]);
    // const []

    useEffect(() => {
        setPictures(specificProduct.images);
    }, [specificProduct]);

    const pic1 = specificProduct.featureImg;

    const [imgList, setImgList] = useState(pic1);
    let picFocus = (id) => {
        switch (id) {
            case '1': setImgList(pic1); break;
            case '2': setImgList((pictures && pictures.length > 0) ? pictures[0] : blankImg); break;
            case '3': setImgList((pictures && pictures.length > 1) ? pictures[1] : blankImg); break;
            case '4': setImgList((pictures && pictures.length > 2) ? pictures[2] : blankImg); break;
            default: setImgList(pic1); break;
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
                        <img src={(pictures && pictures.length > 0) ? pictures[0] : blankImg} alt="pic2" id='2' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                    <div className='pro-img'>
                        <img src={(pictures && pictures.length > 1) ? pictures[1] : blankImg} alt="pic3" id='3' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                    <div className='pro-img'>
                        <img src={(pictures && pictures.length > 2) ? pictures[2] : blankImg} alt="pic4" id='4' onClick={(e) => { picFocus(e.target.id) }} />
                    </div>
                </div>
            </div>) : (<CircularProgress color="warning" />)}
        </div>
    )
}

export default ProductImgs