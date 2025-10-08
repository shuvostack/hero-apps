import React from 'react';
import logo from '../../assets/logo.png'
import xIcon from '../../assets/X.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto p-14'>
            <div className='flex justify-between'>
                <div>
                    <a className="btn btn-ghost text-lg font-bold text-white"><img src={logo} alt="logo" className="w-6" />HERO.IO</a>
                </div>
                <div>
                    <p className='text-white'>Social Links</p>
                    <div className='flex gap-3 mt-3'>
                        <a href=""><img src={xIcon} alt="X" /></a>
                        <a href=""><img src={instagramIcon} alt="Instagram" /></a>
                        <a href=""><img src={facebookIcon} alt="Facebook" /></a>
                    </div>
                </div>
            </div>

            <div className='border-b-1 border-[#264356] my-5'></div>

            <div>
                <p>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;