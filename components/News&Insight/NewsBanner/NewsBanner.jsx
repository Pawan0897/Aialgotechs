import Header from "../../Header"
import StickySocial_Icon from "../StickySocialicon/StickySocial_Icon"
import "./style.css"
export default function NewsBanner() {
    return (
        <>
            <Header />

            <section className='pbl pbr news_insight'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="news_insight_banner flex items-center justify-center h-full bg_blue-b  rounded-3xl">
                                <div className="news_insight_banner_content flex flex-col text-amber-50 gap-3  text-center">
                                    <h2>
                                        Why soft skills are key to career growth in today’s market
                                    </h2>
                                    <p className='break_points'>
                                        <span>
                                            Pawan-Dev-017
                                        </span>
                                        {/* ************* */}
                                        <span className="tab">
                                            |
                                        </span>
                                        {/* ************* */}
                                        <span>
                                            November 20, 2024
                                        </span>
                                        {/* ************* */}
                                        <span className="tab">
                                            |
                                        </span>
                                        {/* ************* */}
                                        <span>
                                            Case Study
                                        </span>
                                        {/* ************* */}
                                        <span className="tab">
                                            |
                                        </span>
                                        <span> 3.5 min</span>
                                    </p>
                                    <hr className="text-amber-50" />
                                    <h5>
                                        Get the latest insights, market trends & inspiration!
                                    </h5>
                                </div>
                            </div>

                        </div>
                        {/* ***************************************************** */}
                        <div className="col-lg-6">
                            <div className="newsbanner_img ">
                                <img src="/news&insight/blog-skill-career-growth-1-1.webp" alt="" className="rounded-3xl" />
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <StickySocial_Icon />
        </>
    )
}
