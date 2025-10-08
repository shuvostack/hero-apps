import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <div className='shadow-sm'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='bg-[#001a31]'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;