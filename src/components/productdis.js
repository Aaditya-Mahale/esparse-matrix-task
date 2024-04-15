import React from 'react';
import './productdis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { faHeart } from '@fortawesome/free-solid-svg-icons';


import img1 from './images/Frame 895 (1).png';
import img2 from './images/Frame 896.png'
import img3 from './images/Frame 897.png'
import img4 from './images/Frame 919.png'
import img5 from './images/Frame 894.png'
import img6 from './images/UnderLine.png'
import img7 from './images/Frame 926.png'
import img8 from './images/Button.png'
import img9 from './images/Frame 915.png'
import img10 from './images/Frame 914.png'
import img11 from './images/Frame 925.png'
import Footer from './Footer';



const Productdis = () => {
    return (<>
        <div className='productdis'>

            <div className='productimgs'>
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
            </div>

            <div className='productimg'>
                <img src={img5} alt="img5" />
            </div>
            <div className='productinfos'>
                <div className='producttitlep'>
                    Havic HV G-92 Gamepad
                </div>
                <div className='productratingss'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                    <span>(150 Reviews)</span><span className='instocks'>In Stock</span>
                </div>
                <div className='productprices' >
                    <span>$192.00</span>
                </div>
                <div className='productdesc'>
                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                </div>
                
                <img src={img6} alt="img6" className='linesss' />
                <div className='colorcho'>
                    <span>Colors</span>   <Form className="Form-check">
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Green"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Red"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                </div>
                <div className='sizec'>
                    Size  : <Button variant="outline-danger" className="custom-button">XS</Button>
                    <Button variant="outline-danger" className="custom-button">S</Button>
                    <Button variant="outline-danger" className="custom-button">M</Button>
                    <Button variant="outline-danger" className="custom-button">L</Button>
                    <Button variant="outline-danger" className="custom-button">XL</Button>

                </div>
                <div className='addb'>
                    <img src={img7} alt="img7" />
                    <img src={img8} alt="img8" />
                    <div style={{ border: '1px solid #000', padding: '10px', borderRadius: '5px' }}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>

                </div>
                <div className='delhiv' style={{ border: '1px solid #000', padding: '10px', borderRadius: '5px' }}>
                    <img src={img9} alt="img9" />
                </div>
                <div className='delhiv' style={{ border: '1px solid #000', padding: '10px', borderRadius: '5px' }}>
                    <img src={img10} alt="img10" />
                </div>
            </div>
           


        </div>
      


    </>
    );
};

export default Productdis;