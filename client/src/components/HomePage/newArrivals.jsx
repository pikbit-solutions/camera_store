import { useState as UseState } from 'react';
import ArrivalCard from './arrivalCard'
import { Link } from "react-router-dom";
import { useDispatch, useSelector as Selector } from 'react-redux';



// import vidcam from '../../assets/images/vidcam.jpg'


const newArrivals = () => {
    let count = 1;
    const allproducts = Selector((state) => state.products);
    const products = allproducts.reverse().slice(0,4);
    const [wwidth, setWwidth] = UseState(0);
    setWwidth(window.innerWidth);
    return (
        <div className='arrivals'>
            <h1 className='title'>New Arrivals</h1>
            <div className='arrival-cards'>

                {products.map((product) => {
                    if (count < 4 && !product.sold) {
                        return (
                            <ArrivalCard
                                key={product._id}
                                imgPath={product.featureImg}
                                itm_model={product.modelname}
                                itm_prize={product.price}
                                className="arrival-card"
                            />
                        )
                    }
                    count++;
                })}

            </div>
            <Link to="/storepage" className='arr-anchor'>
                View more...
            </Link>
        </div>
    )
}

export default newArrivals
