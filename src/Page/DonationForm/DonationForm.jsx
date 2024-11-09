import React from 'react';
import image1 from '../../assets/image/formbanner.jpg';
const DonationForm = () => {
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
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Donation Form</h1>
                </div>
            </div>
            <h1 className='text-4xl md:text-5xl font-extrabold mt-20 mb-10 text-center'>Make a Donation</h1>
            <form className='mb-20 max-w-4xl mx-auto'>
                <div className="bg-base-200  border border-black md:p-10 p-6">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">Your Blood Donation</h1>
                    <select className="select text-gray-700 font-bold w-full border border-black rounded-none p-2">
                        <option disabled selected>Select Your Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
                {/* Additional Details Fields */}
                <div className='p-10 space-y-7 border border-black mt-10 bg-base-200'>
                    <label className="text-2xl font-semibold mb-4">Details</label>

                    <div className='flex gap-5 flex-col md:flex-row'>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full border border-black rounded-none p-4"
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full border border-black rounded-none p-4"
                        />
                    </div>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-black rounded-none p-4"
                        />

                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full border border-black rounded-none p-4"
                        />
                    </div>

                    <textarea
                        placeholder="Case Description..."
                        className="w-full border border-black rounded-none p-4"
                        rows="4"
                    ></textarea>

                    {/* Submit Button */}
                    <button className="bg-red-700 text-white px-12 py-3 text-xl relative overflow-hidden group">
                        <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                        <span className="flex items-center gap-2 relative z-20">Donate Now</span>
                    </button>
                </div>

            </form >
        </div >
    );
};

export default DonationForm;