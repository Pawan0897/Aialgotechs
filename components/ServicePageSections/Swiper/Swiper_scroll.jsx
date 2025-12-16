import { React, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Mousewheel, Pagination, EffectCreative } from 'swiper/modules';
import { Projects } from './Projects';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';
import { IoArrowBackSharp } from "react-icons/io5";
export default function Swiper_scroll() {
    const sectionRef = useRef(null);

    return (
        <>
            <section className='d-none d-lg-block full_height' ref={sectionRef}>
                <Swiper

                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={0}
                    allowTouchMove={true}
                    // ***********************
                    mousewheel={{
                        forceToAxis: true,
                        releaseOnEdges: true,
                    }}
                    // ***********************
                    speed={800}
                    // ***********************
                    pagination={{ clickable: true }}
                    // ***********************
                    // onSlideChange={() => {
                    //     sectionRef.current?.scrollIntoView({
                    //         behavior: "smooth",
                    //         block: "start",
                    //     });
                    // }}
                    onSlideChange={(swiper) => {
                        // 🚫 Do nothing on last slide
                        if (swiper.isEnd) return;

                        // ✅ Scroll to top only for other slides
                        sectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                    // ***********************
                    effect="creative"
                    // ***********************
                    creativeEffect={{
                        prev: {
                            translate: [0, "-100%", 0],
                            scale: 0.95,
                            opacity: 0,
                        },
                        next: {
                            translate: [0, "100%", 0],
                            scale: 1,
                            opacity: 0,
                        },

                    }}
                    // ***********************
                    modules={[Mousewheel, Pagination, EffectCreative]}
                    // ***********************
                    className="mySwiper pbr pbl"
                // ***********************

                >
                    {
                        Projects?.map((item, i) => {


                            return (

                                <>
                                    <SwiperSlide key={i}>
                                        <section className="mbl mbr">
                                            <div className="container-fluid ">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="cards">

                                                            <div
                                                                key={item.index}
                                                                className={`custom-card`}

                                                            >
                                                                <div className="row">
                                                                    <div className="col-lg-5">
                                                                        <div className="scrollStack_content ">
                                                                            <div className="content">
                                                                                <div className="stack_icon  ">
                                                                                    <IoArrowBackSharp />
                                                                                </div>
                                                                                <div className="stack_title text-start">
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






            {/* *************************************** inmobile way what shwo  */}
            <section className="p-2 d-lg-none d-sm-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-12 bg-backgorund">
                            <div className="md-scroll-stack-block">
                                <div className="md-scroll-img ">
                                    <img src="/service/executive-search.webp" alt="" className="rounded-3xl" />
                                </div>
                                {/* ****************** */}
                                <div className="md-scroll-details">
                                    {/* ************* */}
                                    <div className="title ">
                                        <h5 className="capitalize">permanent staffing</h5>

                                        <h2 className="capitalize">
                                            executive search
                                        </h2>
                                        <p className="capitalize">
                                            Mattis element semper tellus donec ornae. Eolor auctor
                                            pellen tesque urna nam lectus. Tellus risus dapibus ornare
                                            interdum tempore lorem.
                                        </p>
                                    </div>
                                    {/* ******************** */}
                                    <div className="button d-flex">
                                        <Link href={""} className="capitalize rounded-2xl mt-2">
                                            Read More <span> <AiOutlineArrowDown /></span>
                                        </Link>
                                    </div>
                                </div>
                                {/* *************************** */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
