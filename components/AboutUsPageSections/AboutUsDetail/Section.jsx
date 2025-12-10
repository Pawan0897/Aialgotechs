import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

// import recruiterimg from "../about-recruitment.jpg";
export default function Section() {
  return (
    <>
      <section className="px-55 pt-20 pb-10 md-padding">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-9 ">
              <div className="employmentsolution ">
                <div className="title">
                  <h6 className="text-uppercase font-semibold  ">
                    better employment solutions
                  </h6>
                  <h2 className="text-capitalize pt-2">
                    connecting talent with opportunities – start your career
                    today!
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-none d-lg-block">
              <div className="arrow_icon float-end ">
                <AiOutlineArrowDown />
              </div>
            </div>
          </div>
          <hr></hr>
          {/* ******************************************* */}

          {/* <div className="row py-20">
            <div className="col-md-6 ">
              <div className="recruiterimg pr-6">
                <img src={recruiterimg} className="rounded-3xl" alt="" />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="recruiter">
                <div className="recruiter_detail ">
                  <div className="title">
                    <h3>
                      We know all the hiring requirements of clients – Including
                      business type, job roles, qualifications & skills.
                    </h3>

                    <p className="pt-4 pb-3">
                      Montes purus acesua lorem egstas metus feugiat ultrices.
                      Dui elem entum lectus diam. Adipiscing pellntesque amet
                      iaculis nunc fauciba valis faucibus matis pulvinar
                      tempore. Dapibus ligua sit ornare amet elit ante hendrerit
                      ipsum vitae ullamcorper.
                    </p>
                    <button className="flex justify-center items-center bg-amber-300 px-4 py-3 ">
                      About Us{" "}
                      <span>
                        <AiOutlineArrowDown />
                      </span>
                    </button>
                  </div>
                </div>
                
                <div className="growth_box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="placement_growth  bg-pink-100 rounded-3xl">
                        <div className="box">
                          <h2>40K</h2>
                          <h5>job placement</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="placement_growth  bg-green-100 rounded-3xl">
                        <div className="box">
                          <h2>6.1%</h2>
                          <h5>growth this year</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
