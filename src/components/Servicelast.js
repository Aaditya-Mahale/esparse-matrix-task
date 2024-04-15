import React from 'react';
import './Servicelast.css';
import img1 from './images/Camera alt.png'; // Assuming "Vector.png" is the image name
import img2 from './images/Vector.png'; // Assuming "Vector (1).png" is the image name
import img3 from './images/Rectangle 65.png'; // Assuming "rectangleImage.png" is the image name
import img4 from './images/Rectangle 66.png'; // Assuming "rectangleImage2.png" is the image name
import img5 from './images/Rectangle 67.png'; // Assuming "rectangleImage3.png" is the image name
import { Link } from 'react-router-dom';

const Servicelast = () => {
  return (
   <div className='Servicelast'>
<div className='headingsellerp'>Seller's Registration Form</div>
<div className='selrect'>
<div className='uplocontitle'>Photos and Videos</div>
<div className='uplocon'>
  
  <div className='uplpho'>
  <img src={img1} alt="pic" className='uplphoimg' />
  </div>
  <div className='uplpho1'>
  <img src={img2} alt="pic" className='uplpho1img' />
  </div>
</div>
<div className='uplocontitle1'>Uploaded Photos and Videos</div>
<div className='uplocon2'>
  
  <div className='sevdivss'>
  <img src={img3} alt="pic" className='sevdivssimg' />
  </div>
  <div className='sevdivss'>
  <img src={img4} alt="pic" className='sevdivssimg' />
  </div>
  <div className='sevdivss'>
  <img src={img5} alt="pic" className='sevdivssimg' />
  </div>
  <div className='sevdivss'>
  <img src={img3} alt="pic" className='sevdivssimg' />
  </div>
</div>
<div className="sellastbu">
      <Link to="/">
        <button>Submit</button>
      </Link>
    </div>

</div>

   </div>
  );
};

export default Servicelast;