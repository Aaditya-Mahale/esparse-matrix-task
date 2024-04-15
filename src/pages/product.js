
import React from 'react';
import Productdis from '../components/productdis';
import Footer from '../components/Footer';
import './product.css'
const Product = () => {
  return (
  <div className='product'>
<Productdis/>

<Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />
  </div>
  );
};

export default Product;
