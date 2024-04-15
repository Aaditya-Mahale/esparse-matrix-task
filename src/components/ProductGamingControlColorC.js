import { useMemo } from "react";
import NewButton from "./NewButton";
import FourHalfStar from "./FourHalfStar";
import ColourChnage from "./ColourChnage";
import "./ProductGamingControlColorC.css";
import { Link } from 'react-router-dom';
const ProductGamingControlColorC = ({
  gP11PRD31,
  gP11ShooterUSBGamepad,
  prop,
  starHalfFilled,
  prop1,
  group1000005935,
  gP11PRD31IconTop,
  gP11PRD31IconLeft,
  gP11PRD31IconHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconBorderRadius,
}) => {
  const gP11PRD31IconStyle = useMemo(() => {
    return {
      top: gP11PRD31IconTop,
      left: gP11PRD31IconLeft,
      height: gP11PRD31IconHeight,
    };
  }, [gP11PRD31IconTop, gP11PRD31IconLeft, gP11PRD31IconHeight]);

  const starHalfFilledIconStyle = useMemo(() => {
    return {
      overflow: starHalfFilledIconOverflow,
      borderRadius: starHalfFilledIconBorderRadius,
    };
  }, [starHalfFilledIconOverflow, starHalfFilledIconBorderRadius]);

  return (
    <div className="productgaming-control-color-c">
      <div className="cart2">

      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>
        <div className="fill-heart-group">
          <img className="fill-heart-icon1" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon1" alt="" src="/fill-eye.svg" />
        </div>
        <NewButton
          newButtonPosition="absolute"
          newButtonTop="12px"
          newButtonLeft="12px"
        />
        <div className="gp11-prd3-1-wrapper">
          <img
            className="gp11-prd3-1-icon"
            alt=""
            src={gP11PRD31}
            style={gP11PRD31IconStyle}
          />
        </div>
      </div>
      <div className="gp11-shooter-usb-gamepad-parent">
        <div className="gp11-shooter-usb">{gP11ShooterUSBGamepad}</div>
        <div className="frame-parent4">
          <div className="wrapper">
            <div className="gp11-shooter-usb">{prop}</div>
          </div>
          <div className="four-half-star-parent">
            <FourHalfStar />
            <div className="div4">{prop1}</div>
          </div>
        </div>
        <ColourChnage
          group1000005935="/group-1000005935.svg"
          ellipseDivBackgroundColor="#db4444"
        />
      </div>
    </div>
  );
};

export default ProductGamingControlColorC;
