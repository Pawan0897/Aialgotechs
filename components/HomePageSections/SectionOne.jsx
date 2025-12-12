
// import scroller from "../../public/img/buble_gif.gif"
import SectionTwo from './SectionTwo'
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
    return (
        <div
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}
        >
            {text}
        </div>
    );
}

const ShinycontentText = ({ text2, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
    return (
        <div
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}
        >
            {text2}
        </div>
    );
}
export default function SectionOne() {



    return (
        <>
            <section className="relative    sectionOne  overflow-hidden">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-12">

                            {/* ********************************* */}
                            <div className="banner_sectionOne flex justify-center items-center  z-10">
                                <div className="bg-ciculer  flex top-25  items-center justify-center  absolute test">
                                    <img src="/img/helloo.gif" />
                                </div>
                                <div className="banner_content text-center z-10">
                                    <h1 className="m-0">
                                        <ShinyText
                                            text="aialgotechs"
                                            disabled={false}
                                            speed={3}
                                            className="custom-class"
                                        />
                                    </h1>
                                    <h4 className='text-end '>
                                        <ShinycontentText
                                            text2="bringing the global recruitment solutions"
                                            disabled={false}
                                            speed={3}
                                            className="custom-class"

                                        />


                                    </h4>
                                    {/* ************************* */}
                                    <div className="banner_three_block flex  justify-center items-center mb-25 mt-36 ">
                                        <div className="block_one block">
                                            <p className='text-start'>
                                                <span>We empower</span> businesses to <span>Innovate</span>,<br></br> Optimize, and
                                                <span>Scale</span>
                                            </p>
                                        </div>
                                        <div className="block_two block">
                                            <p className='text-start'>
                                                Custom <span>app development</span> with<br></br> advanced <span>AI capabilities</span>
                                            </p>
                                        </div>
                                        <div className="block_three block">
                                            <p className='text-start'>
                                                Generative <span>AI solutions</span> fueling<br></br> <span>business innovation</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* *********************************************** Section Two  */}
                <SectionTwo />

            </section >
        </>
    )
}
