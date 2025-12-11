
export default function Contactanner() {
  return (
    <>
      <section className="aboutUs">
        <div className="container-fluid">
          <div className="row justify-center  items-center">
            {/* ******************************** */}
            <div className="col-12 col-md-12 col-lg-7">
              {/* ******************************** */}
              <div className="banner pbl">
                <div className="contactBanner  flex justify-center items-center rounded-3xl">
                  <div className="bannerContent ">
                    <h2 className="text-capitalize text-light">Contact Us</h2>
                    <p className="text-light text-center text-capitalize ">
                      contact us
                    </p>
                  </div>
                </div>
              </div>
              {/* ******************************** */}
            </div>
            {/* ******************************** */}
            <div className="col-12 col-lg-5 d-none d-lg-block">
              {/* ******************************** */}
              <div className="bannerImage pbr ">
                <img src="/Aboutus/aboutus.webp" className="rounded-3xl" alt="" />
              </div>
              {/* ******************************** */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
