import React from 'react';
import image1 from '../../assets/image/r1.jpg';
import image2 from '../../assets/image/r2.jpg';
import image3 from '../../assets/image/r3.jpg';
import { MdOutlineBloodtype } from 'react-icons/md';
import { BiDonateBlood } from 'react-icons/bi';
import { GiBloodyStash } from 'react-icons/gi';

const Card = () => {
    return (
        <div className="mt-20 flex gap-9 md:flex-row flex-col">

            {/* First Card */}
            <div className="w-full max-w-xl mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 group overflow-hidden relative">
                {/* Image with zoom effect on hover */}
                <img
                    src={image1}
                    alt=""
                    className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110 w-full rounded-t-md h-72 dark:bg-gray-500"
                />

                {/* Icon with background change and smooth transition */}
                <div className="absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:mb-6 sm:mb-4 mb-3 p-3 bg-black rounded-full group-hover:bg-red-700 transition-colors duration-300 ease-in-out z-10">
                    <MdOutlineBloodtype className="text-white text-7xl" />
                </div>

                {/* Card content */}
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl mt-9 font-semibold tracking-wide">Become a Donor</h2>
                        <p className="dark:text-gray-800">
                            Join the life-saving movement by donating blood. Your donation helps those in need, offering hope and support to patients battling illness. Be a hero today and make a lasting difference.
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Card */}
            <div className="w-full max-w-xl mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 group overflow-hidden relative">
                {/* Image with zoom effect on hover */}
                <img
                    src={image2}
                    alt=""
                    className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110 w-full rounded-t-md h-72 dark:bg-gray-500"
                />

                {/* Icon with background change and smooth transition */}
                <div className="absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:mb-6 sm:mb-4 mb-3 p-3 bg-black rounded-full group-hover:bg-red-700 transition-colors duration-300 ease-in-out z-10">
                    <BiDonateBlood className="text-white text-7xl" />
                </div>

                {/* Card content */}
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl mt-9 font-semibold tracking-wide">Why give blood?</h2>
                        <p className="dark:text-gray-800">
                            Donating blood saves lives. Every donation helps patients in emergencies, surgeries, and cancer treatments. By giving blood, you make a direct impact on the health and survival of others.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-xl mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 group overflow-hidden relative">
                {/* Image with zoom effect on hover */}
                <img
                    src={image3}
                    alt=""
                    className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110 w-full rounded-t-md h-72 dark:bg-gray-500"
                />

                {/* Icon with background change and smooth transition */}
                <div className="absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:mb-6 sm:mb-4 mb-3 p-3 bg-black rounded-full group-hover:bg-red-700 transition-colors duration-300 ease-in-out z-10">
                    <GiBloodyStash className="text-white text-7xl" />
                </div>

                {/* Card content */}
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:mt-9 mt-16 font-semibold tracking-wide">How Donations Help?</h2>
                        <p className="dark:text-gray-800">
                        Blood donation plays a crucial role in saving lives. It supports surgeries, trauma recovery, cancer treatments, and helps patients with chronic conditions. Donating blood provides life-saving resources to those in need.
                        </p>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Card;
