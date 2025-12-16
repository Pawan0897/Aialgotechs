
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
// import { icon } from "leaflet";
export default function SectionFifth() {
  const [hovered, setHovered] = useState(1);
  const cards = [
    {
      icon: "/img/icon/custom_development_service.webp",
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
      icon: "/img/icon/applications_modernization.webp",
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
      icon: "/img/icon/digital_product_development_service.webp",
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
      icon: "/img/icon/offshore_development_service.webp",
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
      icon: "/img/icon/digital_product_development_service.webp",
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
      icon: "/img/icon/gen_ai_service.webp",
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
      <section className="sectionFifth bg_light pt-20 pb-20">
        <div className="container">
          <div className="row mb-10">
            <div className="col-12 col-md-10 col-xl-8 col-sm-12">
              <div className="section_fifth_title">
                <h3>
                  End-to-End  Software & E-Commerce Development Services with
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
                      <div className="section_fifth_title z-20">
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
