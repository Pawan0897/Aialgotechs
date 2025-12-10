import React from 'react'
import top_bg from "../public/img/footer/footer_bg_top.png";
import footer_logo from "../public/img/footer_logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <footer className='footer '>
                <div className="footer_top">
                    <img src={top_bg} alt='' />
                </div>
                {/* ********************* */}
                <section className='footer_inner_item py-10 '>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12">
                                <div className="footer_inner">
                                    <p className='capitalize font-semibold'>
                                        contact info
                                    </p>
                                    <div className="footer_content_item pe-5">
                                        <ul className='p-0'>
                                            <li>101 Main Street, Queens, New York United
                                                States – 11435</li>
                                            <li>info[at]avada-company.com</li>
                                            <li>Tel: +1 (800) 555 5555</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            {/* ******************** */}
                            <div className="col-md-2 col-sm-12 col-xs-12">
                                <div className="footer_inner">
                                    <p className='capitalize font-semibold'>
                                        contact info
                                    </p>
                                    <div className="footer_link">
                                        <ul className='float-center'>
                                            <li>Technology</li>
                                            <li>Service</li>
                                            <li>Success Stories</li>
                                            <li>About Us</li>
                                            <li>Industry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ******************** */}
                            <div className="col-md-2 col-sm-12 col-xs-12">
                                <div className="footer_inner">
                                    <p className='capitalize font-semibold'>
                                        contact info
                                    </p>
                                    <div className="footer_link">
                                        <ul>
                                            <li>Technology</li>
                                            <li>Service</li>
                                            <li>Success Stories</li>
                                            <li>About Us</li>
                                            <li>Industry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ******************** */}
                            <div className="col-md-2 col-sm-12 col-xs-12">
                                <div className="footer_inner">
                                    <p className='capitalize font-semibold'>
                                        contact info
                                    </p>
                                    <div className="footer_link">
                                        <ul>
                                            <li>Technology</li>
                                            <li>Service</li>
                                            <li>Success Stories</li>
                                            <li>About Us</li>
                                            <li>Industry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ******************** */}

                        </div>

                    </div>


                </section>
                {/* ******************************* */}
                <section className=' footer_after_section'>
                    <div className="container ">
                        {/* *********************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <div className="row py-3 items-center">
                            <div className="col-md-4">
                                <div className="footer_logo">
                                    <img src={footer_logo} alt='' />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="footer_title">
                                    <h4 className='capitalize text-amber-50 text-light'>
                                        your trusted partner in building careers
                                    </h4>
                                </div>

                            </div>
                            <div className="col-md-3">
                                <div className="footer_button flex justify-end">

                                    <button className="button_shine me-0 ">
                                        <span className="label2 fw-semibold">  Get Started</span>
                                        <span className="gradient-container">
                                            <span className="gradient"></span>
                                        </span>
                                    </button>

                                    {/* <div className="section_fourth_button text-end">
                                        <button className="text-dark font-semibold px-2 py-2 ">
                                            Get Started
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* *************************************** */}


                    </div>
                </section>
                {/* *****>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <section className='footer_bottom py-6 '>
                    <div className="container">
                        <div className="bottom_footer flex flex-wrap justify-between items-center ">
                            <div className="bottom_footer_text">
                                <p className='text-light'>
                                    © 2012 - 2025 • <span>Avada</span> is a <span>Website Builder</span> for <span>WordPress</span> and <span>eCommerce</span> <br></br>
                                    All Rights Reserved • Developed by <span>ThemeFusion</span>
                                </p>

                            </div>
                            <div className="bottom_footer_icon ">
                                <div className="icon">

                                    <ul className="wrapper flex flex-wrap">
                                        <li className="icon facebook">
                                            <span className="tooltip">Facebook</span>
                                            <FaFacebookF />
                                        </li>
                                        <li className="icon twitter">
                                            <span className="tooltip">Twitter</span>
                                            <FaXTwitter />
                                        </li>
                                        <li className="icon instagram">
                                            <span className="tooltip">YouTube</span>
                                            <IoLogoYoutube />
                                        </li>
                                        <li className="icon linkdin">
                                            <span className="tooltip">Linkedin</span>
                                            <FaLinkedinIn />
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>


            </footer>

        </>
    )
}
