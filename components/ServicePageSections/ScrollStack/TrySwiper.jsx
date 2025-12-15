"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "./st2.css";

export default function StackSwiper() {
    return (
        <Swiper
            direction="vertical"
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={-120}
            mousewheel={{ forceToAxis: true }}
            speed={700}
            modules={[Mousewheel]}
            className="stack-swiper"
        >
            {[1, 2, 3, 4, 5].map((n) => (
                <SwiperSlide key={n} className="stack-slide">
                    Slide {n}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
