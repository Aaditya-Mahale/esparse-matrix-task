import React from 'react'
import './Checkout.css'
import gamePadImage from './images/Gamepad-Cart-Small.png';
import monitor from './images/Monitor-Cart-Small.png';
import Form from 'react-bootstrap/Form';
import cardpic from './images/Frame 834.png'

export default function Checkout() {
  return (
    <div className='checkoutpage'>
    <div className='roadm'>
      <h6 className='roadm-text'>
        Account / My Account / Product / View Cart / Checkout
      </h6>
    </div>
    <div className='cont'>
    <div className='billingdet'>
      <span className='billingdet-text'>
        Billing Details
      </span>
    </div>
    <div className='custinfo'>
      <div className='input-container'>
        <label htmlFor="input1">First Name</label>
        <input type="text" id="input1" name="input1" placeholder=" " />
      </div>
      <div className='input-container'>
        <label htmlFor="input2">Company Name</label>
        <input type="text" id="input2" name="input2" placeholder=" " />
      </div>
      <div className='input-container'>
        <label htmlFor="input3">Street Address</label>
        <input type="text" id="input3" name="input3" placeholder=" " />
      </div>
      <div className='input-container'>
        <label htmlFor="input4">Apartment, floor, etc. (optional)</label>
        <input type="text" id="input4" name="input4" placeholder=" " />
      </div>
      <div className='input-container'>
        <label htmlFor="input5">Town / City</label>
        <input type="text" id="input5" name="input5" placeholder=" " />
      </div>
      <div className='input-container'>
        <label htmlFor="input6">Phone Number</label>
        <input type="text" id="input6" name="input6" placeholder=" " />
      </div>
      <div className='input-container'>
        <label htmlFor="input7">Email Address</label>
        <input type="text" id="input7" name="input7" placeholder="" />
      </div>
      
    </div>
    <div className='checkb'>
      <label for="myCheckbox">
        <input
        className='checkboxt'
          type="checkbox"
          id="myCheckbox"
          name="myCheckbox"
         // Set the checkbox to checked initially
        />
       Save this information for faster check-out next time
      </label>
    </div>

    <div className="cartp">
      <div className="pr1">
        <img src={gamePadImage} alt="Image description" />
        <span className="inline-textss">LCD Monitor      </span>
        <span className='pricet'> $650</span>
      </div>
    </div>
    <div className="cartp1">
      <div className="pr2">
        <img src={monitor} alt="Image description" />
        <span className="inline-textss">H1 Gamepad      </span>
        <span className='pricet1'> $1100</span>
      </div>
      <div className="summary-container">
      <span>Subtotal:&#x20;</span><span className="subtotal-value">$1750</span><br />
      <span>Shipping:</span><span class="shipping-value">Free</span><br />
      <span>Total:&#x20;</span><span class="total-value">$1750</span>
    </div>

   <div className="card-pay">
      <form>
        {[ 'radio'].map((type) => (
          <div key={`reverse-${type}`} className="mb-3">
            {type === 'radio' && (
              <div className="cardb"> {/* Flexbox for first button and text */}
                <Form.Check
                  reverse
                  label=""
                  name="group1"
                  type={type}
                  id={`reverse-${type}-1`}
                />
                <span className='bankl'>Bank <img src={cardpic} alt="Image Description" />
    </span>
              </div>
            )}
            {type === 'radio' && (  // Render the second button on a separate line
              <div className="cardb">
                <Form.Check
                  reverse
                  label=""
                  name="group1"
                  type={type}
                  id={`reverse-${type}-2`}
                />
                <span className="ms-2">Cash on Delivery</span>
              </div>
            )}
          </div>
        ))}
      </form>
    </div>
    <div id="coupcart">
      <div className="input-boxche">
        <input className='coupin' style={{ width:'300px',
            height: '56px',
            padding: '16px 24px 16px 24px',
            borderRadius: '4px',
            border: '1px solid'} } type="text" placeholder="Enter your coupon code" />
        <button className='buttocartc' style={{ width: '211px', height: '56px', padding: '16px 48px', borderRadius: '4px', color:'white' ,backgroundColor:'#DB4444' }}>Apply</button>
      </div>
      <button className='buttoncartc1' style={{ marginTop:'20px', marginLeft:'-260px' ,width: '211px', height: '56px', padding: '16px 48px', borderRadius: '4px', color:'white' ,backgroundColor:'#DB4444' }}>Place Order</button>
      
    </div>
    </div>
    </div>
    </div>
  )
}
