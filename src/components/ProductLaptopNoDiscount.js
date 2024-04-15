import { useMemo } from "react";
import FiveStar from "./FiveStar";
import "./ProductLaptopNoDiscount.css";
import { Link } from 'react-router-dom';

const ProductLaptopNoDiscount = ({
  ideapadGaming3i01500x5001,
  aSUSFHDGamingLaptop,
  prop,
  vector,
  vector1,
  prop1,
  ideapadGaming3i01500x5001Left,
  ideapadGaming3i01500x5001Width,
  vectorIconOpacity,
  vectorIconOpacity1,
  divWidth,
}) => {
  const ideapadGaming3i01500x5001IconStyle = useMemo(() => {
    return {
      left: ideapadGaming3i01500x5001Left,
      width: ideapadGaming3i01500x5001Width,
    };
  }, [ideapadGaming3i01500x5001Left, ideapadGaming3i01500x5001Width]);

  const vectorIconStyle = useMemo(() => {
    return {
      opacity: vectorIconOpacity,
    };
  }, [vectorIconOpacity]);

  const vectorIcon1Style = useMemo(() => {
    return {
      opacity: vectorIconOpacity1,
    };
  }, [vectorIconOpacity1]);

  const divStyle = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  return (
    <div className="productlaptop-no-discount">
      <div className="cart5">

      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>

        <div className="fill-heart-parent2">
          <img className="fill-heart-icon4" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon4" alt="" src="/fill-eye.svg" />
        </div>
        <div className="ideapad-gaming-3i-01-500x500-1-wrapper">
          <img
            className="ideapad-gaming-3i-01-500x500-1-icon"
            alt=""
            src={ideapadGaming3i01500x5001}
            style={ideapadGaming3i01500x5001IconStyle}
          />
        </div>
      </div>
      <div className="asus-fhd-gaming-laptop-parent">
        <div className="asus-fhd-gaming">{aSUSFHDGamingLaptop}</div>
        <div className="frame-parent6">
          <div className="frame">
            <div className="asus-fhd-gaming">{prop}</div>
          </div>
          <div className="five-star-group">
            <FiveStar />
            <div className="div8" style={divStyle}>
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLaptopNoDiscount;
