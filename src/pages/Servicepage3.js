import React from 'react';
import Servenq from '../components/Servenq';  // Make sure to use the correct path
import './Servicepage3.css'
import StartupIdeaCard from '../components/StartupIdeaCard';
import Footer from '../components/Footer';
const ServicePage3 = () => {
  return (
    <div className='ServicePage3'>
      <StartupIdeaCard/>
      <Servenq />
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default ServicePage3;
