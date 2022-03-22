import React from 'react';
import NavBar from '../HomePage/navBar';
import Card from './card';
import Search from './search';
import Redcam from '../../assets/images/red.jpg';
import '../../assets/styles/storePage/storepage.scss';
import Sonybox from '../../assets/images/Sonybox.jpg';
import Sonycam from '../../assets/images/Sony.jpg';
import Footer from '../HomePage/footer';

function storepage() {
    return (
        <div className='storepage'>
            <NavBar/>
            <div className='store'>
                <Search/>
                <Card imagepath= {Redcam} value={2.5} price={'Rs. 50000.00'}/>
                <Card imagepath= {Sonycam} value={5} price={'Rs. 150000.00'}/>
                <Card imagepath= {Sonybox} value={2.5} price={'Rs. 50000.00'}/>
                <Card imagepath= {Sonycam} value={5} price={'Rs. 150000.00'}/>
            </div>
            <Footer />
        </div>
    )
}

export default storepage;
