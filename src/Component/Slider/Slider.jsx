import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

import image1 from '../../assets/image/no1.jpg';
import image2 from '../../assets/image/no2.jpg';
import image3 from '../../assets/image/no3.jpg';

const Slider = () => {
    return (
         <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]} // Removed Navigation module
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
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full">
                        <img className="w-full h-full object-cover" src={image2} alt="Slide 2" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Positioned text and button on the left side */}
                        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-28 xl:p-52">
                            <div className="text-left space-y-4 md:space-y-6">
                                <h1 className="text-[#ff6666] text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg leading-tight">
                                    Your Donation, Their Survival Be a Hero Today
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full">
                        <img className="w-full h-full object-cover" src={image3} alt="Slide 3" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Positioned text and button on the left side */}
                        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-28 xl:p-52">
                            <div className="text-left space-y-4 md:space-y-6">
                                <h1 className="text-[#ff6666] text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg leading-tight">
                                    Together, We Save Lives Join Our Mission
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
