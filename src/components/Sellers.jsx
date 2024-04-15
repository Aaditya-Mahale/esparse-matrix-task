// Sellers.jsx

import React from 'react';
import './Sellers.css';
import { Link } from 'react-router-dom';

const Sellers = () => {
  return (
    <div className="container">
      <h2 className="title">Sellers Registration Form</h2>

      <div className="section">
        <h3>Personal Information</h3>
        <div className="info">
          <div className="input-group1">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="input-group1">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
          <div className="input-group1">
            <label htmlFor="businessName">Business/Startup Name</label>
            <input type="text" id="businessName" />
          </div>
          <div className="input-group1">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className="input-group1 input-group1-inline">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className="input-group1 input-group1-inline">
            <label htmlFor="state">State</label>
            <input type="text" id="state" />
          </div>
          <div className="input-group1 input-group1-inline">
            <label htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" />
          </div>
          <div className="input-group1">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="text" id="mobileNumber" />
          </div>
          <div className="input-group1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
        </div>
      </div>
      <div className="section business-timing">
      <h3>Business Timing</h3>
      <div className="info">
        <div className="input-group1-custom">
          <label>Days of the Week</label>
          <div className="days1">
            <label><input type="checkbox" />Mon</label>
            <label><input type="checkbox" />Tue</label>
            <label><input type="checkbox" />Wed</label>
            <label><input type="checkbox" />Thu</label>
            <label><input type="checkbox" />Fri</label>
            <label><input type="checkbox" />Sat</label>
            <label><input type="checkbox" />Sun</label>
          </div>
        </div>
        <div className="input-group1 input-group1-inline">
        <div className="input-group1">
            <label htmlFor="mobileNumber">Opens At</label>
            <input type="text" id="mobileNumber" />
          </div>
          <div className="input-group1">
            <label htmlFor="email">Closes At</label>
            <input type="email" id="email" />
          </div>
        </div>
      </div>
    </div>
      <div className="section">
        <h3>Year of Establishment</h3>
        <div className="info">
          <div className="input-group1">
            <label>Month</label>
            <select id="month">
            <option value="">Select Month</option>

        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </select>
          </div>
          <div className="input-group1">
            <label>Year</label>
            <input type="text" id="mobileNumber" />

          </div>
        </div>
      </div>

      <div className="section">
        <h3>Business Category</h3>
        <div className="info">
          <div className="input-group1">
            <label>Business Category</label>
            <select id="businessCategory">
              {/* Business category options */}
            </select>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Business Website</h3>
        <div className="info">
          <div className="input-group1">
            <label htmlFor="businessWebsite">Business Website</label>
            <input type="text" id="businessWebsite" />
          </div>
        </div>
      </div>

      {/* Add other sections as needed */}

      <div className="next-section">
      <Link to="/sellerreg2">
        <button>Next Section</button>
      </Link>
    </div>
    </div>
  );
};

export default Sellers;
