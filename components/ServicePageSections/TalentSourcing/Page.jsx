"use client"

import { useEffect, useState } from "react";
import { FaChessKing } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";
import { RiGlobalFill } from "react-icons/ri";
import { LuMessageSquareHeart } from "react-icons/lu";
import { RiHandbagFill } from "react-icons/ri";
import img from "./img/circle_bg.svg";
const data = [
  {
    icon: <RiHandbagFill />,
    title: "capability & skill",
    detail:
      "Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis",
  },
  {
    icon: <FaChessKing />,
    title: "capability & skill",
    detail:
      "Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis",
  },
  {
    icon: <FaBookReader />,
    title: "capability & skill",
    detail:
      "Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis",
  },
  {
    icon: <TbMailOpenedFilled />,
    title: "capability & skill",
    detail:
      "Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis",
  },
  {
    icon: <RiGlobalFill />,
    title: "capability & skill",
    detail:
      "Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis",
  },
  {
    icon: <LuMessageSquareHeart />,
    title: "capability & skill",
    detail:
      "Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis",
  },
];
export default function Page() {
  const [state, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setState((pre) => (pre + 1) % data.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="px-50 py-20 md-padding">
        <div className="container-fluid talent_source_bg p-0 rounded-3xl">
          {/* ************************************ */}
          <div className="top_header_bg">
            <img src={img} alt="" />
          </div>
          <div className="row talent_source_box ">
            {/* ******************** */}
            <div className="talentSource_title  text-center ">
              <h5 className="capitalize">talent sourcing & recruitment</h5>
              <h2 className="capitalize">
                connecting people, building futures
              </h2>
              <p className="capitalize">
                Offering a variety of services to both employers and job
                seekers, facilitating the hiring process and ensuring a good
                match between candidates and companies for permanent company
                growth.
              </p>
            </div>
            {/* ******************************** */}
            <div className="col-lg-7">
              <div className="circle_section">
                <div className="circle_box  rotate-circle">
                  <div className="icon">
                    <RiHandbagFill />
                  </div>
                  {/* ********** */}
                  <div className="icon">
                    <FaChessKing />
                  </div>
                  {/* ********** */}
                  <div className="icon">
                    <FaBookReader />
                  </div>
                  {/* ********** */}
                  <div className="icon">
                    <TbMailOpenedFilled />
                  </div>
                  {/* ********** */}
                  <div className="icon">
                    <RiGlobalFill />
                  </div>
                  {/* ********** */}
                  <div className="icon">
                    <LuMessageSquareHeart />
                  </div>
                  {/* ************************************* circle_box content */}
                  <div className="circle_box_content stop-rotate p-5">
                    <div className="box_content">
                      <div className="content">
                        <h4 className="capitalize text-light ">
                          global presence
                        </h4>
                        <p className="capitalize  ">
                          Nunc egestas gravida elit vel placerat. Nulla egestas auctor est at bibendum nunc fermentum vitae mollis
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="talent_source_rate_section">
                <div className="source_rate_content">
                  <div className="rate">
                    <h2>
                      40k
                    </h2>
                    <p>Job placements every year</p>
                  </div>
                  <div className="rate">
                    <h2>
                      6.1%
                    </h2>
                    <p>Average increase in hiring talent</p>
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
