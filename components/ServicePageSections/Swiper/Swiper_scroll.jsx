import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
// import { EffectCreative } from 'swiper/modules';
import { Mousewheel, Pagination, EffectCreative } from 'swiper/modules';
import { Projects } from '../ScrollStack/Projects';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';
export default function Swiper_scroll() {
    return (
        <>
            <section className='pbr pbl pt-4'>
                <Swiper

                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={50}
                    mousewheel={true}
                    grabCursor={true}
                    speed={800}
                    pagination={{ clickable: true }}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            translate: [0, -100, 0],
                            scale: 0.95,
                            opacity: 0,
                        },
                        next: {
                            translate: [0, "100%", 0],
                            scale: 1,
                            opacity: 1,
                        },
                    }}
                    dir='vertical'
                    modules={[Mousewheel, Pagination, EffectCreative]}
                    className="mySwiper"

                >
                    {
                        Projects?.map((item) => {
                            return (

                                <>

                                    <SwiperSlide>
                                        <section className="  d-none d-lg-block">
                                            <div className="container-fluid ">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="cards">
                                                            {Projects.map((item) => (
                                                                <div
                                                                    key={item.index}
                                                                    className={`custom-card ${item.card1}`}
                                                                    style={{ zIndex: item.index }}
                                                                >
                                                                    <div className="row">
                                                                        <div className="col-lg-5">
                                                                            <div className="scrollStack_content ">
                                                                                <div className="content">
                                                                                    <div className="stack_icon  ">
                                                                                        <AiOutlineArrowDown />
                                                                                    </div>
                                                                                    <div className="stack_title">
                                                                                        <h5 className="capitalize">{item.title}</h5>
                                                                                        <h2>Talent sourcing</h2>
                                                                                        <p>{item.description}</p>
                                                                                        <div className="button scroll_stack_button flex  items-center">
                                                                                            <Link href={""} className="rounded-2xl">
                                                                                                <span>
                                                                                                    <AiOutlineArrowDown />
                                                                                                </span>
                                                                                                <span>Read more</span>
                                                                                                <span>
                                                                                                    <AiOutlineArrowDown />
                                                                                                </span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div></div>
                                                                        </div>
                                                                        <div className="col-lg-7">
                                                                            <div className="stack_img">
                                                                                {/* <img src={item.image} alt={item.title} /> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </SwiperSlide>


                                </>
                            )
                        })
                    }

                </Swiper>
            </section>
        </>
    )
}
