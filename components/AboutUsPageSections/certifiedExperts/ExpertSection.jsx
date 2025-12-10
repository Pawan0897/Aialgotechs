
import expert_img from "../img/expert.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"; import { FaYoutube } from "react-icons/fa"; import { IoIosMail } from "react-icons/io";

export default function ExpertSection() {
  return (
    <>
      <section className=" px-3   ">
        <div className="section_expert_padding px-50  rounded-3xl py-20 md-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="exper_section_title pe-12">
                  <h5 className="text-capitalize ">
                    your ideal recruitment agency
                  </h5>
                  <h2 className="text-capitalize ">
                    meet our certified recruitment experts
                  </h2>
                  <p>
                    Montes purus aces lorem egestas metus feugiat ultrices dui
                    elementum diam. Adipiscing pellente sque amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">

                  {/* ************************************ */}
                  <div className="col-md-6">
                    <div className="exper_detail">
                      <div className="card rounded-3xl">
                        <div className="img">
                          <img
                            src={expert_img}
                            alt=""
                            className="rounded-3xl"
                          />
                          {/* *************** show n hover icon  */}
                          <div className="icon_box">
                            <div className="icon px-4 ">
                              <ul className="expert_icon_wrapper rounded">
                                <li className="icon facebook">
                                  <span className="tooltip">Facebook</span>
                                  <FaFacebookF />
                                </li>
                                <li className="icon twitter">
                                  <span className="tooltip">Twitter</span>
                                  <RiTwitterXFill />
                                </li>
                                <li className="icon instagram">
                                  <span className="tooltip">Instagram</span>
                                  <FaInstagram />
                                </li>
                                <li className="icon instagram">
                                  <span className="tooltip">YouTube</span>
                                  <FaYoutube />
                                </li>
                                <li className="icon instagram">
                                  <span className="tooltip">Mail</span>
                                  <IoIosMail />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="detail ps-4 pt-3">
                          <div className="expert_name">
                            <h3 className="text-capitalize">lizzie williams</h3>
                          </div>
                          <div className="expert_position">
                            <p>Associate Consultant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ******************************************* col end */}
                  {/* ************************************ */}
                  <div className="col-md-6">
                    <div className="exper_detail">
                      <div className="card rounded-3xl">
                        <div className="img">
                          <img
                            src={expert_img}
                            alt=""
                            className="rounded-3xl"
                          />
                          {/* *************** show n hover icon  */}
                          <div className="icon_box">
                            <div className="icon px-4 ">
                              <ul className="expert_icon_wrapper rounded">
                                <li className="icon facebook">
                                  <span className="tooltip">Facebook</span>
                                  <FaFacebookF />
                                </li>
                                <li className="icon twitter">
                                  <span className="tooltip">Twitter</span>
                                  <RiTwitterXFill />
                                </li>
                                <li className="icon instagram">
                                  <span className="tooltip">Instagram</span>
                                  <FaInstagram />
                                </li>
                                <li className="icon instagram">
                                  <span className="tooltip">YouTube</span>
                                  <FaYoutube />
                                </li>
                                <li className="icon instagram">
                                  <span className="tooltip">Mail</span>
                                  <IoIosMail />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="detail ps-4 pt-3">
                          <div className="expert_name">
                            <h3 className="text-capitalize">lizzie williams</h3>
                          </div>
                          <div className="expert_position">
                            <p>Associate Consultant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ******************************************* col end */}
                </div>
              </div>
            </div>
            {/* *(((((******************************** row *********************************))))) */}
            <div className="row mt-4">
              {/* ************************************ */}
              <div className="col-12 col-lg-3 col-md-6">
                <div className="exper_detail">
                  <div className="card rounded-3xl">
                    <div className="img">
                      <img
                        src={expert_img}
                        alt=""
                        className="rounded-3xl"
                      />
                      {/* *************** show n hover icon  */}
                      <div className="icon_box">
                        <div className="icon px-4 ">
                          <ul className="expert_icon_wrapper rounded">
                            <li className="icon facebook">
                              <span className="tooltip">Facebook</span>
                              <FaFacebookF />
                            </li>
                            <li className="icon twitter">
                              <span className="tooltip">Twitter</span>
                              <RiTwitterXFill />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Instagram</span>
                              <FaInstagram />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">YouTube</span>
                              <FaYoutube />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Mail</span>
                              <IoIosMail />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="detail ps-4 pt-3">
                      <div className="expert_name">
                        <h3 className="text-capitalize">lizzie williams</h3>
                      </div>
                      <div className="expert_position">
                        <p>Associate Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ******************************************* col end */}
              {/* ************************************ */}
              <div className="col-12 col-lg-3 col-md-6">
                <div className="exper_detail">
                  <div className="card rounded-3xl">
                    <div className="img">
                      <img
                        src={expert_img}
                        alt=""
                        className="rounded-3xl"
                      />
                      {/* *************** show n hover icon  */}
                      <div className="icon_box">
                        <div className="icon px-4 ">
                          <ul className="expert_icon_wrapper rounded">
                            <li className="icon facebook">
                              <span className="tooltip">Facebook</span>
                              <FaFacebookF />
                            </li>
                            <li className="icon twitter">
                              <span className="tooltip">Twitter</span>
                              <RiTwitterXFill />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Instagram</span>
                              <FaInstagram />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">YouTube</span>
                              <FaYoutube />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Mail</span>
                              <IoIosMail />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="detail ps-4 pt-3">
                      <div className="expert_name">
                        <h3 className="text-capitalize">lizzie williams</h3>
                      </div>
                      <div className="expert_position">
                        <p>Associate Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ******************************************* col end */}
              {/* ************************************ */}
              <div className="col-12 col-lg-3 col-md-6">
                <div className="exper_detail">
                  <div className="card rounded-3xl">
                    <div className="img">
                      <img
                        src={expert_img}
                        alt=""
                        className="rounded-3xl"
                      />
                      {/* *************** show n hover icon  */}
                      <div className="icon_box">
                        <div className="icon px-4 ">
                          <ul className="expert_icon_wrapper rounded">
                            <li className="icon facebook">
                              <span className="tooltip">Facebook</span>
                              <FaFacebookF />
                            </li>
                            <li className="icon twitter">
                              <span className="tooltip">Twitter</span>
                              <RiTwitterXFill />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Instagram</span>
                              <FaInstagram />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">YouTube</span>
                              <FaYoutube />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Mail</span>
                              <IoIosMail />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="detail ps-4 pt-3">
                      <div className="expert_name">
                        <h3 className="text-capitalize">lizzie williams</h3>
                      </div>
                      <div className="expert_position">
                        <p>Associate Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ******************************************* col end */}
              {/* ************************************ */}
              <div className="col-12 col-lg-3 col-md-6">
                <div className="exper_detail">
                  <div className="card rounded-3xl">
                    <div className="img">
                      <img
                        src={expert_img}
                        alt=""
                        className="rounded-3xl"
                      />
                      {/* *************** show n hover icon  */}
                      <div className="icon_box">
                        <div className="icon px-4 ">
                          <ul className="expert_icon_wrapper rounded">
                            <li className="icon facebook">
                              <span className="tooltip">Facebook</span>
                              <FaFacebookF />
                            </li>
                            <li className="icon twitter">
                              <span className="tooltip">Twitter</span>
                              <RiTwitterXFill />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Instagram</span>
                              <FaInstagram />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">YouTube</span>
                              <FaYoutube />
                            </li>
                            <li className="icon instagram">
                              <span className="tooltip">Mail</span>
                              <IoIosMail />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="detail ps-4 pt-3">
                      <div className="expert_name">
                        <h3 className="text-capitalize">lizzie williams</h3>
                      </div>
                      <div className="expert_position">
                        <p>Associate Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ******************************************* col end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
