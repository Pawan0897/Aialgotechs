import Link from "next/link";
import { useState } from "react";
import Fade from "react-bootstrap/Fade";
import Accordian from "./Accordian"
export default function ToggleButton() {
  const [open, setOpen] = useState("mission");
  const handleClick = (e) => {
    if (open !== e) {
      setOpen(e);
    }
  };

  return (
    <>
      {/* **************************************** tabs >>>>>>>>>>>>>>>>>>>>>>........>>>>>>>  */}

      <div className="toggle_button mt-5 d-none d-lg-block ">
        <button

          onClick={() => handleClick("mission")}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Mission
        </button>
        <button

          onClick={() => handleClick("integrity")}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Integrity
        </button>
        <button

          onClick={() => handleClick("expertise")}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Expertise
        </button>
      </div>
      <Fade in={open === "mission"}>
        <div
          id="example-fade-text"
          className="ps-3"
          style={{ display: open === "mission" ? "block" : "none" }}
        >
          <p className="d-none d-lg-block d-md-none">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Fade>
      <Fade in={open === "integrity"}>
        <div
          id="example-fade-text"
          className="ps-3"
          style={{ display: open === "integrity" ? "block" : "none" }}
        >
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Fade>
      <Fade in={open === "expertise"}>
        <div
          id="example-fade-text"
          className="ps-3"
          style={{ display: open === "expertise" ? "block" : "none" }}
        >
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Fade>

      {/* ************************************************************* on mobile view >>>>>>>>>> show accordian >>>> */}
      <div className="accordian_box d-block d-lg-none">
        <Accordian />
      </div>
    </>
  );
}
