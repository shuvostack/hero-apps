import React from 'react';
import playStore from '../../assets/playStore-icon.png'
import appStore from '../../assets/appStore-icon.png'
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='pt-16 pl-16 pr-16'>
            <div className='text-center'>
                <div><h1 className='text-5xl font-bold text-[#0d3045]'>We Build</h1></div>

                <div className='my-4'><h1 className='text-5xl font-bold'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> <span className='text-[#0d3045]'>Apps</span></h1></div>

                <div><p className='text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p></div>

                <div className='flex gap-4 justify-center items-center my-6'>
                    <a href='https://play.google.com/store/apps' className='btn shadow-md'><img className='w-6' src={playStore} alt="Play store" /> Google Play</a>
                    <a href='https://www.apple.com/app-store/' className='btn shadow-md'><img className='w-6' src={appStore} alt="" /> App Store</a>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <img src={hero} alt="hero image" className='max-w-80 md:max-w-150' />
            </div>
        </div>
    );
};

export default Banner;