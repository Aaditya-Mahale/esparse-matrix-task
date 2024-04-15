import React from 'react'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import './MyReview.css'

const MyReview = () => {
  return (
    <div className='MyReview'>
        <div className='textpastmo1'>My Reviews</div>
        <Reviews/>
        <Footer
        exclusive="Startup IDEA"
        footerPosition="absolute"
        footerTop="920px"
        footerLeft="0px"
      />
    </div>
  )
}

export default MyReview