import React from 'react';

const Footer = () => {

  return (
    <footer className='footer1'>
 <div className='d-md-flex flex-wrap justify-content-around bg-dark text-white p-3'>
 <div className="col-md-3">
          <h5 className='mb-4'>My Account</h5>
         <div className="d-md-flex">
         <div className='me-3'>
            <span><a to="/plans" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> My Account</a></span> <hr style={{ margin: '5px 0' }}/>
            <span><a to="/register" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Orders</a></span> <hr style={{ margin: '5px 0' }}/>
            <span><a to="/patient" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Recently Viewed Products</a></span> <hr style={{ margin: '5px 0' }}/>
            <span><a to="/doctor" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Shopping Cart</a></span> <hr style={{ margin: '5px 0' }}/>
          </div>
         </div>
        </div>
        <div className="col-md-3">
          <h5 className='mb-4'>Useful Links</h5>
         <div className="d-md-flex">
         <div className='me-3'>
            <span><a to="/plans" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> About Us</a></span> <hr style={{ margin: '5px 0' }}/>
            <span><a to="/register" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Contact Us</a></span> <hr style={{ margin: '5px 0' }}/>
            <span><a to="/patient" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> FAQ's</a></span> <hr style={{ margin: '5px 0' }}/>
            <span><a to="/doctor" className='text-decoration-none text-light'><i className="bi bi-chevron-double-right"></i> Apply For Seller Account</a></span> <hr style={{ margin: '5px 0' }}/>
          </div>
         </div>
        </div>
       
        <div className="col-md-2">
          <h5 className='mb-4'>Follow Us</h5>
           <div>
            <a href='https://www.facebook.com/' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-facebook fs-3 ms-2 me-2"></i></span></a>
            <a href='https://www.instagram.com/accounts/login/' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-instagram fs-3 ms-2 me-2"></i></span></a>
            <a href='https://www.linkedin.com/login' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-linkedin fs-3 ms-2 me-2"></i></span></a>
           </div>
        </div>
        <div className="col-md-2">
          <h5 className='mb-4'>Payment Methods</h5>
           <div>
            <a href='https://www.facebook.com/' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-facebook fs-3 ms-2 me-2"></i></span></a>
            <a href='https://www.instagram.com/accounts/login/' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-instagram fs-3 ms-2 me-2"></i></span></a>
            <a href='https://www.linkedin.com/login' className='text-light'><span style={{cursor:"pointer"}}><i className="bi bi-linkedin fs-3 ms-2 me-2"></i></span></a>
           </div>
        </div>

       </div>
      <div className="page-footer font-small bg-success text-light p-2">
        <div className="footer-copyright text-center">Copyright © 2023
          <span className='text-warning'> Punarvi </span>All Rights Reserved. 
          <span className='text-warning'> Terms </span> | <span className='text-warning'> Privacy Policy</span>
        </div>
      </div>
      </footer>
  );
};
export default Footer;