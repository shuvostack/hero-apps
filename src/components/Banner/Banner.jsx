import React from 'react';
import playStore from '../../assets/playStore-icon.png'
import appStore from '../../assets/appStore-icon.png'
import hero from '../../assets/hero.png'
import TrendingApp from '../TrendingApp/TrendingApp';

const Banner = ({trendingAppsData}) => {
    return (
        <div className='pt-16 '>
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

            <div className='text-center text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <div className='pt-20'>
                    <h1 className='text-3xl font-bold'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-20 pt-8 pb-20'>
                    <div className='flex flex-col gap-4 text-center items-center'>
                        <p>Total Downloads</p>
                        <h1 className='text-5xl font-bold'>29.9M</h1>
                        <p>21% more than last month</p>
                    </div>

                    <div className='flex flex-col gap-4 text-center items-center'>
                        <p>Total Reviews</p>
                        <h1 className='text-5xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>

                    <div className='flex flex-col gap-4 text-center items-center'>
                        <p>Active Apps</p>
                        <h1 className='text-5xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>

            <section>
                <div className='max-w-7xl mx-auto py-10'>
                    <div className='text-center p-10'>
                        <h1 className='text-3xl font-bold text-[#001931]'>Trending Apps</h1>
                        <p className='text-[#627382] mt-5'>Explore All Trending Apps on the Market developed by us</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {
                            trendingAppsData.map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)
                        }
                    </div>
                </div>
            </section>

            <div className='flex items-center justify-center pb-8'>
                <a href="/apps" className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</a>
            </div>
        </div>
    );
};

export default Banner;