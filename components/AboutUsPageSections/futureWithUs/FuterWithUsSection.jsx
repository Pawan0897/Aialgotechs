

import ToggleButton from "./ToggleButton";
export default function FuterWithUsSection() {
  return (
    <>
      <section className="px-50 py-20 md-padding">
        <div className="container-fluid">
          {/* ************************************ */}
          <div className="row items-center justify-center">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="future_section">
                {/* ************************************ */}
                <div className="left_block">
                  <div className="block_img ">
                    <img src="/Aboutus/recruitment-feature.webp" className="rounded-3xl" alt="test" />
                  </div>
                </div>
                {/* ************************************ */}
              </div>
            </div>
            {/* ****************** colmdend */}
            <div className="col-12 col-lg-6 col-md-12">
              <div className="right_block">
                <div className="title ">
                  <h5 className="text-capitalize">start bright future with us</h5>
                  {/* ********************************** */}
                  <h2 className="text-capitalize ">
                    Get industry-leading recruitment plans
                  </h2>
                  {/* ********************************** */}
                  <p className="pt-3">
                    At mattis elementum semper tellus donec ornare. Dis dolor
                    pellentesque dui auctor urna nam lectus.
                  </p>
                  {/* ********************************** */}
                </div>
                <div className="block_collapse">
                  <ToggleButton />
                </div>
              </div>
            </div>
          </div>
          {/* ************************************ */}
        </div>
      </section>
    </>
  );
}
