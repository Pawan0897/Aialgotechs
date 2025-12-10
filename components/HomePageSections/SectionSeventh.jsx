import React from "react";
import { MdArrowOutward } from "react-icons/md";
import block_img1 from "../../public/img/block_img/block_bg1.png";
import block_img2 from "../../public/img/block_img/block_bg2.png";
import block_icon1 from "../../public/img/block_img/block_icon3.png";
import block_icon2 from "../../public/img/block_img/block_icon2.png";
import block_icon3 from "../../public/img/block_img/block_icon1.png";
import story from "../../public/img/block_img/story.png";
export default function SectionSeventh() {
    return (
        <>
            <section className="sectionSeventh ps-20 pe-20">
                <div className="container-fluid">
                    <div className="section_seventh_title">
                        <h3 className="font-semibold  capitalize text-center ">
                            How We Drive Successful <br></br>
                            Digital Transformation For You?
                        </h3>
                    </div>
                    {/* *********** */}
                    <div className="row">
                        {/* ******************************** */}
                        <div className="col-md-8">
                            <div className="section_seventh_blocks ">
                                <div className="block_bg relative rounded-2xl">
                                    <img src={block_img1} className="absolute" />
                                </div>
                                {/* ******** */}
                                <div className="section_seventh_box relative ">
                                    {/* ******* */}
                                    <div className="section_block_icon absolute  ">
                                        <img src={block_icon1} alt="" />
                                        <p className="font-semibold text-amber-50">
                                            AI-Powered<br></br>
                                            Transformation
                                        </p>
                                    </div>
                                    {/* ******** */}
                                    <div className="section_block_arrow_icon absolute text-gray-200">
                                        <MdArrowOutward />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ********************************************************* */}
                        <div className="col-md-4 py-2 mt-2">
                            <div className="section_seventh_second_block rounded-2xl">
                                <div className="bg_block"></div>

                                {/* *********** */}
                                <div className="section_seventh_box relative ">
                                    {/* ******* */}
                                    <div className="section_block_icon absolute  ">
                                        <img src={story} alt="" />
                                        <p className="font-semibold text-black">
                                            Human-Centric
                                            <br></br>
                                            Approach
                                        </p>
                                    </div>
                                    {/* ******** */}
                                    <div className="section_block_arrow_icon absolute text-gray-200">
                                        <MdArrowOutward />
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                        {/* *************************************************************** 2nd clock */}
                        <div className="col-md-4  py-2 mt-2">
                            <div className="section_seventh_second_block rounded-2xl" id="block_bg_color">
                                <div className="bg_block"></div>

                                {/* *********** */}
                                <div className="section_seventh_box relative ">
                                    {/* ******* */}
                                    <div className="section_block_icon absolute  ">
                                        <img src={block_icon3} alt="" />
                                        <p className="font-semibold text-black">
                                            Future-Proof
                                            <br></br>
                                            Scalability
                                        </p>
                                    </div>
                                    {/* ******** */}
                                    <div className="section_block_arrow_icon absolute text-gray-100">
                                        <MdArrowOutward />
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                        {/* ****************** */}
                        <div className="col-md-8">
                            <div className="section_seventh_blocks ">
                                <div className="block_bg relative ">
                                    <img src={block_img2} className="absolute" />
                                </div>
                                {/* ******** */}
                                <div className="section_seventh_box relative ">
                                    {/* ******* */}
                                    <div className="section_block_icon absolute  ">
                                        <img src={block_icon2} id="icon_img_size" alt="" />
                                        <p className="font-semibold text-amber-50">
                                            Transparent Communication
                                            <br></br>
                                            & Collaboration
                                        </p>
                                    </div>
                                    {/* ******** */}
                                    <div className="section_block_arrow_icon absolute text-gray-200">
                                        <MdArrowOutward />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* *********************************************** */}
                    </div>
                </div>
            </section>
        </>
    );
}
