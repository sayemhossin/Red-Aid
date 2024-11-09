import React from 'react';
import image1 from '../../assets/image/callbg.jpg';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';

const Call = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${image1})` }}
            className="relative p-3 md:p-10 bg-cover bg-center mt-10 md:mt-28"
        >
            {/* Dark overlay with Tailwind classes */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 p-5 md:p-20 text-white text-center border-4 border-red-600 space-y-5">
                <h2 className="uppercase md:text-xl font-bold">Start donating</h2>
                <h1 className="flex items-center justify-center md:text-4xl  lg:text-5xl transition-colors duration-300 ease-in-out hover:text-red-600 font-extrabold"><FaPhone/> Call Now: 012 345 6789</h1>
                <div className="md:flex justify-evenly lg:px-28">
                    <h2 
                        className="flex items-center justify-center md:text-xl transition-colors duration-300 ease-in-out hover:text-red-600"
                    >
                        <IoLocationSharp /> Bogura - Bangladesh
                    </h2>
                    <h2 
                        className="flex items-center justify-center md:text-xl transition-colors duration-300 ease-in-out hover:text-red-600"
                    >
                        <IoIosMail className='md:text-2xl' /> Donate@gmail.com
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Call;
