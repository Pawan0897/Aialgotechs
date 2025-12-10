
import img1 from "../img/contract-staffing.webp";
import img2 from "../img/permanent-staffing.webp";
import img3 from "../img/temporary-staffing1.webp";
import { RiUserStarLine } from "react-icons/ri";
export default function StaffingSection() {


  return (
    <>
      {/* ************************************************   view on lg screen ************************************************************ */}
      <section className="px-50 py-20 md-padding">
        <div className="container-fluid">
          <div className="row">
            {/* ********************************** */}
            <div className="col-12 col-lg-4 col-md-4 col-sm-12  ">
              <div className="staffing_box">
                <div className="staffing_img">
                  <img src={img3} className="rounded-3xl" alt="" />
                </div>
                {/* ****** */}
                <div className="staffing_detail">
                  {/* *********** */}
                  <div className="title flex justify-between items-center">
                    <h5 className="capitalize">permanent staffing</h5>
                    <div className="icon">
                      <RiUserStarLine />
                    </div>
                  </div>
                  {/* *********** */}
                  <div className="show_text">
                    <p>The Recruiting Initiative</p>
                  </div>
                  {/* *********** */}

                  <hr></hr>
                </div>
                {/* ***** end  */}
              </div>
            </div>
            {/* ********************************** */}
            <div className="col-12 col-lg-4 col-md-4 col-sm-12  ">
              <div className="staffing_box">
                <div className="staffing_img">
                  <img src={img2} className="rounded-3xl" alt="" />
                </div>
                {/* ****** */}
                <div className="staffing_detail">
                  {/* *********** */}
                  <div className="title flex justify-between items-center">
                    <h5 className="capitalize">permanent staffing</h5>
                    <div className="icon">
                      <RiUserStarLine />
                    </div>
                  </div>
                  {/* *********** */}
                  <div className="show_text">
                    <p>The Recruiting Initiative</p>
                  </div>
                  {/* *********** */}

                  <hr></hr>
                </div>
                {/* ***** end  */}
              </div>
            </div>
            {/* ********************************** */}
            <div className="col-12 col-lg-4 col-md-4 col-sm-12  ">
              <div className="staffing_box">
                <div className="staffing_img">
                  <img src={img1} className="rounded-3xl" alt="" />
                </div>
                {/* ****** */}
                <div className="staffing_detail">
                  {/* *********** */}
                  <div className="title flex justify-between items-center">
                    <h5 className="capitalize">permanent staffing</h5>
                    <div className="icon">
                      <RiUserStarLine />
                    </div>
                  </div>
                  {/* *********** */}
                  <div className="show_text">
                    <p>The Recruiting Initiative</p>
                  </div>
                  {/* *********** */}

                  <hr></hr>
                </div>
                {/* ***** end  */}
              </div>
            </div>
            {/* ********************************** */}
          </div>
        </div>
      </section>
      {/* ************************************************    view omn md screeen block  ***************************************************/}


    </>
  );
}
