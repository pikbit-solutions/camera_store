import React from 'react'
import '../../assets/styles/productDetailPage/productDetail.scss'
import Navbar from '../HomePage/navBar'
import AddressLine from './AddressLine'
import ProductImgs from './ProductImgs'
import CamTitles from './CamTitles'
import CamInfo from './CamInfo'
import CamDetail from './CamDetail'
import Footer from '../HomePage/footer'

const productMain = () => {
  return (
    <div className='product-detail-main'>
      <Navbar />
      <div className='product-detail-lower'>
        <AddressLine />
        <div className='product-detail-content'>
          <ProductImgs />
          <CamTitles />
          <CamInfo />
          <CamDetail />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default productMain