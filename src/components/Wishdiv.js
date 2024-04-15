import React from 'react';
import './WishPro.css'; 

const Wishdiv = () => {
  const handleMoveToCart = () => {
    console.log('Move to Cart button clicked');
    // Add your logic here to move the item to the cart
  };

  return (
    <div className="wish-container">
      <div className="wishlist-content">
        <div className="wishlist-heading">
          Wishlist (4)
        </div>
        <button
          className="seeall-btn"
          onClick={handleMoveToCart}
        >
          Move all to Bag
        </button>
      </div>
    </div>
  );
};

export default Wishdiv;
