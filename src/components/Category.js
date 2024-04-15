// Category.js
import React from 'react';
import './Category.css';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';

export default function Category() {
  const categories = [
    { id: 1, name: 'Mobile', image: logo1 },
    { id: 2, name: 'Computer', image: logo2 },
    { id: 3, name: 'SmartWatch', image: logo3 },
    { id: 4, name: 'Camera', image: logo4 },
    { id: 5, name: 'HeadPhone', image: logo5 },
    { id: 6, name: 'Gaming', image: logo6 },
  ];

  return (
    <>
    <div className='cat'>
      <h5 style={{ display: 'flex', alignItems: 'center', color: 'rgba(219, 68, 68, 1)', fontSize: '16px' }}>
        <span style={{ marginLeft: '75px', display: 'inline-block', width: '20px', height: '40px', borderRadius: '4px', backgroundColor: 'rgba(219, 68, 68, 1)', marginRight: '8px' }}></span>
        Categories
      </h5>
      </div>
      <div className='Browse'>
<h2 style={{marginLeft:'75px'}}>Browse By Category</h2>
      </div>

      <div className='Container'>
        {categories.map((category, index) => (
          <div key={category.id} className={`Category ${index === 3 ? 'special-background' : ''}`}>
            <img id='img' src={category.image} alt={category.name} />
            <h5 className='h4'>{category.name}</h5>
          </div>
        ))}
      </div>
      <br></br>
    </>
  );
}
