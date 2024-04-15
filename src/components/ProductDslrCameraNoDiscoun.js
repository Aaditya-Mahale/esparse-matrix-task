import FourStar from "./FourStar";
import "./ProductDslrCameraNoDiscoun.css";

const ProductDslrCameraNoDiscoun = () => {
  return (
    <div className="productdslr-camera-no-discoun">
      <div className="cart6">
        <div className="cart-item" />
        <div className="add-to-cart">Add To Cart</div>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          <img
            className="eos-250d-03-500x500-1-icon"
            alt=""
            src="/eos250d03500x500-1@2x.png"
          />
        </div>
      </div>
      <div className="canon-eos-dslr-camera-parent">
        <div className="canon-eos-dslr">CANON EOS DSLR Camera</div>
        <div className="frame-parent7">
          <div className="wrapper1">
            <div className="canon-eos-dslr">$360</div>
          </div>
          <div className="four-star-parent">
            <FourStar />
            <div className="div10">(95)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDslrCameraNoDiscoun;
