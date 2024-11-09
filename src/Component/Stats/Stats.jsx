import React from 'react';
import image2 from '../../assets/image/statsbg.jpg';
import { FaAward, FaStethoscope } from 'react-icons/fa6';
import { IoTrophyOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';



const Stats = () => {
    return (
        <div>
            <section style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }} className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                {/* Dark overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with opacity
                    zIndex: 1,
                }}></div>
                
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 relative z-10">
                    <div className='uppercase text-center text-3xl space-y-4 font-extrabold text-white'>
                        <p className='flex justify-center'><FaAward className='text-5xl text-red-600'/></p>
                        <p className='text-5xl'>1</p>
                        <h2>Year Experience</h2>
                    </div>
                    <div className='uppercase text-center text-3xl space-y-4 font-extrabold text-white'>
                        <p className='flex justify-center'><FaStethoscope className='text-5xl text-red-600'/></p>
                        <p className='text-5xl'>20</p>
                        <h2>happy donors</h2>
                    </div>
                    <div className='uppercase text-center text-3xl space-y-4 font-extrabold text-white'>
                        <p className='flex justify-center'><IoTrophyOutline className='text-5xl text-red-600'/></p>
                        <p className='text-5xl'>0</p>
                        <h2>total awards</h2>
                    </div>
                    <div className='uppercase text-center text-3xl space-y-4 font-extrabold text-white'>
                        <p className='flex justify-center'><FaUserFriends className='text-5xl text-red-600'/></p>
                        <p className='text-5xl'>10</p>
                        <h2>happy recipient</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;