import React from 'react'
import Orders from '../components/Orders'
import './MyOrder.css'
import BuyAgain from '../components/BuyAgain'
import Footer from '../components/Footer'
import HalfRating from '../components/RatingStar'
const MyOrder = () => {
  return (
    <div className='MyOrder'>
    <div className='textpastmo1'>My Orders</div>
<BuyAgain/>
    <div className='textpastmo'>Past two months</div>
    
   <Orders/>
   <Footer
        exclusive="Startup IDEA"
        footerPosition="absolute"
        footerTop="5462px"
        footerLeft="0px"
      />
    </div>
  )
}

export default MyOrder