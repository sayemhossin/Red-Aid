import React from 'react';
import image1 from '../../assets/image/campaigns1.jpg';
import image2 from '../../assets/image/cappaigns2.jpg';
import image3 from '../../assets/image/campaigns3.jpg';
import { FaCalendar, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineAccessTime } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Campaigns = () => {
    return (
        <div className='mt-20'>
            <div className="text-center mt-8">
                <h3 className="text-red-600 text-xl">Donate Now</h3>
                <h1 className="text-5xl font-bold mt-3">Popular Campaigns</h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper bg-gray-100 mt-10">
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-10 w-full shadow-2xl p-6 mx-auto">
                        <div className="flex-1">
                            <img className="w-full" src={image1} alt="Campaign Image" />
                        </div>
                        <div className="flex-1 space-y-3 md:space-y-2 lg:space-y-5 my-auto">
                            <h2 className="flex items-center gap-1"><FaCalendar className="text-red-600" /> 14 March, 2022</h2>
                            <h1 className="text-2xl font-bold">Free Group Checking</h1>
                            <p>Take advantage of our Free Group Checking campaign! Open an account with zero fees, easy access, and excellent features for group members. Enjoy hassle-free banking and save more today!</p>
                            <div className="flex flex-col md:flex-col lg:flex-row justify-between">
                                <h3 className="flex items-center gap-1"> <MdOutlineAccessTime className="text-red-600" />10.00 - 4.00</h3>
                                <h3 className="flex items-center gap-1"><FaLocationDot className="text-red-600" /> Satmatha - Bogura</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-10 w-full shadow-2xl p-6 mx-auto">
                        <div className="flex-1">
                            <img className="w-full" src={image2} alt="Campaign Image" />
                        </div>
                        <div className="flex-1 space-y-3 md:space-y-2 lg:space-y-5 my-auto">
                            <h2 className="flex items-center gap-1"><FaCalendar className="text-red-600" /> 20 March, 2022</h2>
                            <h1 className="text-2xl font-bold">Free Group Checking</h1>
                            <p>Take advantage of our Free Group Checking campaign! Open an account with zero fees, easy access, and excellent features for group members. Enjoy hassle-free banking and save more today!</p>
                            <div className="flex flex-col md:flex-col lg:flex-row justify-between">
                                <h3 className="flex items-center gap-1"> <MdOutlineAccessTime className="text-red-600" />10.00 - 4.00</h3>
                                <h3 className="flex items-center gap-1"><FaLocationDot className="text-red-600" />Dinajpur Sadar - Dinajpur</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-10 w-full shadow-2xl p-6 mx-auto">
                        <div className="flex-1">
                            <img className="w-full" src={image3} alt="Campaign Image" />
                        </div>
                        <div className="flex-1 space-y-3 md:space-y-2 lg:space-y-5 my-auto">
                            <h2 className="flex items-center gap-1"><FaCalendar className="text-red-600" /> 16 March, 2022</h2>
                            <h1 className="text-2xl font-bold">Blood Donation Camp</h1>
                            <p>The Blood Donation Camp offers a chance to save lives by donating blood. Join us in supporting a vital cause and help those in need. Every drop counts towards a brighter tomorrow.</p>
                            <div className="flex flex-col md:flex-col lg:flex-row justify-between">
                                <h3 className="flex items-center gap-1"> <MdOutlineAccessTime className="text-red-600" />10.00 - 4.00</h3>
                                <h3 className="flex items-center gap-1"><FaLocationDot className="text-red-600" /> Gazipur - Dhaka</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Campaigns;
