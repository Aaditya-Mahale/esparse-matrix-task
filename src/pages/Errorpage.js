import React from 'react'
import Error from '../components/Error'
import Footer from '../components/Footer'
import './Errorpage.css'


export const Errorpage = () => {
  return (
    
   <div className='errorpage'>
    <Error/>
    <Footer
        exclusive="Exclusive"
        footerPosition="absolute"
        footerTop="650px"
        footerLeft="0px"
        fooerBottom="0px"
      />
      </div>
    
  )
}
