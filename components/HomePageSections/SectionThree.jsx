
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
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
                        <img src="/img/robo_img.png" alt="Robot illustration" />
                        <div className="bg_blur" aria-hidden="true">
                            <img src="/img/blur.png" alt="decorative blur" />
                        </div>
                    </div>
                </div>
                {/* ********* */}
                <div className="section_three_content w-full">
                    <div className="container  ">
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
                                        <p><span><img src="/img/icon/leftarrow_line.png" alt="" /></span>Projects  <span><img src="/img/icon/rightarrow_line.png" alt="" /></span></p>
                                    </div>
                                    {/* ********** */}
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>
                                            {inView && <CountUp end={50} />} <strong>+</strong>
                                        </p>
                                        <p>
                                            <span><img src="/img/icon/leftarrow_line.png" alt="" /></span>
                                            Employees
                                            <span><img src="/img/icon/rightarrow_line.png" alt="" /></span>
                                        </p>
                                    </div>
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>

                                            {inView && <CountUp end={20} />} <strong>+</strong>
                                        </p>
                                        <p><span><img src="/img/icon/leftarrow_line.png" alt="" /></span>Countries Served  <span><img src="/img/icon/rightarrow_line.png" alt="" /></span></p>
                                    </div>
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>

                                            {inView && <CountUp end={50} />} <strong>+</strong>
                                        </p>
                                        <p><span><img src="/img/icon/leftarrow_line.png" alt="" /></span>Clients  <span><img src="/img/icon/rightarrow_line.png" alt="" /></span></p>
                                    </div>
                                    {/* ************** */}
                                    <div className="count_number">
                                        <p>

                                            {inView && <CountUp end={97} />} <strong>%</strong>
                                        </p>
                                        <p><span><img src="/img/icon/leftarrow_line.png" alt="" /></span>Retention Rate  <span><img src="/img/icon/rightarrow_line.png" alt="" /></span></p>
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
