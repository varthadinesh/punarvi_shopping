import React from 'react';
import MyNavbar from '../navbar';
import Menu from '../menu';
import { Link } from 'react-router-dom';
import Homebannerimg from '../homebannerimg';
import Filterdisplaynav from '../filterdisplaynav';

const Bookscollection = () => {
    return (
        <>
    <MyNavbar/>
    <div>
    <Homebannerimg/>
    </div>
    <div className="d-lg-flex justify-content-around mt-5 p-lg-5 p-2">
      <div className="col-lg-3 col-xs-12 col-md-12">
      <nav className="pb-3">
          <Link to="/" className="text-decoration-none text-dark">
            <i className="bi bi-house-fill"></i>
          </Link>
           &nbsp; / Books /&nbsp; Books collection
        </nav>
        <Menu/>
      </div>

      <div className="col-xs-12 col-md-12 col-lg-9 ps-3">
        <Filterdisplaynav/>
      </div>
    </div>
    </>
    );
};

export default Bookscollection;