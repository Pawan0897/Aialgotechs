import star from "../../public/img/star_icon.png";

export default function SectionTwo() {

    return (
        <section className="sectionTwo bg-white">

            <div className="container-fluid">
                <div className="row ">
                    {/* left to right >>>>>>>>>>>>>*/}
                    <div className="col-md-5 p-0 z-index bg-white">
                        <div className="slide">
                            <div className="rightToSlide">
                                <div className="marquee d-flex align-items-center">
                                    <div className="track">
                                        <div className="content d-flex">
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>Mobile App Modernisation</p>
                                            </div>
                                            {/* **************** */}
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>DevOps & Cloud</p>
                                            </div>
                                            {/* ************** */}
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>Database Development</p>
                                            </div>
                                            {/* ************* */}
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>e-Commerce Development</p>
                                            </div>
                                            {/* ************* */}
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>Mobile App Modernisation</p>
                                            </div>
                                            {/* ************* */}
                                            {/* ************* */}
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>DevOps & Cloud</p>
                                            </div>
                                            {/* ************* */}
                                            <div className="content-list ms-2 d-flex justify-content-center">
                                                <span className='star_logo me-2'><img src="/img/star_icon.png" alt="" /></span><p>Database Development</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 p-0">
                        <div className="center_built_button relative">
                            <button className='buit_button  text-light px-3 py-2 shadow  '>
                                Built Your Success Story
                            </button>
                            {/* *** */}
                            <img src="/img/circle.png" alt="" />
                        </div>
                    </div>
                    {/*right to left >>>>>>>>>>> */}

                    <div className="col-md-5 p-0">
                        <div className="lefttoslide">
                            <div className="marquee">
                                <div className="track">
                                    <div className="content d-flex">
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>AI Intigration</p>
                                        </div>
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>Web Development</p>
                                        </div>
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>UI/UX Design</p>
                                        </div>
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>Marketing</p>
                                        </div>
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>AI Intigration</p>
                                        </div>
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>Web Development</p>
                                        </div>
                                        {/* ************** */}
                                        <div className="content-list ms-2 d-flex justify-content-center">
                                            <span className='star_logo me-2'><img src={star} alt="" /></span><p>UI/UX Design</p>
                                        </div>
                                        {/* ************** */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
