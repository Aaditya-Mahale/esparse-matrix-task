import BookshelfContainer from "./BookshelfContainer";
import "./ProductBestsellingBookself.css";
import { Link } from 'react-router-dom';
const ProductBestsellingBookself = () => {
  return (
    <div className="productbestselling-bookself">
      <div className="cart8">
        
      <div className="cart-item" />
      <Link to="/cart" className="add-to-cart">Add To Cart</Link>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src="/fill-eye.svg" />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          
        </div>
        <div className="fill-heart-parent5">
          <img className="fill-heart-icon7" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon7" alt="" src="/fill-eye.svg" />
        </div>
        <div className="sam-moghadam-khamseh-l-7mqshl-wrapper">
          <img
            className="sam-moghadam-khamseh-l-7mqshl-icon"
            alt=""
            src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
          />
        </div>
      </div>
      <BookshelfContainer />
    </div>
  );
};

export default ProductBestsellingBookself;
