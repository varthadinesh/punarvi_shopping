import React from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../navbar';
import Menu from '../menu';
import Filterdisplaynav from '../filterdisplaynav';
import Filter from './filter';
import Girlimg from "../../images/girl.avif";
import Boyimg from "../../images/boy.webp";

const Kidsallproducts = () => {
    return (
        <>
             <MyNavbar/>
            <h3 className='ps-lg-5 ps-2 text-center' style={{textShadow:"2px 3px 2px gray"}}>Kids ware</h3>
            <div className='d-flex flex-wrap justify-content-center text-center'>
                <div className='m-4'>
                <Link to="/girl" className='text-dark text-decoration-none'>
                <img src={Girlimg} width="130px" height="130px" alt='high end couture'className=' rounded-circle'/>
                <p>Girl</p>
                </Link>
                </div>
                <div className='m-4'>
                <Link to="/boy" className='text-dark text-decoration-none'>
                <img src={Boyimg} width="130px" height="130px" alt='sarees' className=' rounded-circle'/>
                <p>Boy</p>
                </Link>
                </div>
            </div>
            <nav className="p-2 ps-lg-5 pe-lg-5">
                <Link to="/" className="text-decoration-none text-dark">
                    <i className="bi bi-house-fill"></i>
                </Link>
                &nbsp; / Kids
            </nav>
            <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
            <div className="col-lg-2 col-xs-12 col-md-12">
                <Menu/>
            </div>

            <div className="col-xs-12 col-md-12 col-lg-10 ps-3">
                <Filterdisplaynav/>
                <Filter/>
            </div>
            </div>
        </>
    );
};

export default Kidsallproducts;