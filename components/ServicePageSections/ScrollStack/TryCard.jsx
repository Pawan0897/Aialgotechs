
"use client"
import ScrollStack, { ScrollStackItem } from './TryCard2'
import { AiOutlineArrowDown } from "react-icons/ai";
import { Projects } from "./Projects";
import Link from "next/link";

import React from 'react'
import "./st.css"
export default function TryCard() {
    return (
        <>
            <section className='scroll-stack-section pbr pbl '>


                <ScrollStack className='h-screen '>
                    <ScrollStackItem>

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






                    </ScrollStackItem>

                    {/* ************************************************************ */}
                    <ScrollStackItem>
                        <section className=" d-none d-lg-block">
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

                    </ScrollStackItem>
                    <ScrollStackItem>
                        <section className=" d-none d-lg-block">
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

                    </ScrollStackItem>
                </ScrollStack>

            </section>
        </>
    )
}

