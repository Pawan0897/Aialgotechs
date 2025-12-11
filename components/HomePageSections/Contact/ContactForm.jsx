import { usePathname } from "next/navigation";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function ContactForm() {
  const location = usePathname();
  console.log(location, "................????????????");

  console.log("pkkkkkkkkkkkkkkkkkk");

  return (
    <>
      <div className={`section_ninth_contact_form p-10 rounded-2xl ${location.pathname == "/services" ? "bg-form-grey" : "bg-form-blue"} `}>
        <div className="contact_form_bg px-3 py-4 ">
          <div className="contact_title mb-5 ">
            <h3 className="text-light">Request a Service</h3>
            <p className="">
              We make your recruitment challenges simpler by providing <br></br>
              all the guidance, tools and support.
            </p>
          </div>
          <div className="contact_form ">
            <div className="row">
              {/* ******************* */}
              <div className="col-lg-6 col-md-12 mb-7">
                <input
                  type="text "
                  className=" form-control contact_input "
                  placeholder="First Name"
                />
              </div>
              {/* ********************* */}
              <div className="col-lg-6 col-md-12 mb-7">
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
              <div className="col-md-12 mb-7">
                <input
                  type="text "
                  className=" form-control contact_input"
                  placeholder="Phone"
                />
              </div>
              {/* ********************* */}
              <div className="col-lg-6 col-md-12 mb-7">
                <input
                  type="text "
                  className=" form-control contact_input"
                  placeholder="Job Title"
                />
              </div>
              {/* ********************* */}
              <div className="col-lg-6 col-md-12 mb-7">
                <input
                  type="text "
                  className=" form-control contact_input"
                  placeholder="Company (if any)"
                />
              </div>
              {/* ********************* */}
              <div className="col-md-12 mb-7">
                <input
                  type="text "
                  className=" form-control contact_input"
                  placeholder="I'm interested in..."
                />
              </div>
              {/* ********************* */}
              <div className="col-md-12 mb-7">
                <textarea
                  type="text "
                  className="form-control textarea_input text-black"
                  placeholder="Message"
                  rows={5}
                />
              </div>
              {/* ********************* */}
              <div className="section_fourth_button flex justify-end">
                <div className={`contact_button rounded-3xl ${location.pathname == "/services" ? "" : "btn_yellow"} `}>
                  <button className={`${location.pathname === "/services" ? "btn_yellow" : ""} `}>
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
    </>
  );
}
