import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {

    const trendingAppsData = useLoaderData();

    return (
        <div className='bg-[#f5f5f5]'>
            <Banner trendingAppsData={trendingAppsData}></Banner>
        </div>
    );
};

export default Home;