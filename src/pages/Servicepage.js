import React from 'react';
import ServiceCat from '../components/Servicecat';
import ServiceRep from '../components/Servicerep';
import NewArrivalCard from '../components/NewArrivalCard';
import MusicExperienceEnhancerContain from '../components/MusicExperienceEnhancerContain';
import './Servicepage.css'
import Footer from '../components/Footer';
import StartupIdeaCard from '../components/StartupIdeaCard';
const ServicePage = () => {
  return (
    <div className='ServicePage'>
      <StartupIdeaCard/>
      <ServiceCat />
      <ServiceRep/>
      <MusicExperienceEnhancerContain />
      <NewArrivalCard />
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default ServicePage;
