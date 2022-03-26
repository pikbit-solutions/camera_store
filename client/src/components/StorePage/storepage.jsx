import React from 'react';
import NavBar from '../HomePage/navBar';
import Card from './card';
import Search from './search';
import Redcam from '../../assets/images/red.jpg';
import '../../assets/styles/storePage/storepage.scss';
import Sonybox from '../../assets/images/Sonybox.jpg';
import Sonycam from '../../assets/images/Sony.jpg';
import Footer from '../HomePage/footer';
import { useDispatch, useSelector as selector} from 'react-redux';


function storepage() {
    const productList = selector((state) => state.products);
    // console.log(productList);
    return (
        <div className='storepage'>
            <NavBar/>
            <div className='store'>
                <Search/>
                {productList.map((product)=>{
                    if(!product.sold)
                    return(
                        <Card 
                        imagepath={product.featureImg}
                        price = {product.price} 
                        specs = {product.specs}
                        id = {product._id}
                        name = {product.modelname}
                        key = {product._id}/>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default storepage;
