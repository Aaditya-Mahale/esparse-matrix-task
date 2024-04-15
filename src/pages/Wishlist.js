import React from 'react';
import "./Wishlist.css";

import TopHeader from "../components/TopHeader";
import ExclusiveContainer1 from "../components/ExclusiveContainer1";
import Line from "../components/Line";
import Footer from "../components/Footer";
import Property1CartWithDiscount from "../components/Property1CartWithDiscount";
import Wishdiv from '../components/Wishdiv';
import WishProduct from "../components/WishPro";
import JustFor from "../components/JustFor"; // import the JustFor component

const Wishlist = () => {
  return (
    <div className="wishpage" style={{ touchAction: 'manipulation', overflowX: 'hidden' }}
    >
      

      
      <Line
        lineIconOverflow="unset"
        lineIconPosition="absolute"
        lineIconTop="142px"
        lineIconLeft="0px"
      />
      <Wishdiv
        WishdivPosition="absolute"
        WishdivTop="252px"/>
      
      <WishProduct/>
      
      <JustFor/> {/* render the JustFor component after WishProduct */}

      <Footer
        exclusive="Exclusive"
        footerPosition="absolute"
        footerTop="1065px"
        footerLeft="0px"
        fooerBottom="0px"
      />
    </div>
  );
};

export default Wishlist;