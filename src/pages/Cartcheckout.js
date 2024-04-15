import React from 'react'
import Checkout from '../components/Checkout'
import Footer from '../components/Footer'
import './Cartcheckout.css'
export const Cartcheckout = () => {
  return (
    <div className='cartcheckout' >
      
    <Checkout/>
    <Footer
    className="custom-footer"
        exclusive="Exclusive"
        footerPosition="absolute"
        footerTop="1050px"
        footerLeft="0px"
        footerBottom="0px"
footerRight="0px"

      />
      </div>
  )
}
