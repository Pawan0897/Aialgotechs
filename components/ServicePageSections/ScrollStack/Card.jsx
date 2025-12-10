"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Projects } from "./Projects";
import img1 from "./img/executive-search.webp"
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Card() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cardElements = gsap.utils.toArray(".custom-card");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        start: "top-=50px top",
        end: "+=2000",
        scrub: 1,
        markers: false,
      },
    });

    cardElements.forEach((card, i) => {
      if (i === 0) {
        // First card: fade in
        tl.to(card, { yPercent: 0, opacity: 1 });
      } else {
        // Other cards: animate from below
        tl.from(card, { yPercent: 75, opacity: 0 });
        tl.to(cardElements[i - 1], { scale: 0.95, yPercent: -0.5, opacity: 0.9 }, "-=0.3");
        tl.to(card, { yPercent: 0, opacity: 1 });
      }
    });
  }, []);

  return (
    <>
      <section className="pbl pbr  d-none d-lg-block">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <div className="cards" ref={cardsRef}>
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
                              <div className="button flex  items-center">
                                <Link href={""} className="rounded-2xl">
                                  <span>
                                    <AiOutlineArrowDown />
                                  </span>
                                  <p>Read more</p>
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
      {/* // ****************************************************************** display  on md screen ****************************** */}
      <section className="p-2 d-lg-none d-sm-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 bg-backgorund">
              <div className="md-scroll-stack-block">
                <div className="md-scroll-img ">
                  <img src={img1} alt="" className="rounded-3xl" />
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
  );
}
