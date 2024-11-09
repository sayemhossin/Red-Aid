import React from 'react';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TextBanner = () => {
    return (
        <div>
            <div className='mt-10 bg-red-600 text-white md:p-10 p-10 lg:p-20  space-y-5' >
                <h1 className='text-2xl md:text-6xl'>Let's change the world, Join us now!</h1>
                <p className='pb-6'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure reat pleasure.</p>
                <Link to={'/contact'}>
                <button className="bg-white text-black px-12 py-3 text-xl relative overflow-hidden group">
                    <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                    <span className="flex items-center gap-2 relative z-20 text-black transition-colors duration-300 group-hover:text-white">
                        Contact Now <FaArrowRightToBracket />
                    </span>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default TextBanner;