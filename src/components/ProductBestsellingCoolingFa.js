import { useMemo } from "react";
import FourHalfStar from "./FourHalfStar";
import "./ProductBestsellingCoolingFa.css";
import { Link } from 'react-router-dom';
const ProductBestsellingCoolingFa = ({
  gammaxxL240Argb1500x5001,
  rGBLiquidCPUCooler,
  prop,
  prop1,
  starHalfFilled,
  frameDivTop,
  frameDivLeft,
  gammaxxL240Argb1500x5001ITop,
  gammaxxL240Argb1500x5001ILeft,
  gammaxxL240Argb1500x5001IWidth,
  gammaxxL240Argb1500x5001IHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconBorderRadius,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const gammaxxL240Argb1500x5001IconStyle = useMemo(() => {
    return {
      top: gammaxxL240Argb1500x5001ITop,
      left: gammaxxL240Argb1500x5001ILeft,
      width: gammaxxL240Argb1500x5001IWidth,
      height: gammaxxL240Argb1500x5001IHeight,
    };
  }, [
    gammaxxL240Argb1500x5001ITop,
    gammaxxL240Argb1500x5001ILeft,
    gammaxxL240Argb1500x5001IWidth,
    gammaxxL240Argb1500x5001IHeight,
  ]);

  const starHalfFilledIconStyle = useMemo(() => {
    return {
      overflow: starHalfFilledIconOverflow,
      borderRadius: starHalfFilledIconBorderRadius,
    };
  }, [starHalfFilledIconOverflow, starHalfFilledIconBorderRadius]);

  return (
    <div className="productbestselling-cooling-fa">
      <div className="cart9">

      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>
        <div className="fill-heart-parent6">
          <img className="fill-heart-icon8" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon8" alt="" src="/fill-eye.svg" />
        </div>
        <div
          className="gammaxx-l240-argb-1-500x500-1-wrapper"
          style={frameDiv3Style}
        >
          <img
            className="gammaxx-l240-argb-1-500x500-1-icon"
            alt=""
            src={gammaxxL240Argb1500x5001}
            style={gammaxxL240Argb1500x5001IconStyle}
          />
        </div>
      </div>
      <div className="rgb-liquid-cpu-cooler-parent">
        <div className="rgb-liquid-cpu">{rGBLiquidCPUCooler}</div>
        <div className="parent">
          <div className="rgb-liquid-cpu">{prop}</div>
          <div className="div14">{prop1}</div>
        </div>
        <div className="four-half-star-group">
          <FourHalfStar />
          <div className="div15">(65)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductBestsellingCoolingFa;
