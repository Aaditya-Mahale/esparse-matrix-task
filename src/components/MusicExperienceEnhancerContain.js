import FlashSaleOfferSeconds from "./FlashSaleOfferSeconds";
import ButtonPrimaryHoverNo from "./ButtonPrimaryHoverNo";
import "./MusicExperienceEnhancerContain.css";

const MusicExperienceEnhancerContain = () => {
  return (
    <div className="ellipse-parent2">
      <div className="frame-child10" />
      <div className="enhance-your-music">Enhance Your Music Experience</div>
      <div className="flash-sell-timer-parent">
        <FlashSaleOfferSeconds
          prop="23"
          seconds="Hours"
          flashSaleOfferSecondsPosition="relative"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="51.61%"
          frameDivRight="24.19%"
          frameDivLeft="24.19%"
          divColor="#000"
          secondsWidth="32px"
          secondsColor="#000"
        />
        <FlashSaleOfferSeconds
          prop="05"
          seconds="Days"
          flashSaleOfferSecondsPosition="relative"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="45.16%"
          frameDivRight="27.42%"
          frameDivLeft="27.42%"
          divColor="#000"
          secondsWidth="28px"
          secondsColor="#000"
        />
        <FlashSaleOfferSeconds
          prop="59"
          seconds="Minutes"
          flashSaleOfferSecondsPosition="relative"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="67.74%"
          frameDivRight="16.13%"
          frameDivLeft="16.13%"
          divColor="#000"
          secondsWidth="43px"
          secondsColor="#000"
        />
        <FlashSaleOfferSeconds
          prop="35"
          seconds="Seconds"
          flashSaleOfferSecondsPosition="relative"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="77.42%"
          frameDivRight="11.29%"
          frameDivLeft="11.29%"
          divColor="#000"
          secondsWidth="48px"
          secondsColor="#000"
        />
      </div>
      <ButtonPrimaryHoverNo
        viewAllProducts="Buy Now!"
        buttonPrimaryHoverNoPosition="absolute"
        buttonPrimaryHoverNoTop="375px"
        buttonPrimaryHoverNoLeft="56px"
        buttonPrimaryHoverNoBackgroundColor="#00ff66"
        buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
      />
      <div className="categories">Categories</div>
      <div className="jbl-boombox-2-hero-020-x1-1-wrapper">
        <img
          className="jbl-boombox-2-hero-020-x1-1"
          alt=""
          src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MusicExperienceEnhancerContain;
