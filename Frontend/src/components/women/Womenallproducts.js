import React from 'react';
import { Link } from 'react-router-dom';

import MyNavbar from '../navbar';
import Menu from '../menu';
import Filterdisplaynav from '../filterdisplaynav';
import Filter from './filter';
import Highendcoutureimg from '../../images/highendcouture.jpg';
import Sareesimg from '../../images/sarees.webp';
import Lehengaimg from '../../images/lehanga.jpeg';
import Dressesimg from '../../images/dresses.webp';
import Twinningoutfitsimg from '../../images/twinningoutfits.jpg';


const Womenallproducts = () => {
    return (
        <>
            <MyNavbar/>
            <h3 className='ps-lg-5 ps-2 text-center' style={{textShadow:"2px 3px 2px gray"}}>Women wares</h3>
            <div className='d-flex flex-wrap justify-content-center text-center'>
                <div className='m-4'>
                <Link to="/highendcouture" className='text-dark text-decoration-none'>
                <img src={Highendcoutureimg} width="130px" height="130px" alt='high end couture'className=' rounded-circle'/>
                <p>High end Couture</p>
                </Link>
                </div>
                <div className='m-4'>
                <Link to="/sarees" className='text-dark text-decoration-none'>
                <img src={Sareesimg} width="130px" height="130px" alt='sarees' className=' rounded-circle'/>
                <p>Sarees</p>
                </Link>
                </div>
                <div className='m-4'>
                <Link to="/lehanga" className='text-dark text-decoration-none'>
                <img src={Lehengaimg} width="130px" height="130px" alt='Lehangas' className=' rounded-circle'/>
                <p>Lehangas</p>
                </Link>
                </div>
                <div className='m-4'>
                <Link to="/dresses" className='text-dark text-decoration-none'>
                <img src={Dressesimg} width="130px" height="130px" alt='dresses' className='rounded-circle'/>
                <p>Dresses</p>
                </Link>
                </div>
                <div className='m-4'>
                <Link to="/twinningoutfits" className='text-dark text-decoration-none'>
                <img src={Twinningoutfitsimg} width="130px" height="130px" alt='twinning outfits' className='rounded-circle'/>
                <p>Twinning Outfits</p>
                </Link>
                </div>
            </div>
            <nav className="p-2 ps-lg-5 pe-lg-5">
                <Link to="/" className="text-decoration-none text-dark">
                    <i className="bi bi-house-fill"></i>
                </Link>
                &nbsp; / Women
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

export default Womenallproducts;