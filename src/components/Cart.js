import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import product1 from '../components/images/Monitor-Cart-Small.png';
import product2 from '../components/images/g92-2-500x500 1 (1).png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import quantity from '../components/images/Quantity.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Added import
import { faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown);
const updateCart = async () => {
  try {
    const response = await fetch('/api/v1/updateCartDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Include any data you need to send in the request body here
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle success response here if needed
    console.log('Cart updated successfully!');
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    // Handle error here
  }
};
const deleteCart = async (cartId) => {
  try {
    const response = await fetch(`/api/v1/deleteCartDetails/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Include any data you need to send in the request body here
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle success response here if needed
    console.log(`Cart with ID ${cartId} deleted successfully!`);
  } catch (error) {
    console.error(`There was a problem with your fetch operation: ${error}`);
    // Handle error here
  }
};

function Cart({ cartId }) {
  return (<>
    <div className="carthead">
      <div className='heading'>
        <h4>Product</h4>
      </div>
      <div className='heading'>
        <h4>Price</h4>
      </div>
      <div className='heading'>
        <h4>Quantity</h4>
      </div>
      <div className='heading'>
        <h4>Subtotal</h4>
      </div>
    </div>
    
    <div className='product1'>
    <div className='deletefont' data-cartid={cartId} onClick={() => deleteCart(cartId)}> <FontAwesomeIcon icon={faXmark} /></div>
      <div className='product'>
        <img src={product1} alt="Product Image" className="product-image" />
        <h4>LCD Monitor</h4>
      </div>
      <div className='product'>
        <h4>$640</h4>
      </div>
      <div className='product'>
        <img src={quantity} alt="Product Image" className="product-image" />
      </div>
      <div className='product'>
        <h4>$640</h4>
      </div>
    </div>
    <div className='product1'>
    <div className='deletefont' data-cartid={cartId} onClick={() => deleteCart(cartId)}> <FontAwesomeIcon icon={faXmark} /></div>

      <div className='product'>
        <img src={product2} alt="Product Image" className="product-image" />
        <h4>LCD Monitor</h4>
      </div>
      <div className='product'>
        <h4>$640</h4>
      </div>
      <div className='product'>
        <img src={quantity} alt="Product Image" className="product-image" />
      </div>
      <div className='product'>
        <h4>$640</h4>
      </div>
    </div>
    <div className='buttondiv'>
    <button className="button">Return To Shop</button>
    <button id="update-cart-button" className="button" onClick={updateCart}>Update Cart</button>
      </div>

      <div className="down">
      {/* First div with input text and button */}
      <div className="input-div">
        <input type="text" className="textbox" placeholder="Coupon Code" />
        <button className="buttondown">Apply Coupon</button>
      </div>

     
      <div className="carttotal">
        <p className="cart-total">Cart Total</p>
        <p className="subtotal">Subtotal: <span className="amount">$650</span></p>
        <p className="shipping">Shipping  <span className="amount1">Free</span></p>
        <p className="total">Total <span className="amount2">$650</span></p>
        <Link to="/cartcheckout" className="buttondown3">
          Proceed to Checkout
        </Link>
      </div>
      </div>
    

    
  </>
  );
}

export default Cart;