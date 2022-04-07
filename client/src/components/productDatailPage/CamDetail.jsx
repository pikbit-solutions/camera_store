import React from 'react'
import { useState as UseState } from 'react';
import { specificProApi } from '../../api/apiMain';
//scss styles are in _caminfo.scss

const CamDetail = ({ ID }) => {
    const [specificProduct, setSpecificProduct] = UseState({});
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