import React from 'react';

import image1 from '../../assets/image/help1.png';
import image2 from '../../assets/image/help2.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row mt-16 gap-4 mb-20'>
            <div className='flex-1 relative'>
                <img src={image1} alt="" />
                <div className='absolute top-36  left-1/2'>
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className='flex-1 my-auto space-y-3 md:space-y-5 lg:space-y-7'>
                <h3 className='text-red-500 text-2xl md:text-3xl'>Help The People in Need</h3>
                <h1 className='text-4xl md:text-5xl font-bold'>Welcome to Blood Donors Organization</h1>
                <p>Welcome to the Blood Donors Organization, where your generous contributions help save lives. Join us in making a difference by donating blood and providing hope to those in need.</p>
                <div className='flex justify-between'>
                    <div className='text-[18px] space-y-2'>
                        <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Good Service</h4>
                        <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' />Help People</h4>
                        <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Hugine Tools</h4>
                    </div>
                    <div className='text-[18px] space-y-2'>
                        <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> 24h Service</h4>
                        <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' />Health Check</h4>
                        <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Blood Bank</h4>
                    </div>
                </div>
                <div>
                    <Link to={'/form'}>
                        <button className="bg-red-700 text-white px-12 py-3 text-xl relative overflow-hidden group">
                            <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                            <span className="flex items-center gap-2 relative z-20">Donate <FaArrowRightToBracket /></span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;