import React from 'react';
import errorImage from '../../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <img src={errorImage} alt="error image" className='w-90'/>
            </div>
            <div className='text-center'>
                <h1 className='text-4xl text-[#001931] font-bold mt-6'>Oops, page not found!</h1>
                <p className='text-[#627382] my-3'>The page you are looking for is not available.</p>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </div>
        </div>
    );
};

export default ErrorPage;