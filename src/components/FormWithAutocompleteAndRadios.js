import FourStar from "./FourStar";
import "./FormWithAutocompleteAndRadios.css";
import { Link } from 'react-router-dom';
const FormWithAutocompleteAndRadios = () => {
  return (
    <div className="cart-with-flat-discount-cart">
      <div className="cart12">

      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>


        <div className="fill-heart-parent13">
          <img className="fill-heart-icon16" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon16" alt="" src="/fill-eye.svg" />
        </div>
        <div className="cart-inner" />
        <img
          className="curology-j7pkvqrtusm-unsplash-icon"
          alt=""
          src="/curologyj7pkvqrtusmunsplash-1@2x.png"
        />
      </div>
      <div className="curology-product-set-parent">
        <div className="curology-product-set">{`Curology Product Set `}</div>
        <div className="frame-parent29">
          <div className="wrapper4">
            <div className="curology-product-set">$500</div>
          </div>
          <div className="four-star-container">
            <FourStar />
            <div className="div42">(145)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWithAutocompleteAndRadios;
