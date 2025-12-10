
import CountUp from 'react-countup';
import leftarrow_line from "../../public/img/icon/leftarrow_line.png";
import rightarrow_line from "../../public/img/icon/rightarrow_line.png"
import { useInView } from "react-intersection-observer";
import robo_img from "../../public/img/robo_img.png";
import blur_square from "../../public/img/blur.png"
export default function SectionThree() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    return (
        <>
            <section className='sectionThree flex items-center  relative' ref={ref} aria-labelledby="section-three-title">
                <div className="section_three_bg absolute  end-0 top-0">
                    <div className="bg_img absolute" aria-hidden="true">
                        <img src={robo_img} alt="Robot illustration" />
                        <div className="bg_blur" aria-hidden="true">
                            <img src={blur_square} alt="decorative blur" />
                        </div>
                    </div>
                </div>
                {/* ********* */}
                <div className="section_three_content ps-20">
                    <div className="container-fluid  ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_three_title">
                                    <h2 id="section-three-title" className='font-semibold'>Over 25 Years of Trusted Partnership with <br /> Leading Tech Companies</h2>
                                </div>
                            </div>
                            {/* ***** */}
                            <div className="section_three_digit pt-10 ">
                                <div className="counting_digit flex flex-wrap ">
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>
                                            {inView && <CountUp end={100} />}<strong>+</strong>
                                        </p>
                                        <p><span><img src={leftarrow_line} alt="" /></span>Projects  <span><img src={rightarrow_line} alt="" /></span></p>
                                    </div>
                                    {/* ********** */}
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>
                                            {inView && <CountUp end={50} />} <strong>+</strong>
                                        </p>
                                        <p>
                                            <span><img src={leftarrow_line} alt="" /></span>
                                            Employees
                                            <span><img src={rightarrow_line} alt="" /></span>
                                        </p>
                                    </div>
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>

                                            {inView && <CountUp end={20} />} <strong>+</strong>
                                        </p>
                                        <p><span><img src={leftarrow_line} alt="" /></span>Countries Served  <span><img src={rightarrow_line} alt="" /></span></p>
                                    </div>
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>

                                            {inView && <CountUp end={50} />} <strong>+</strong>
                                        </p>
                                        <p><span><img src={leftarrow_line} alt="" /></span>Clients  <span><img src={rightarrow_line} alt="" /></span></p>
                                    </div>
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>

                                            {inView && <CountUp end={97} />} <strong>%</strong>
                                        </p>
                                        <p><span><img src={leftarrow_line} alt="" /></span>Retention Rate  <span><img src={rightarrow_line} alt="" /></span></p>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>
                        </div>
                    </div> </div>
            </section>
        </>
    )
}
