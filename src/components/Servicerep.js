import React from 'react';
import './Servicerep.css'
import img1 from './images/image 70.png'
import img2 from './images/image 71.png'
import img3 from './images/image 72.png'
import img4 from './images/image 73.png'
import img5 from './images/Frame 566.png'
import img6 from './images/image 70 (1).png'
import img7 from './images/image 71 (1).png'
import img8 from './images/image 72 (1).png'
import img9 from './images/image 73 (1).png'

const ServiceRep = () => {
    return (
        <div className='Servicerep'>
            <div className='servicerephead'>
                <h5 style={{ display: 'flex', alignItems: 'center', color: 'rgba(219, 68, 68, 1)', fontSize: '16px' }}>
                    <span style={{ marginLeft: '75px', display: 'inline-block', width: '20px', height: '40px', borderRadius: '4px', backgroundColor: 'rgba(219, 68, 68, 1)', marginRight: '8px' }}></span>
                    This Month
                </h5>
                
                <button className='thismbuttons'> ViewAll</button>

            </div>
            <span className='repaircssa' >
        Repairing Service
      </span>
            <div className='imgservicesp'>
                <div className='imgservi'>
                    <img src={img1} alt="img1" style={{ marginTop: '-67px', marginBottom:'-32px' }} />
                    <br></br>
                    <span > Ac Service &  Repair  </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />


                </div>
                <div className='imgservi'>
                    <img src={img2} alt="img1" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <span > Water Purifier Repair  </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />

                </div>
                <div className='imgservi'>
                    <img src={img3} alt="img1" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <span > Washing Machine Repair   </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />
                </div>
                <div className='imgservi'>
                    <img src={img4} alt="img1" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <span > Chimney Repair   </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />
                </div>
            </div>
            <span style={{
                marginLeft:'60px',
        styleName: 'Heading/36PX SemiBold',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 600,
        lineHeight: '48px',
        letterSpacing: '0.04em',
        textAlign: 'left'
      }}>
        <div className='repservs'>
        Service List
        <button className='thismbuttons1'> ViewAll</button>
        </div>
      </span>
            <div className='imgservicesli'>
                <div className='imgservi'>
                    <img src={img6} alt="img1" style={{ marginTop: '-67px', marginBottom:'-32px' }} />
                    <br></br>
                    <span > Ac Service &  Repair  </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />


                </div>
                <div className='imgservi'>
                    <img src={img7} alt="img1" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <span > Water Purifier Repair  </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />

                </div>
                <div className='imgservi'>
                    <img src={img8} alt="img1" style={{  marginTop:'24px' }}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span > Washing Machine Repair   </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />
                </div>
                <div className='imgservi'>
                    <img src={img9} alt="img1"  style={{  marginBottom:'-32px' }}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span > Chimney Repair   </span>
                    <span><span style={{ color: '#DB4444' }}>$260</span></span>
                    <span style={{
                        marginLeft: '15px',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'line-through'
                    }}>
                        $<span>360</span>
                    </span><br></br>
                    <img src={img5} alt="stars" />
                </div>
            </div>
        </div>
    );
};

export default ServiceRep;
