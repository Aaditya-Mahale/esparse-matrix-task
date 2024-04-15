import React from 'react';
import Productdis from '../components/productdis';
import Sellers from '../components/Sellers';
import Footer from '../components/Footer';
import './Sellerpage.css'

const Sellerspage = () => {
  return (
  <div className='Sellerspage'>
<Sellers/>
<Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />


  </div>
  );
};

export default Sellerspage;