import React from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Ticket = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:relative -top-16 z-10 lg:mt-0 md:mt-8 mt-8 '>
            <div className="flex-1 flex items-center justify-between bg-red-600 text-white p-6
             md:p-14 transition-all duration-300">
                <div>
                    <h1 className="md:text-3xl text-xl mb-3 font-bold">Give Today</h1>
                    <p>
                        Make a difference today by donating. Your contribution helps save  lives and bring hope to those in need.
                    </p>
                </div>
                <div>
                    <Link to={'/form'}>
                        <FaArrowRightFromBracket className="text-4xl transition-colors duration-300 hover:text-black" />
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-between bg-black text-white p-6 md:p-14 transition-all duration-300">
                <div>
                    <h1 className="md:text-3xl text-xl mb-3 font-bold">Donate Now</h1>
                    <p>
                    Donate now to save lives and offer hope to those in need. Your contribution makes a real, lasting difference.
                    </p>
                </div>
                <div>
                    <Link to={'/form'}>
                        <FaArrowRightFromBracket className="text-4xl transition-colors duration-300 hover:text-red-500" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Ticket;