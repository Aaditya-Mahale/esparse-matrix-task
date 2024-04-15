import DiscountPercent from "./DiscountPercent";
import FormContainer from "./FormContainer";
import "./Property1CartWithDiscount.css";
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

const Property1CartWithDiscount = () => {
  return (
    <div className="property-1cart-with-discount">
      <div className="discount-percent-container">
        <DiscountPercent
          prop="-35%"
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
          <img
            className="ak-900-01-500x500-1-icon"
            alt=""
            src="/ak90001500x500-1@2x.png"
          />
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default Property1CartWithDiscount;