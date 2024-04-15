import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import StartupIdeaCard from "../components/StartupIdeaCard";
import ButtonPrimaryHoverNo from "../components/ButtonPrimaryHoverNo";
import MusicExperienceEnhancerContain from "../components/MusicExperienceEnhancerContain";
import Today from "../components/Today";
import GamepadSection from "../components/GamepadSection";
import CategoryFilterContainer from "../components/CategoryFilterContainer";
import BestSellingProductsContainer from "../components/BestSellingProductsContainer";
import NorthCoatForm from "../components/NorthCoatForm";
import ExploreOurProductsContainer from "../components/ExploreOurProductsContainer";
import NewArrivalCard from "../components/NewArrivalCard";
import FullServices from "../components/FullServices";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import Logo from "../components/Logo";
import HeaderHeaderContactHover from "../components/HeaderHeaderContactHover";
import HeaderContact from "../components/HeaderContact";
import Property1Active from "../components/Property1Active";
import Line from "../components/Line";
import "./Home.css";
import BrowseByCategoryContainer from "../components/BrowseByCategoryContainer";
import Category from "../components/Category";

const Home = () => {
  return (
    <div className="e-commerce-homepage">
      <StartupIdeaCard />
      <ButtonPrimaryHoverNo
        viewAllProducts="View All Products"
        buttonPrimaryHoverNoPosition="absolute"
        buttonPrimaryHoverNoTop="1219px"
        buttonPrimaryHoverNoLeft="603px"
        buttonPrimaryHoverNoBackgroundColor="#db4444"
        buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
      />
      <MusicExperienceEnhancerContain />
      <div className="frame-parent">
        <Today />
        <GamepadSection /> <br></br>
      </div>
      <Category />
      <div className="frame-group">
        <BestSellingProductsContainer />
        <NorthCoatForm />
      </div>
      <ExploreOurProductsContainer />
      <NewArrivalCard />
      <FullServices
        showFrameDiv
        frameDivVisible={false}
        fullServicesPosition="absolute"
        fullServicesTop="5161px"
        fullServicesLeft="249px"
      />
      <Footer
        exclusive="Startup IDEA"
        footerPosition="absolute"
        footerTop="5462px"
        footerLeft="0px"
      />
      
      
      <Line lineIconOverflow="unset" lineIconPosition="absolute" lineIconTop="142px" lineIconLeft="0px" />
      <a href="#top">
  <img className="fill-with-up-arrow" alt="Scroll Up" src="/fill-with-up-arrow.svg" />
</a>

      <div className="become-a-seller"><Link to="/sellerreg" style={{ color: 'white', textDecoration: 'none' }}>Become a Seller</Link></div>
    </div>
  );
};

export default Home;
