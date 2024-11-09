import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import image1 from '../../assets/image/no1.jpg'
import image2 from '../../assets/image/no2.jpg'
import image3 from '../../assets/image/no3.jpg'
const Slider = () => {
    return (
        <div>
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
                className='mySwiper'
            >
                <SwiperSlide>
                    <img src={image1} alt="image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="image" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;