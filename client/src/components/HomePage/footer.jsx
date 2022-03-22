import React from 'react'
import FooterLogo from './footerLogo'
import FooterDivider from './footerDivider'
import FooterInfo from './footerInfo'
import Copyrights from './copyrightInfo'

const footer = () => {
    return (
      <a name="contact">
        <div className='footer-section'>

            <div className='footer-item'>
                < FooterLogo />
                < FooterDivider />
                < FooterInfo />
                < Copyrights />
            </div>
        </div>
      </a>
    )
}

export default footer
