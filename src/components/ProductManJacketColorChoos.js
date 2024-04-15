import CardContainer from "./CardContainer";
import "./ProductManJacketColorChoos.css";
import { Link } from 'react-router-dom';
const ProductManJacketColorChoos = () => {
  return (
    <div className="productman-jacket-color-choos">
      <div className="cart1">

      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>
        <div className="fill-heart-parent">
          <img className="fill-heart-icon" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon" alt="" src="/fill-eye.svg" />
        </div>
        <img className="cart-child" alt="" src="/frame-608@2x.png" />
      </div>
      <CardContainer
        productTitle="Quilted Satin Jacket"
        productPrice="$660"
        productDescription="/starhalffilled.svg"
        productQuantity="(55)"
        productImageId="/group-1000005935.svg"
        propBorderRadius="unset"
        propOverflow="hidden"
      />
    </div>
  );
};

export default ProductManJacketColorChoos;
