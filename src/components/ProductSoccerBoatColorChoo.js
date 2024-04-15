import CardContainer from "./CardContainer";
import "./ProductSoccerBoatColorChoo.css";
import { Link } from 'react-router-dom';
const ProductSoccerBoatColorChoo = () => {
  return (
    <div className="productsoccer-boat-color-choo">
      <div className="cart3">

      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>

        
        <div className="fill-heart-container">
          <img className="fill-heart-icon2" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon2" alt="" src="/fill-eye.svg" />
        </div>
        <div className="copa-sense-1-wrapper">
          <img
            className="copa-sense-1-icon"
            alt=""
            src="/copa-sense-1@2x.png"
          />
        </div>
      </div>
      <CardContainer
        productTitle="Jr. Zoom Soccer Cleats"
        productPrice="$1160"
        productDescription="/vector.svg"
        productQuantity="(35)"
        productImageId="/group-1000005935.svg"
        propBorderRadius="1.4px"
        propOverflow="unset"
      />
    </div>
  );
};

export default ProductSoccerBoatColorChoo;
