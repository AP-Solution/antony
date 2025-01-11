import React from 'react';
import './Main.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Main = () => {

    const sliderSettings = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },

        className: "mySwiper",
    };

    return (
        <main className="main">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper"
            >
                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 1
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 2
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 3
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 4
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 5
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 6
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 7
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 8
                </SwiperSlide>

                <SwiperSlide
                    className='swiper__slide'
                >
                    Slide 9
                </SwiperSlide>
            </Swiper>
        </main>
    );
}