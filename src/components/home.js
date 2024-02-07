import React from 'react';
import MyNavbar from './navbar';
import Footer from './footer';
import Curosel from './curosal';
import Homebannerimg from './homebannerimg';

const Home = () => {
    return (
        <>
                <MyNavbar/>
                <Homebannerimg/>
                <Curosel/>
                <Footer/>
        </>
    );
};

export default Home;