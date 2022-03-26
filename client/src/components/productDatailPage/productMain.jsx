import { useParams as UseParams } from 'react-router-dom'
import { useSelector as Selector } from 'react-redux'
import '../../assets/styles/productDetailPage/productDetail.scss'
import { specificProApi } from '../../api/apiMain'
import Navbar from '../HomePage/navBar'
import AddressLine from './AddressLine'
import ProductImgs from './ProductImgs'
import CamTitles from './CamTitles'
import CamInfo from './CamInfo'
import CamDetail from './CamDetail'
import Footer from '../HomePage/footer'
import { useEffect as UseEffect, useState as UseState } from 'react'



const productMain = () => {
  const {id} = UseParams();
  return (
    <div className='product-detail-main'>
      <Navbar />
      <div className='product-detail-lower'>
        <AddressLine ID={id} />
        <div className='product-detail-content'>
          <ProductImgs ID={id} />
          <CamTitles ID={id}  />
          <CamInfo ID={id} />
          <CamDetail ID={id} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default productMain