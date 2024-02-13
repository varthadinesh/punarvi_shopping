import React from 'react';
import visa from "../images/visa.webp"
import mastercard from "../images/mastercard.png"
import paypal from "../images/paypal.webp"
import discover from "../images/discover.jpg"
import {Link} from 'react-router-dom';

const Footer = () => {

  return (
    <>
    <div className='p-1' style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,75,172,1) 35%, rgba(67,90,181,1) 42%, rgba(0,212,255,1) 100%)"}}></div>
    <footer className='footer1'>
 <div className='d-md-flex flex-wrap justify-content-around  p-3'>
 <div className="col-md-3">
          <h5 className='mb-4'>My Account</h5>
         <div className="d-md-flex">
         <div className='me-3'>
            <span><Link to="/plans" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> My Account</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/register" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> Orders</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/patient" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> Recently Viewed Products</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/doctor" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> Shopping Cart</Link></span> <hr style={{ margin: '5px 0' }}/>
          </div>
         </div>
        </div>
        <div className="col-md-3">
          <h5 className='mb-4'>Useful Links</h5>
         <div className="d-md-flex">
         <div className='me-3'>
            <span><Link to="/plans" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> About Us</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/register" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> Contact Us</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/patient" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> FAQ's</Link></span> <hr style={{ margin: '5px 0' }}/>
            <span><Link to="/doctor" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i> Apply For Seller Account</Link></span> <hr style={{ margin: '5px 0' }}/>
          </div>
         </div>
        </div>
       
        <div className="col-md-2">
          <h5 className='mb-4'>Follow Us</h5>
           <div>
            <Link to='https://www.facebook.com/' className=''><span style={{cursor:"pointer"}}><i className="bi bi-facebook fs-3 ms-2 me-2"></i></span></Link>
            <Link to='https://www.instagram.com/accounts/login/' className=''><span style={{cursor:"pointer"}}><i className="bi bi-instagram fs-3 ms-2 me-2"></i></span></Link>
            <Link to='https://www.linkedin.com/login' className=''><span style={{cursor:"pointer"}}><i className="bi bi-linkedin fs-3 ms-2 me-2"></i></span></Link>
           </div>
        </div>
        <div className="col-md-2">
          <h5 className='mb-4'>Payment Methods</h5>
           <div className='d-flex flex-wrap'>
            <img src={visa} alt='visa card' className='paymentcards'/>
            <img src={mastercard} alt='visa card' className='paymentcards'/>
            <img src={paypal} alt='visa card' className='paymentcards'/>
            <img src={discover} alt='visa card' className='paymentcards'/>
           </div>
        </div>

       </div>
    <div className='p-1 ps-2 text-white' style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,75,172,1) 35%, rgba(67,90,181,1) 42%, rgba(0,212,255,1) 100%)"}}>

      <p>Powered bu punarvi</p>
      <p>Copyright 2024 Punarvi. All rights reserved.</p>
    </div>
      
      </footer>

      </>
  );
};
export default Footer;