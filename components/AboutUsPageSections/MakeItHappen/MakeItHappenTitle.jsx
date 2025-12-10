
import { LuSaveAll } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";
export default function MakeItHappenTitle() {
  return (
    <>
      <section className="px-50 py-20 md-padding">
        <div className="container-fluid">
          <div className="row  makeit-wrapper ">
            <div className="col-md-12 col-12 col-lg-6 ">
              <div className="sticky_block">
                <div className="make_it_happen_leftblock rounded-3xl">
                  <div className="left_block_content">
                    <h5 className="text-capitalize">we make it happen</h5>
                    <h2 className="text-light text-capitalize">
                      facilitating the hiring process & ensuring a good match
                    </h2>

                    <div className="button flex">
                      <Link href={""} className="flex items-center rounded-3xl">
                        <span>
                          <AiOutlineArrowDown />
                        </span>
                        Start The Process
                        <span>
                          <AiOutlineArrowDown />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-6">
              <div className="makeithappen_block rounded-3xl">
                <div className="second_block">
                  <div className="card">
                    {/* ****************************************** */}
                    <div className="card_title ">
                      <div className="icon flex  items-center">
                        <span>
                          <LuSaveAll />
                        </span>
                        <p>Step 1</p>
                      </div>
                      <hr></hr>
                    </div>
                    {/* ****************************************** */}
                    <div className="card_body">
                      <div className="user_icon">
                        <i>
                          <FiUserPlus />
                        </i>
                      </div>
                      <h3>identify employer’s need</h3>
                      <p>
                        Nunc sed vitae sed tristique nisal dolor tellus are
                        interdum ipsum erat pellentes.
                      </p>
                    </div>
                    {/* *************************************** */}
                  </div>
                </div>
                {/* ******************************************** */}
                <div className="second_block pt-15">
                  <div className="card">
                    {/* ****************************************** */}
                    <div className="card_title ">
                      <div className="icon flex  items-center">
                        <span>
                          <LuSaveAll />
                        </span>
                        <p>Step 1</p>
                      </div>
                      <hr></hr>
                    </div>
                    {/* ****************************************** */}
                    <div className="card_body">
                      <div className="user_icon">
                        <i>
                          <FiUserPlus />
                        </i>
                      </div>
                      <h3>identify employer’s need</h3>
                      <p>
                        Nunc sed vitae sed tristique nisal dolor tellus are
                        interdum ipsum erat pellentes.
                      </p>
                    </div>
                    {/* *************************************** */}
                  </div>
                </div>
                {/* ******************** end .................>>>>>>>>>>>>> */}
                {/* ******************************************** */}
                <div className="second_block pt-15">
                  <div className="card">
                    {/* ****************************************** */}
                    <div className="card_title ">
                      <div className="icon flex  items-center">
                        <span>
                          <LuSaveAll />
                        </span>
                        <p>Step 1</p>
                      </div>
                      <hr></hr>
                    </div>
                    {/* ****************************************** */}
                    <div className="card_body">
                      <div className="user_icon">
                        <i>
                          <FiUserPlus />
                        </i>
                      </div>
                      <h3>identify employer’s need</h3>
                      <p>
                        Nunc sed vitae sed tristique nisal dolor tellus are
                        interdum ipsum erat pellentes.
                      </p>
                    </div>
                    {/* *************************************** */}
                  </div>
                </div>
                {/* ******************** end .................>>>>>>>>>>>>> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
