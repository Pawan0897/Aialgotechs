
"use client";
import Header from "../components/Header"
/**************************************************************************************************************************** */
import SectionTwo from '../components/HomePageSections/SectionTwo'
import SectionThree from '../components/HomePageSections/SectionThree'
import SectionFourth from '../components/HomePageSections/SectionFourth'
import SectionEight from '../components/HomePageSections/SectionEight';
// import SectionNinth from '../components/HomePageSections/SectionEight'
import Footer from "../components/Footer"
import SectionSlider from '../components/HomePageSections/SectionSlider'
import BlogSection from '../components/HomePageSections/blogs/BlogSection'
import OurLocation from '../components/HomePageSections/ourlocation/OurLocation'
import ArrrowButton from '../components/HomePageSections/fixed_button/ArrrowButton'
import SectionSixth from "../components/HomePageSections/SectionSixth"

import SectionFifth from '../components/HomePageSections/SectionFifth'
/**************************************************************************************************************************** */
interface ShinyTextProps {
  text: string,
  disabled?: boolean,
  speed?: number,
  className?: string,
}
// ******************************************************************   */

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) => {
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
export default function Home() {
  return (
    <>
      <Header />
      <section className="relative    sectionOne  overflow-hidden">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12">

              {/* ********************************* */}
              <div className="banner_sectionOne flex justify-center items-center  z-10">
                <div className="bg-ciculer  flex top-25  items-center justify-center  absolute">
                  <img src="/img/buble_gif.gif" alt="" />
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

                    bringing the global recruitment solutions
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


      </section >
      {/* ********************************************** */}

      <SectionTwo />
      <SectionThree />
      <SectionFourth />
      <SectionFifth />
      <SectionSixth />
      <SectionSlider />
      <BlogSection />
      <ArrrowButton />
      <SectionEight />
      <OurLocation />
      <Footer />
    </>
  );
}
