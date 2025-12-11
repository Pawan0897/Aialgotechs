import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function MissionPage() {
  return (
    <>
      <section className="px-50 py-20 md-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12  p-0">
              <div className="mission_img rounded-3xl">
                {/* <img src={img} alt="" className="rounded-3xl" /> */}
              </div>
            </div>
            {/* ******** */}
            <div className="col-12 col-lg-6 col-md-12  ">
              <div className="mission_text">
                <div className="mission_content">
                  <h5 className="capitalize">agency mission & purpose</h5>
                  <h2 className="capitalize">
                    talent strategies that empowers you
                  </h2>
                  <p className="capitalize">
                    At mattis elementum semper tellus donec ornare. Dolorui
                    auctor pellentesque urna nam lectus. Non tellus risus leoat
                    dignissim sed nunc. Sit platea nunc egestas.
                  </p>
                  <div className="button  ">
                    <button className="capitalize flex justify-center items-center">
                      <span> <AiOutlineArrowDown /></span><span> Our Case Studies</span> <span> <AiOutlineArrowDown /></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
