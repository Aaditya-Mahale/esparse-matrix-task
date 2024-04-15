import React from 'react';
import ServiceLast from '../components/Servicelast'; // Adjust the path based on your project structure
import './Sellerpage2.css'
import Footer from '../components/Footer';
const SellerPage2 = () => {
  

  return (
    <div className='SellerPage2'>
     
     
      
      <ServiceLast />
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default SellerPage2;
