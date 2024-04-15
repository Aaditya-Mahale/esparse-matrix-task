import React from 'react'

import './CancelOrder.css'
import Orders1 from '../components/Orders1'
import Footer from '../components/Footer'
const CancelOrder = () => {
  return (
    <div className='CancelOrder'>
       <div className='cancelordercont'>
       <div className='textpastmo1'>Cancel Order</div>
       <div> <Orders1/></div>
       </div>
       <Footer
        exclusive="Startup IDEA"
        footerPosition="absolute"
        footerTop="5462px"
        footerLeft="0px"
      />
    </div>
  )
}

export default CancelOrder