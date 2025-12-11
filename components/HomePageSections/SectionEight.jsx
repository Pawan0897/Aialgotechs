
import Marquee from "react-fast-marquee";

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
                                            <img src="/img/frames/frame1.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame2.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame3.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame4.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame5.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame6.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame7.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame1.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame2.png" alt="" />
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
                                            <img src="/img/frames/frame1.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame2.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame3.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame4.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame5.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame6.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame7.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame1.png" alt="" />
                                        </li>
                                        {/* **** */}
                                        <li>
                                            <img src="/img/frames/frame2.png" alt="" />
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
