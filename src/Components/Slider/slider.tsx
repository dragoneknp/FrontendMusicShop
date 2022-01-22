import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slider.scss";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const Slider = (props: { pictures: string[] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="slider">
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
                navigation={{
                    nextEl: ".slider__nextEl",
                    prevEl: ".slider__prevEl",
                }}
            >
                {props.pictures.map((item) => (
                    <SwiperSlide key={uuidv4()}>
                        <img src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper as any}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {props.pictures.map((item) => (
                    <SwiperSlide key={uuidv4()}>
                        <img src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slider__prevEl"></div>
            <div className="slider__nextEl"></div>
        </div>
    );
};
export default Slider;
