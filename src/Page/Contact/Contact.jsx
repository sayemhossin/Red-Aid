import React from 'react';
import image1 from '../../assets/image/formbanner.jpg';
import image2 from '../../assets/image/map.png';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="w-full h-[300px] object-cover"
                    src={image1}
                    alt="services"
                />
                {/* Dark overlay behind the text */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Text layer */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row shadow-2xl justify-center  gap-10 p-3 md:p-10 mt-20 mb-20'>
                    <form className='flex-1'>

                        {/* Additional Details Fields */}
                        <div className='p-3 md:p-10 space-y-7'>
                            <label className="text-2xl font-semibold mb-4">Get In Touch</label>

                            <div className='flex gap-5 flex-col md:flex-row'>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border border-black rounded-none p-4"
                                    required />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full border border-black rounded-none p-4" required
                                />
                            </div>
                            <div className='flex gap-5 flex-col md:flex-row'>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border border-black rounded-none p-4" required
                                />

                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full border border-black rounded-none p-4" required
                                />
                            </div>

                            <textarea
                                placeholder="Case Description..."
                                className="w-full border border-black rounded-none p-4" required
                                rows="4"
                            ></textarea>

                            {/* Submit Button */}
                            <button type='submit' className="bg-red-700 text-white w-full px-12 py-3 text-xl relative overflow-hidden group">
                                <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                                <span className="flex items-center justify-between gap-2 relative z-20">Submit Request <FaArrowRight /></span>
                            </button>
                        </div>

                    </form >
                    <div className='bg-red-600 flex-1 p-10 space-y-4 text-white'>
                        <h3 className='text-xl'>Blood Excellence!</h3>
                        <h1 className='text-4xl font-bold'>Expanded Blood Donate Services Here</h1>
                        <p>Expanded Blood Donate Services Here" offers enhanced blood donation opportunities, making it easier for individuals to contribute. Our streamlined process ensures a safe and efficient experience for all donors.
                            <h1 className="flex gap-1 items-center mt-4  md:text-xl"><FaPhone /> Call Now: 012 345 6789</h1>
                            <h2 className="flex gap-1 items-center mt-4 md:text-xl " >
                                <IoLocationSharp /> Bogura - Bangladesh</h2>
                            <h2 className="flex gap-1 items-center mt-4  md:text-xl " >
                                <IoIosMail className='md:text-2xl' /> Donate@gmail.com
                            </h2>
                            <h2 className="flex gap-1 items-center mt-4  md:text-xl " >
                                <IoTimeOutline className='md:text-2xl' /> Mon - Fri: 8:00 am - 7:00 pm
                            </h2>
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 lg:gap-40 text-center p-2 md:mx-5 mx-0 lg:mx-0  md:p-0 mb-20'>
                    <button type='submit' className="bg-red-700 text-white w-full px-12 py-3 text-xl relative overflow-hidden group">
                        <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                        <span className="flex items-center justify-center gap-2 relative z-20">Facebook </span>
                    </button>
                    <button type='submit' className="bg-red-700 text-white w-full px-12 py-3 text-xl relative overflow-hidden group">
                        <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                        <span className="flex items-center justify-center gap-2 relative z-20">Twitter </span>
                    </button>
                    <button type='submit' className="bg-red-700 text-white w-full px-12 py-3 text-xl relative overflow-hidden group">
                        <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                        <span className="flex items-center justify-center gap-2 relative z-20">Instagram </span>
                    </button>
                    <button type='submit' className="bg-red-700 text-white w-full px-12 py-3 text-xl relative overflow-hidden group">
                        <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                        <span className="flex items-center justify-center gap-2 relative z-20">Pinterest </span>
                    </button>
                </div>
            </div>

            <div className="relative">
                <img
                    className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover"
                    src={image2}
                    alt="services"
                />         
            </div>








        </div>
    );
};

export default Contact;