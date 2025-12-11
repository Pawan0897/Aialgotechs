import React from "react";

import { LiaUserTieSolid } from "react-icons/lia";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function HiringSection() {
  return (
    <>
      <section className="px-50 pt-10 pb-10 md-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="recruiter-banner">
                <img src="/Aboutus/recruitment.webp" className="rounded-3xl" alt="" />
                <div className="icon d-none d-lg-block">
                  <img src="/Aboutus/recruiter_icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* ************************************************************************ */}
          <div className="row mt-5">
            {/* ************************ */}
            <div className="col-lg-4 bg_color">
              <div className="recruiter_info_box rounded-3xl">
                <div className="title">
                  <h2 className="text-capitalize fw-semibold text-light">
                    hire an employee
                  </h2>
                </div>
                <hr />
                {/* *********** */}
                <div className="icon">
                  <LiaUserTieSolid />
                </div>
                {/* *************** */}
                <div className="detail">
                  <p className=" text-light text-capitalize">
                    Benefit from the best workforce solutions globally
                  </p>
                </div>
              </div>
            </div>
            {/* *************************** */}
            {/* ************************ */}
            <div className="col-lg-4 bg_color">
              <div className="recruiter_info_box rounded-3xl">
                <div className="title">
                  <h2 className="text-capitalize fw-semibold text-dark">
                    expert guidance for start-ups & small businesses
                  </h2>
                </div>
                <hr />
                {/* *********** */}
                {/* *************** */}
                <div className="detail d-flex">
                  <a className="flex justify-center items-center text-decoration-none">
                    <span></span>
                    <span>Learn More</span>
                    <span>
                      <AiOutlineArrowDown />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* *************************** */}
            {/* ************************ */}
            <div className="col-lg-4 bg_color">
              <div className="recruiter_info_box rounded-3xl">
                {/* *************** */}
                <div className="detail">
                  <p className=" text-light text-capitalize">
                    Access top-tier creative thinkers tailored to your business needs
                  </p>
                </div>

                <hr />
                {/* *********** */}
                <div className="icon">
                  <AiOutlineArrowDown />
                </div>
                <div className="title">
                  <h2 className="text-capitalize fw-semibold text-light">
                    join our program
                  </h2>
                </div>
              </div>
            </div>
            {/* *************************** */}
          </div>
        </div>
      </section>
    </>
  );
}
