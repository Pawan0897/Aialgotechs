
import aword from "../img/awar.webp"
import Image from "next/image";
export default function Awords_section() {
  return (
    <>
      <section className="px-20 py-20 md-padding">
        <div className="container-fluid">
          <div className="row justify-center ">
            {/* *************************** */}
            <div className="col-lg-7">
              <div className="aword_title text-center px-30 md-padding">
                <h2 className="text-capitalize">awards & accreditations</h2>
                <p className="text-capitalize"   >
                  Urnas amet ubitant tortors mattis interdum urnays. Sagittis
                  attitor cursus rutrum scelerisques glatea tempore  placerat
                  aliquam erat.
                </p>
              </div>
            </div>
          </div>
          <div className="row items-center justify-center">

            {/* *************************** */}
            <div className="col-lg-2 ">

              <div className="aword_box p-15">
                <div className="card border-0">
                  <div className="aword_card_img">
                    <img src={aword} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* *************************** */}
            <div className="col-lg-2 ">

              <div className="aword_box p-15">
                <div className="card border-0">
                  <div className="aword_card_img">
                    <img src={aword} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* *************************** */}
            <div className="col-lg-2 ">

              <div className="aword_box p-15">
                <div className="card border-0">
                  <div className="aword_card_img">
                    <img src={aword} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* *************************** */}
            <div className="col-lg-2 ">

              <div className="aword_box p-15">
                <div className="card border-0">
                  <div className="aword_card_img">
                    <img src={aword} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* *************************** */}
            <div className="col-lg-2 ">

              <div className="aword_box p-15">
                <div className="card border-0">
                  <div className="aword_card_img">
                    <img src={aword} alt="" />
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
