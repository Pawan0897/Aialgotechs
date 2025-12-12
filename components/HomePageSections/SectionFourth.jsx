

export default function SectionFourth() {
    return (
        <>
            <section className='sectionFourth py-20 container-fluid'>
                <div className="row items-center justify-center">
                    <div className="col-lg-9">
                        <div className="section_fourth_bg w-full   shadow">
                            <div className="container-fluid ">
                                <div className="row md:px-0 items-center">
                                    <div className="col-12 col-sm-12 col-md-12 col-xl-8 p-3 md-pb">
                                        <div className="section_fourth_content   flex items-center justify-between">
                                            <div className="section_fourth_text">
                                                <h2 className="text-light">
                                                    Harness Global Expertise
                                                </h2>
                                                <p className="">Transform your <span className="text-light">ideas into reality</span> with our expert web and app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-xl-4 p-3 md-pb">

                                        {/* ************ buton animation */}
                                        <div className="section_fourth_button flex justify-end">
                                            <button className="button_shine">
                                                <span className="label">Start Building Today</span>
                                                <span className="gradient-container">
                                                    <span className="gradient"></span>
                                                </span>
                                            </button>
                                        </div>
                                        {/* **************** */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* ************************************************************* */}

        </>
    )
}
