import { useMemo } from "react";
import DiscountPercent from "./DiscountPercent";
import FourHalfStar from "./FourHalfStar";
import "./Property1Variant.css";
import { Link } from 'react-router-dom';

const handleAddToCartClick = async () => {
  try {
    const response = await fetch('/api/v1/CreateaddtoCartDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: 'your_product_id',
        quantity: 1,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log('Item added to cart successfully!');
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};
const Property1Variant = ({
  prop,
  samMoghadamKhamsehKvmdsTr,
  sSeriesComfortChair,
  prop1,
  prop2,
  starHalfFilled,
  prop3,
  samMoghadamKhamsehKvmdsTrTop,
  samMoghadamKhamsehKvmdsTrLeft,
  samMoghadamKhamsehKvmdsTrWidth,
  samMoghadamKhamsehKvmdsTrHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconBorderRadius,
}) => {
  const samMoghadamKhamsehKvmdsTrGOIconStyle = useMemo(() => {
    return {
      top: samMoghadamKhamsehKvmdsTrTop,
      left: samMoghadamKhamsehKvmdsTrLeft,
      width: samMoghadamKhamsehKvmdsTrWidth,
      height: samMoghadamKhamsehKvmdsTrHeight,
    };
  }, [
    samMoghadamKhamsehKvmdsTrTop,
    samMoghadamKhamsehKvmdsTrLeft,
    samMoghadamKhamsehKvmdsTrWidth,
    samMoghadamKhamsehKvmdsTrHeight,
  ]);

  const starHalfFilledIconStyle = useMemo(() => {
    return {
      overflow: starHalfFilledIconOverflow,
      borderRadius: starHalfFilledIconBorderRadius,
    };
  }, [starHalfFilledIconOverflow, starHalfFilledIconBorderRadius]);

  return (
    <div className="property-1variant4">
      <div className="discount-percent-parent">
        <DiscountPercent
          prop="-25%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
        />
         
         <div className="rectangle-div" />
        <Link to="/cart" className="add-to-cart1" style={{ textDecoration: 'none' }} onClick={handleAddToCartClick}>Add To Cart</Link>

        <div className="fill-heart-parent11">
          <img className="fill-heart-icon13" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon13" alt="" src="/fill-eye.svg" />
        </div>
        <div className="ak-900-01-500x500-1-wrapper">
         
        </div>
      


        <div className="fill-heart-parent9">
          
          <img className="fill-heart-icon11" alt="" src="/fill-heart.svg" />
          <Link to="/product"> {/* Replace with your actual image element */}
        <img
          className="fill-heart-icon11"
          alt="Heart Icon" // Update alt text for better accessibility
          src="/fill-eye.svg" // Assuming the image is named "fill-eye.svg" and located at the root
        />
      </Link>
        </div>
        <div className="sam-moghadam-khamseh-kvmdstrgo-wrapper">
          <img
            className="sam-moghadam-khamseh-kvmdstrgo-icon"
            alt=""
            src={samMoghadamKhamsehKvmdsTr}
            style={samMoghadamKhamsehKvmdsTrGOIconStyle}
          />
          
        </div>
      </div>
      <div className="s-series-comfort-chair-parent">
        <div className="s-series-comfort-chair">{sSeriesComfortChair}</div>
        <div className="parent2">
          <div className="s-series-comfort-chair">{prop1}</div>
          <div className="div23">{prop2}</div>
        </div>
        <div className="four-half-star-parent1">
          <FourHalfStar />
          <div className="div24">{prop3}</div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant;
