import { AiOutlineArrowDown } from "react-icons/ai";


export default function MessageForm() {
  return (
    <>
      <section className="px-50 py-20  md-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info">
                <div className="contact-title">
                  <h2>let’s craft your future – empowering talent</h2>
                </div>
                <div className="address">
                  {/* *************** */}
                  <div className="adress_info">
                    <h5>head office</h5>
                    <p>
                      101 Main Street, Queens, New York <br></br> United States
                      – 11435
                    </p>
                  </div>
                  {/* *************** */}
                  <div className="adress_info">
                    <h5>email</h5>
                    <p>info[at]avada-company.com</p>
                  </div>
                  {/* ********************* */}
                  <div className="adress_info">
                    <h5>call helpline</h5>
                    <h2>+1 (800) 555 5555</h2>
                    <p>[Monday to Friday | 9:00 AM – 6:00 PM]</p>
                  </div>
                  {/* ************************ */}
                </div>
              </div>
            </div>
            {/* ************************************************ */}
            <div className="col-lg-8 p-0">
              <div className="section_ninth_contact_form p-10 rounded-2xl bg-form-grey ">
                <div className="contact_form_bg ">
                  <div className="contact_title mb-5 ">
                    <h3 className="">Send Message</h3>
                  </div>
                  {/* ************************************************************************ */}
                  <div className="contact_form ">
                    <div className="row">
                      {/* ******************* */}
                      <div className="col-md-6 mb-7">
                        <input
                          type="text "
                          className=" form-control contact_input "
                          placeholder="First Name"
                        />
                      </div>
                      {/* ********************* */}
                      <div className="col-md-6 mb-7">
                        <input
                          type="text "
                          className=" form-control contact_input"
                          placeholder="Last Name"
                        />
                      </div>
                      {/* ********************* */}
                      <div className="col-md-12 mb-7">
                        <input
                          type="text "
                          className=" form-control contact_input"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      {/* ********************* */}

                      {/* ********************* */}
                      <div className="col-md-6 mb-7">
                        <input
                          type="text "
                          className=" form-control contact_input"
                          placeholder="Job Title"
                        />
                      </div>
                      {/* ********************* */}
                      <div className="col-md-6 mb-7">
                        <input
                          type="text "
                          className=" form-control contact_input"
                          placeholder="Company (if any)"
                        />
                      </div>
                      {/* ********************* */}
                      {/* ********************* */}
                      <div className="col-md-12 mb-7">
                        <textarea
                          type="text "
                          className=" form-control  textarea_input text-black"
                          placeholder="Message"
                          rows={5}
                        />
                      </div>
                      {/* ********************* */}
                      <div className="section_fourth_button flex justify-end">
                        <div className="contact_button rounded-3xl">
                          <button className="">
                            Send Message{" "}
                            <span>
                              <AiOutlineArrowDown />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
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
