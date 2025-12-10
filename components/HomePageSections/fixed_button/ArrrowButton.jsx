import { useEffect, useState } from "react";
import "./style.css";
import { TiArrowUpThick } from "react-icons/ti";
export default function ArrrowButton() {
  const [visible, setVisible] = useState(false);
  // ********************************************
  useEffect(() => {
    const toggeladd = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    // *******************************
    window.addEventListener("scroll", toggeladd);
    return () => window.removeEventListener("scroll", toggeladd);
  }, []);
  // ********************************************
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={() => scrollToTop()}
        className={`${visible ? "showBtn" : ""}  scrollToTopBtn `}
      >
        <span className="animate-bounce">
          <TiArrowUpThick />
        </span>
      </button>
    </>
  );
}
