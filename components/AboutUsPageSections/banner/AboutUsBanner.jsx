import React from "react";
import aboutImg from "../img/aboutus.webp";
export default function AboutUsBanner() {
  return (
    <>
      <section className="aboutUs">
        <div className="container-fluid">
          <div className="row justify-center  items-center">
            {/* ******************************** */}
            <div className="col-12 col-lg-7 col-md-12">
              {/* ******************************** */}
              <div className="banner pbl">
                <div className="aboutBanner  flex justify-center items-center rounded-3xl">
                  <div className="bannerContent ">
                    <h2 className="text-capitalize text-light">About Us</h2>
                    <p className="text-light text-center text-capitalize ">about us</p>
                  </div>
                </div>
              </div>
              {/* ******************************** */}
            </div>
            {/* ******************************** */}
            <div className="col-12 col-lg-5 d-none d-lg-block">
              {/* ******************************** */}
              <div className="bannerImage pbr ">
                <img src={aboutImg} className="rounded-3xl" alt="" />
              </div>
              {/* ******************************** */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
