import React, { useEffect } from 'react'
import { useState as UseState, useRef } from 'react';
import { specificProApi } from '../../api/apiMain';
//scss styles are in _caminfo.scss

const CamDetail = ({ ID }) => {
    const flag = useRef(true);
    const [specificProduct, setSpecificProduct] = UseState({});
    useEffect(async() => {
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

    return (
        <div className='camDet-main'>
            {specificProduct.description && (<div>

                <div className='camDet-title'>
                    Details
                </div>
                <div className='camDet-discr'>
                    {specificProduct.description}
                </div>
            </div>
            )}
        </div>
    )
}

export default CamDetail