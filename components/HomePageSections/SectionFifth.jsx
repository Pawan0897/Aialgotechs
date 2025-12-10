import circle_icon from "../../public/img/icon/code-circle.jpg";
import mobile from "../../public/img/icon/mobile.png";
import cpu from "../../public/img/icon/cpu.png";
import cloud from "../../public/img/icon/cloud.png";
import monitor_mobbile from "../../public/img/icon/monitor-mobbile.png";
import box_2 from "../../public/img/icon/box-2.png";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
// import { icon } from "leaflet";
export default function SectionFifth() {
  const [hovered, setHovered] = useState(1);
  const cards = [
    {
      icon: circle_icon,
      title: (
        <>
          Custom Development <br /> Service
        </>
      ),
      detail:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      arrowIcon: <MdArrowOutward />,
    },
    {
      icon: mobile,
      title: (
        <>
          Applications<br></br> Modernization
        </>
      ),
      detail:
        "  Contrary to popular belief, Lorem Ipsum is not simply  random text. It has roots in a piece of classical Latin  literature from 45 BC, making it over 2000 years old",
      arrowIcon: <MdArrowOutward />,
    },
    {
      icon: cpu,
      title: (
        <>
          Digital <br></br>Transformations
        </>
      ),
      detail:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      arrowIcon: <MdArrowOutward />,
    },
    {
      icon: cloud,
      title: (
        <>
          Offshore Development <br></br>Service
        </>
      ),
      detail:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      arrowIcon: <MdArrowOutward />,
    },
    {
      icon: monitor_mobbile,
      title: (
        <>
          Digital Product <br></br> Development Service
        </>
      ),
      detail:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      arrowIcon: <MdArrowOutward />,
    },
    {
      icon: box_2,
      title: (
        <>
          Gen Ai <br></br>Service
        </>
      ),
      detail:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      arrowIcon: <MdArrowOutward />,
    },
  ];
  return (
    <>
      <section className="sectionFifth bg_light ps-20 pe-20 pt-20 pb-20">
        <div className="container-fluid">
          <div className="row mb-10">
            <div className="col-12 col-md-10 col-xl-8 col-sm-12">
              <div className="section_fifth_title">
                <h3>
                  End-to-End Software & E-Commerce Development Services with
                  Global Experts
                </h3>
              </div>
            </div>
          </div>
          {/* *********** */}
          <div className="row ">
            {cards?.map((item, index) => {
              return (

                <div className="col-12 col-sm-6 col-md-6 col-xl-4 p-3  md-pb" key={index}   >
                  <div className="section_fifth_card" key={index} onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(2)}>
                    {/* ***** */}
                    <div className={`card position-relative `}>
                      {/* ****** */}
                      <div className="section_fifth_card_icon z-20">
                        <img src={item?.icon} width={50} alt="" />
                      </div>
                      {/* ********* */}
                      <div className="section_fifth_title mt-6 z-20">
                        <div className="content ">
                          <h5 className={`font-semibold`}>{item?.title}</h5>
                          <p
                            className={` ${hovered === 1 ? "text_grey" : "text_grey"
                              }`}
                          >
                            {item?.detail}
                          </p>
                        </div>
                        {/* ************* */}
                        <div className="arrow_icon flex  justify-end">
                          <div className="icon ">{item?.arrowIcon}</div>
                        </div>
                      </div>
                      {/* ********** */}
                    </div>
                  </div>
                </div>

              );
            })}

            {/* ************************************   .......................... */}
          </div>
        </div>
      </section>
    </>
  );
}
