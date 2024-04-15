import React from 'react';
import Servicespk from '../components/Servicepk'; // Update the path based on your project structure
import './Servicepage2.css'
import StartupIdeaCard from '../components/StartupIdeaCard';
import Footer from '../components/Footer';
const Servicepage2 = () => {
  return (
    <div className='Servicepage2' >
      <StartupIdeaCard/>
      <Servicespk />
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default Servicepage2;
