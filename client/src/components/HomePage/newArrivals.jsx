import React from 'react'
import ArrivalCard from './arrivalCard'
import cam1 from '../../assets/images/5D.png'
import cam2 from '../../assets/images/50D.png'
import cam3 from '../../assets/images/700D.png'
import cam4 from '../../assets/images/fg.png'
import {Link} from "react-router-dom";


// import vidcam from '../../assets/images/vidcam.jpg'


const newArrivals = () => {
    return (
        <div className='arrivals'>
            <h1 className='title'>New Arrivals</h1>
            <div className='arrival-cards'>
                <ArrivalCard
                    imgPath={cam1}
                    itm_model="Canon EOS 5D mark iv"
                    itm_prize="Rs: 450,000"
                    className="arrival-card"
                />
                <ArrivalCard
                    imgPath={cam2}
                    itm_model="Canon EOS 760D"
                    itm_prize="Rs: 100,000"
                />
                <ArrivalCard
                    imgPath={cam3}
                    itm_model="Canon EOS 700D"
                    itm_prize="Rs: 70,000"
                />
                <ArrivalCard
                    imgPath={cam4}
                    itm_model="Shanny SN600s"
                    itm_prize="Rs: 15,000"
                />
                {/* <ArrivalCard
                    imgPath={cam1}
                    itm_model="Hello"
                    itm_prize="Rs: 200,000"
                /> */}
            </div>
            <Link to="/storepage" className='arr-anchor'>
                View more...
            </Link>
        </div>
    )
}

export default newArrivals
