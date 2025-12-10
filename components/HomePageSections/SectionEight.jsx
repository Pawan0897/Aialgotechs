import React from 'react'
import Marquee from "react-fast-marquee";
import frame1 from "../../public../../public/img/frames/frame1.png"
import frame2 from "../../public/img/frames/frame2.png"
import frame3 from "../../public/img/frames/frame3.png"
import frame4 from "../../public/img/frames/frame4.png"
import frame5 from "../../public/img/frames/frame5.png"
import frame6 from "../../public/img/frames/frame6.png"
import frame7 from "../../public/img/frames/frame7.png";
export default function SectionEight() {
    return (
        <>
            <section className='sectionEight mt-20 '>
                <div className="container-fluid">
                    <div className="row">
                        <div className="section_eight_title mb-10 mt-10">
                            <h3 className=' font-semibold'>
                                From Startups To Enterprises,
                                <br>
                                </br>
                                We Transform Digital Visions At Every Scale
                            </h3>
                        </div>
                        {/* ************************* move block */}
                        <div className="section_eight_move_blocks">
                            <div className="move_blocks">
                                <Marquee pauseOnHover   >
                                    <ul className='flex gap-4' id='move'>
                                        <li>
                                            <img src={frame1} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame2} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame3} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame4} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame5} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame6} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame7} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame2} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame3} alt="" />
                                        </li>
                                        {/* **** */}

                                    </ul>
                                </Marquee>
                            </div>
                            {/* ***************************************** left to right move */}
                            <div className="move_blocks mt-2">
                                <Marquee direction='right' pauseOnHover>
                                    <ul className='flex gap-4' id='move'>
                                        <li>
                                            <img src={frame1} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame2} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame3} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame4} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame5} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame6} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame7} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame2} alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src={frame3} alt="" />
                                        </li>
                                        {/* **** */}

                                    </ul>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
