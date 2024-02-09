import React from 'react';
import MyNavbar from '../navbar';
import Menu from '../menu';
import Filterdisplaynav from '../filterdisplaynav';
import { Link } from 'react-router-dom';


const Jewelryallcollection = () => {
    return (
        <>
           <MyNavbar/>

<nav className="p-2 ps-lg-5 pe-lg-5">
            <Link to="/" className="text-decoration-none text-dark">
                <i className="bi bi-house-fill"></i>
            </Link>
            &nbsp; / Jewelry
</nav>
        <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-2 col-xs-12 col-md-12">
            <Menu/>
        </div>

        <div className="col-xs-12 col-md-12 col-lg-10 ps-3">
            <Filterdisplaynav/>
        </div>
        </div>  
        </>
    );
};

export default Jewelryallcollection;