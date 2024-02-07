import React from 'react';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
     <div className='d-md-flex justify-content-between text-center bg-dark text-white '>
                <div className='pt-2'>
                    <span className='ms-lg-5 me-lg-3 '>How to buy</span>
                    <span className='ms-lg-4 me-lg-4 ms-4'>How to sell</span>
                </div>
                <div  className='mt-2'>
                    <p>FREE SHIPPING On All Orders.</p>
                </div>
                <div  className='mt-2'>
                    <p className='ms-5 me-5'>REGISTER/LOGIN</p>
                </div>
            </div>
      <nav className="navbar navbar-expand-md sticky-top bg-light  d-flex">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto ps-2">
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                WOMEN
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/highendcouture">High end Couture</Link>
                <Link className="dropdown-item" to="/sarees">Sarees</Link>
                <Link className="dropdown-item" to="/lehanga">Lehenga</Link>
                <Link className="dropdown-item" to="/dresses">Dresses</Link>
                <Link className="dropdown-item" to="/twinningoutfits">Twinning Outfits</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                KIDS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/girl">Girl</Link>
                <Link className="dropdown-item" to="/boy">Boy</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                JEWELERY
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/jewelrycollection">Collection</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                BOOKS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/bookscollection">Book Collections</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className='ms-2 d-flex'>
            <input type="text" className='w-50 mt-2 form-control' placeholder='Search here...'/>
            <i className="bi bi-heart-fill fs-4 m-2">(0)</i>
            <i className="bi bi-cart3 fs-4 m-2">(0)</i>
        </div>
      </nav>

    </>
  );
}

export default MyNavbar;
