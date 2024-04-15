import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Wishlist.css';

const WishlistDiv = () => {
  return (
    <div className="wishlistContainer">
      <div className="wishlistItem">
        <img
          src="https://images.unsplash.com/photo-1578556434234-d9e2e5b4f7e0"
          alt="Gucci duffle bag"
          className="wishlistImage"
        />
        <div className="wishlistText">
          <h3>Gucci duffle bag</h3>
          <p>$960</p>
          <p className="wishlistDiscount">$1160</p>
        </div>
        <button className="addToCartButton">Add To Cart</button>
      </div>
      <div className="wishlistItem">
        <img
          src="https://images.unsplash.com/photo-1578556434234-d9e2e5b4f7e0"
          alt="RGB liquid CPU Cooler"
          className="wishlistImage"
        />
        <div className="wishlistText">
          <h3>RGB liquid CPU Cooler</h3>
          <p>$1960</p>
        </div>
        <button className="addToCartButton">Add To Cart</button>
      </div>
      <div className="wishlistItem">
        <img
          src="https://images.unsplash.com/photo-1578556434234-d9e2e5b4f7e0"
          alt="GP11 Shooter USB Gamepad"
          className="wishlistImage"
        />
        <div className="wishlistText">
          <h3>GP11 Shooter USB Gamepad</h3>
          <p>$550</p>
        </div>
        <button className="addToCartButton">Add To Cart</button>
      </div>
      <div className="wishlistItem">
        <img
          src="https://images.unsplash.com/photo-1578556434234-d9e2e5b4f7e0"
          alt="Quilted Satin Jacket"
          className="wishlistImage"
        />
        <div className="wishlistText">
          <h3>Quilted Satin Jacket</h3>
          <p>$750</p>
        </div>
        <button className="addToCartButton">Add To Cart</button>
      </div>
      <button className="moveAllToBagButton">Move All To Bag</button>
    </div>
  );
};

export default WishlistDiv;