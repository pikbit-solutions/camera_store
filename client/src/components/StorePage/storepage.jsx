import React, { useEffect, useState } from 'react';
import NavBar from '../HomePage/navBar';
import Card from './card';
import Search from './search';
import '../../assets/styles/storePage/storepage.scss';
import Footer from '../HomePage/footer';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector as selector } from 'react-redux';


const Storepage = () => {

    const productList = selector((state) => state.products);
    let productListRev = productList.reverse();
    // productByPrice.sort((a, b) => { return a.price - b.price })
    // const productByPriceRev = productByPrice.reverse();
    const [sortList, setSortList] = useState('ntoo');

    // console.log(productList);
    useEffect(() => {
        console.log(sortList);
    }, [sortList]);

    return (
        <div className='storepage'>
            <NavBar />
            <div className='store'>
                <Search setSortList={setSortList} />

                {(sortList === 'ntoo' && productListRev.length > 0) ? productListRev.map((product) => {
                    if (!product.sold)
                        return (
                            <Card
                                imagepath={product.featureImg}
                                price={product.price}
                                specs={product.specs}
                                id={product._id}
                                name={product.modelname}
                                key={product._id} />
                        )
                }) : (sortList === 'ntoo' && <CircularProgress color='warning' style={{ margin: '10px' }} />)}

                {(sortList === 'oton' && productList.length > 0) ? productList.map((product) => {
                    if (!product.sold)
                        return (
                            <Card
                                imagepath={product.featureImg}
                                price={product.price}
                                specs={product.specs}
                                id={product._id}
                                name={product.modelname}
                                key={product._id} />
                        )
                }) : (sortList === 'oton' && <CircularProgress color='warning' style={{ margin: '10px' }} />)}

                {/* {(sortList === 'htol' && productByPrice.length > 0) ? productByPrice.map((product) => {
                    if (!product.sold)
                        return (
                            <Card
                                imagepath={product.featureImg}
                                price={product.price}
                                specs={product.specs}
                                id={product._id}
                                name={product.modelname}
                                key={product._id} />
                        )
                }) : (sortList === 'htol' && <CircularProgress color='warning' style={{ margin: '10px' }} />)}

                {(sortList === 'ltoh' && productByPriceRev.length > 0) ? productByPriceRev.map((product) => {
                    if (!product.sold)
                        return (
                            <Card
                                imagepath={product.featureImg}
                                price={product.price}
                                specs={product.specs}
                                id={product._id}
                                name={product.modelname}
                                key={product._id} />
                        )
                }) : (sortList === 'ltoh' && <CircularProgress color='warning' style={{ margin: '10px' }} />)} */}
            </div>
            <Footer />
        </div>
    )
}

export default Storepage;
