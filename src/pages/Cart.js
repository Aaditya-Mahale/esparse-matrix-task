import React from 'react';

import TopHeader from "../components/TopHeader";
import ExclusiveContainer1 from "../components/ExclusiveContainer1";
import Line from "../components/Line";
import Footer from "../components/Footer";


import Cart from '../components/Cart';
import "./Cart.css";
const CartPage = () => {
  return (
    <div className="cartpage"   >
      
      
      <Line
        lineIconOverflow="unset"
        lineIconPosition="absolute"
        lineIconTop="142px"
        lineIconLeft="0px"
      />
      <Cart
      cartTop="200px"
      cartPosition="absolute"
      cartMarginTop="200px" 
      />

      <Footer
        exclusive="Exclusive"
        footerPosition="absolute"
        footerTop="1095px"
        footerLeft="0px"
        fooerBottom="0px"
      />
    </div>
  );
};

export default CartPage;