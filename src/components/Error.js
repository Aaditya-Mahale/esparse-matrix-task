import React from 'react'
import './Error.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
   <>
<div className='t1' >
    404 Not Found
</div>
<div className='t2' >
    <h5>Your visited page not found. You may go home page.</h5>
</div>
<div className='buttonh'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button className='button-style' variant="danger">
                    Back to home page
                </Button>
            </Link>
        </div>
        
     


   </>
  )
}
