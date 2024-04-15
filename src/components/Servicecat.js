import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Servicecat.css';
import logo1 from './images/image 64.png';
import logo2 from './images/image 65.png';
import logo3 from './images/image 66.png';
import logo4 from './images/image 67.png';
import logo5 from './images/image 68.png';
import logo6 from './images/image 69.png';

const ServiceCat = () => {
  const categories = [
    { id: 1, name: ' Repairing', image: logo1, link: '/service2' }, // Add a link property
    { id: 2, name: 'Painting', image: logo2 },
    { id: 3, name: 'Electrician', image: logo3 },
    { id: 4, name: 'Pest Control', image: logo4 },
    { id: 5, name: 'Makeup', image: logo5 },
    { id: 6, name: 'Massage', image: logo6 },
  ];

  return (
    <div className='servicecomp'>
      <div className='cat'>
        <h5 style={{ display: 'flex', alignItems: 'center', color: 'rgba(219, 68, 68, 1)', fontSize: '16px' }}>
          <span style={{ marginLeft: '75px', display: 'inline-block', width: '20px', height: '40px', borderRadius: '4px', backgroundColor: 'rgba(219, 68, 68, 1)', marginRight: '8px' }}></span>
          Categories
        </h5>
      </div>
      <div className='Browse'>
        <h2 style={{ marginLeft: '75px' }}>Browse By Category</h2>
      </div>

      <div className='Container'>
        {categories.map((category, index) => (
          <Link to={category.link} key={category.id}> {/* Use Link component to navigate */}
            <div className={`Category ${index === 3 ? 'special-background' : ''}`}>
              <img id='img' src={category.image} alt={category.name} />
              <h5 className='h4'>{category.name}</h5>
            </div>
          </Link>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default ServiceCat;
