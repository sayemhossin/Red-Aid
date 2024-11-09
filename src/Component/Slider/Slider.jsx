import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image1 from '../../assets/image/no1.jpg';
import image2 from '../../assets/image/no2.jpg';
import image3 from '../../assets/image/no3.jpg';

const Slider = () => {
    return (
         <div>
            <style>
                {`
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: #b22222; /* Deep red color */
                    }

                    .swiper-button-next:hover,
                    .swiper-button-prev:hover {
                        color: #8b0000; /* Darker red on hover */
                    }
                `}
            </style>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:h-[80vh] h-[60vh]"
            >
                <SwiperSlide>
                    <div className="relative h-full">
                        <img className="w-full h-full object-cover" src={image1} alt="Slide 1" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Positioned text and button on the left side */}
                        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-28 xl:p-52">
                            <div className="text-left space-y-4 md:space-y-6">
                                <h1 className="text-[#ff6666] text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg leading-tight">
                                    Save a Life Today Donate Blood, Give Hope
                                </h1>
                                <button className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                                    Donation Form
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full">
                        <img className="w-full h-full object-cover" src={image2} alt="Slide 1" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Positioned text and button on the left side */}
                        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-28 xl:p-52">
                            <div className="text-left space-y-4 md:space-y-6">
                                <h1 className="text-[#ff6666] text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg leading-tight">
                                    Your Donation, Their Survival Be a Hero Today
                                </h1>
                                <button className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                                    Donation Form
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full">
                        <img className="w-full h-full object-cover" src={image3} alt="Slide 1" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Positioned text and button on the left side */}
                        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-28 xl:p-52">
                            <div className="text-left space-y-4 md:space-y-6">
                                <h1 className="text-[#ff6666] text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg leading-tight">
                                    Together, We Save Lives Join Our Mission
                                </h1>
                                <button className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                                    Donation Form
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
