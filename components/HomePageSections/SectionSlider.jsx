import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import AccordianSection from "./comprehensive/AccordianSection";
import { slider_item } from "./SectionSliderContent"
export default function SectionSlider() {


  return (
    <>
      <section className="section_slider section_slider_bg  py-20 relative">
        <div className="section_slider_content ps-20">
          <div className="container-fluid section_slider_item 0 ">
            <div className="section_slider_title mb-5 pe-32 pt-2">
              <h1 className="text-white font-semibold font-fam">
                Trusted by Industry Leaders
              </h1>
              <p className="text-white py-7">
                Our clients’ success is the best measure of our expertise. Over
                the years, we’ve built a reputation for delivering exceptional
                results and fostering long-term partnerships with
                industry-leading companies. Their praise is our greatest
                achievement, reflecting our commitment to excellence and
                reliability.
              </p>
            </div>

            {/* **************************************************** */}
            <div className="row mt-10">
              {/* ******************************************************************** */}
              <div className="col-md-12">
                <Swiper
                  slidesPerView={2.5}
                  spaceBetween={30}
                  freeMode={true}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    375: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    425: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 2.5,
                      spaceBetween: 20,
                    },
                  }}
                  loop={true}
                  autoplay={true}
                  modules={[FreeMode, Pagination, Navigation, Autoplay]}
                  className="mySwiper"
                >
                  {/* ************************************* */}
                  {
                    slider_item?.map((item, index) => {
                      return (

                        <>

                          <SwiperSlide key={index}>
                            <div className="slide_item relative">
                              {/* *********** */}
                              <div className="slide_head flex justify-between items-center ">
                                <div className="icon_img">
                                  <img src={item?.header?.img1} alt="" />
                                </div>
                                <div className="icon_rate">
                                  <img src={item?.header?.img2} alt="" />
                                </div>
                              </div>
                              {/* *********************  */}
                              <div className="slide_body text-start ">
                                <p>
                                  {item?.card_text}
                                </p>
                              </div>
                              {/* ******************* slider footer  */}
                              <div className="slide_footer   ">
                                <div className="user flex items-center ">
                                  <div className="user_img">
                                    <img src={item?.userInfo?.user_img} width={90} alt="" />
                                  </div>
                                  <div className="user_info ps-10   ">
                                    <p className="m-0 font-semibold text-start ">
                                      {item?.userInfo?.name}
                                    </p>
                                    <p className="m-0">
                                      {item?.userInfo?.user_detail}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>

                        </>
                      )
                    })
                  }
                  {/* *********************************************** */}

                  <div className="prev absolute flex justify-center items-center   bottom-0 z-10">
                    <FaArrowLeft />
                  </div>
                  <div className="next  absolute flex justify-center items-center  z-10">
                    <FaArrowRight />
                  </div>
                </Swiper>
              </div>
              {/* *********************************************************** */}
            </div>
          </div>
        </div>
      </section>

      <AccordianSection />
    </>
  );
}
