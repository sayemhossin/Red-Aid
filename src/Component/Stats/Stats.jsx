import React from 'react';
import image1 from '../../assets/image/statsbg.jpg';
import { FaAward, FaStethoscope } from 'react-icons/fa6';
import { IoTrophyOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';

const Stats = () => {
    return (
        <div>
            <section
                style={{ backgroundImage: `url(${image1})` }}
                className="relative p-6 my-6 bg-cover bg-center bg-fixed dark:bg-gray-100 dark:text-gray-800 lg:py-20"
            >
                {/* Dark overlay with opacity control using Tailwind */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>

                {/* Stats Content */}
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 relative z-10">
                    <div className="uppercase text-center text-2xl space-y-4 font-extrabold text-white">
                        <p className="flex justify-center">
                            <FaAward className="text-5xl text-red-600" />
                        </p>
                        <p className="text-5xl">1</p>
                        <h2>Year Experience</h2>
                    </div>
                    <div className="uppercase text-center text-2xl space-y-4 font-extrabold text-white">
                        <p className="flex justify-center">
                            <FaStethoscope className="text-5xl text-red-600" />
                        </p>
                        <p className="text-5xl">20</p>
                        <h2>Happy Donors</h2>
                    </div>
                    <div className="uppercase text-center text-2xl space-y-4 font-extrabold text-white">
                        <p className="flex justify-center">
                            <IoTrophyOutline className="text-5xl text-red-600" />
                        </p>
                        <p className="text-5xl">0</p>
                        <h2>Total Awards</h2>
                    </div>
                    <div className="uppercase text-center text-2xl space-y-4 font-extrabold text-white">
                        <p className="flex justify-center">
                            <FaUserFriends className="text-5xl text-red-600" />
                        </p>
                        <p className="text-5xl">10</p>
                        <h2>Happy Recipients</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;
