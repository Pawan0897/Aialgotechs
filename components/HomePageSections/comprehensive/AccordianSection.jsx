import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { GoPlusCircle } from "react-icons/go";
import "./style.css";
import { BsArrowUpCircle } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
export default function AccordianSection() {
    const [activeKey, setActiveKey] = useState(null);

    const handleMouseEnter = (key) => {
        setActiveKey(key); 
    };

    const handleMouseLeave = () => {
        setActiveKey(null);
    };



    return (
        <>
            <section className=" section_comprehencive  py-20 px-30">
                <div className="container-fluid">
                    <div className="accordian_top_title mb-20">
                        <h2>Comprehensive <span className="text-blue-600">Digital Solutions</span></h2>
                        <p>From initial concept to launch and ongoing support, we provide end-to-end digital solutions tailored to your needs.</p>

                    </div>
                    <Accordion activeKey={activeKey}>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Accordion.Item
                            eventKey="0"
                            onMouseEnter={() => handleMouseEnter("0")}
                            onMouseLeave={handleMouseLeave}
                            className={`${activeKey === "0" ? " open" : " "}`}
                        >
                            <Accordion.Header >
                                <div className="accordian_header flex justify-between w-full">
                                    <div className="accordian_title">
                                        <h3>Experience Elevation</h3>
                                    </div>
                                    <div className="accordian_icon flex items-center justify-center">
                                        { /******* */
                                            activeKey != "0" ?
                                                /******* */
                                                <span className="ms-2 text-3xl "><GoPlusCircle /></span>
                                                // *********
                                                : <div className="show_arrow flex justify-center items-center">
                                                    {/* ************* */}
                                                    <h4 className=" flex justify-center items-center ">See Details  </h4>
                                                    {/* ************* */}
                                                    <span className=" text-2xl ms-2 text-white
                                                "><MdArrowOutward /></span>
                                                    {/* ********** */}
                                                </div>
                                        }

                                    </div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion_body">
                                    <p className=" "> In this experience-led economy, we help you build digital solutions that put your consumer right at the center stage. Through careful, iterative research and prototyping, we validate unexpressed needs and help integrate all that we learn along the way seamlessly into the products. We are your trusted partner in building digital solutions from the ground up, optimizing existing ones, and completing experience modernization and transformation</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Accordion.Item
                            eventKey="1"
                            onMouseEnter={() => handleMouseEnter("1")}
                            onMouseLeave={handleMouseLeave}
                            className={`${activeKey === "1" ? " open" : " "}`}
                        >
                            <Accordion.Header >
                                <div className="accordian_header flex justify-between w-full">
                                    <div className="accordian_title">
                                        <h3>Experience Elevation</h3>
                                    </div>
                                    <div className="accordian_icon flex items-center justify-center">
                                        { /******* */
                                            activeKey != "1" ?
                                                /******* */
                                                <span className="ms-2 text-3xl "><GoPlusCircle /></span>
                                                // *********
                                                : <div className="show_arrow flex justify-center items-center">
                                                    {/* ************* */}
                                                    <h4 className=" flex justify-center items-center ">See Details  </h4>
                                                    {/* ************* */}
                                                    <span className=" text-2xl ms-2 text-white
                                                "><MdArrowOutward /></span>
                                                    {/* ********** */}
                                                </div>
                                        }

                                    </div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion_body">
                                    <p className=" "> In this experience-led economy, we help you build digital solutions that put your consumer right at the center stage. Through careful, iterative research and prototyping, we validate unexpressed needs and help integrate all that we learn along the way seamlessly into the products. We are your trusted partner in building digital solutions from the ground up, optimizing existing ones, and completing experience modernization and transformation</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Accordion.Item
                            eventKey="2"
                            onMouseEnter={() => handleMouseEnter("2")}
                            onMouseLeave={handleMouseLeave}
                            className={`${activeKey === "2" ? " open" : " "}`}
                        >
                            <Accordion.Header >
                                <div className="accordian_header flex justify-between w-full">
                                    <div className="accordian_title">
                                        <h3>Experience Elevation</h3>
                                    </div>
                                    <div className="accordian_icon flex items-center justify-center">
                                        { /******* */
                                            activeKey != "2" ?
                                                /******* */
                                                <span className="ms-2 text-3xl "><GoPlusCircle /></span>
                                                // *********
                                                : <div className="show_arrow flex justify-center items-center">
                                                    {/* ************* */}
                                                    <h4 className=" flex justify-center items-center ">See Details  </h4>
                                                    {/* ************* */}
                                                    <span className=" text-2xl ms-2 text-white
                                                "><MdArrowOutward /></span>
                                                    {/* ********** */}
                                                </div>
                                        }

                                    </div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion_body">
                                    <p className=" "> In this experience-led economy, we help you build digital solutions that put your consumer right at the center stage. Through careful, iterative research and prototyping, we validate unexpressed needs and help integrate all that we learn along the way seamlessly into the products. We are your trusted partner in building digital solutions from the ground up, optimizing existing ones, and completing experience modernization and transformation</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Accordion.Item
                            eventKey="3"
                            onMouseEnter={() => handleMouseEnter("3")}
                            onMouseLeave={handleMouseLeave}
                            className={`${activeKey === "3" ? " open" : " "}`}
                        >
                            <Accordion.Header >
                                <div className="accordian_header flex justify-between w-full">
                                    <div className="accordian_title">
                                        <h3>Experience Elevation</h3>
                                    </div>
                                    <div className="accordian_icon flex items-center justify-center">
                                        { /******* */
                                            activeKey != "3" ?
                                                /******* */
                                                <span className="ms-2 text-3xl "><GoPlusCircle /></span>
                                                // *********
                                                : <div className="show_arrow flex justify-center items-center">
                                                    {/* ************* */}
                                                    <h4 className=" flex justify-center items-center ">See Details  </h4>
                                                    {/* ************* */}
                                                    <span className=" text-2xl ms-2 text-white
                                                "><MdArrowOutward /></span>
                                                    {/* ********** */}
                                                </div>
                                        }

                                    </div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion_body">
                                    <p className=" "> In this experience-led economy, we help you build digital solutions that put your consumer right at the center stage. Through careful, iterative research and prototyping, we validate unexpressed needs and help integrate all that we learn along the way seamlessly into the products. We are your trusted partner in building digital solutions from the ground up, optimizing existing ones, and completing experience modernization and transformation</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Accordion.Item
                            eventKey="4"
                            onMouseEnter={() => handleMouseEnter("4")}
                            onMouseLeave={handleMouseLeave}
                            className={`${activeKey === "4" ? " open" : " "}`}
                        >
                            <Accordion.Header >
                                <div className="accordian_header flex justify-between w-full">
                                    <div className="accordian_title">
                                        <h3>Experience Elevation</h3>
                                    </div>
                                    <div className="accordian_icon flex items-center justify-center">
                                        { /******* */
                                            activeKey != "4" ?
                                                /******* */
                                                <span className="ms-2 text-3xl "><GoPlusCircle /></span>
                                                // *********
                                                : <div className="show_arrow flex justify-center items-center">
                                                    {/* ************* */}
                                                    <h4 className=" flex justify-center items-center ">See Details  </h4>
                                                    {/* ************* */}
                                                    <span className=" text-2xl ms-2 text-white
                                                "><MdArrowOutward /></span>
                                                    {/* ********** */}
                                                </div>
                                        }

                                    </div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion_body">
                                    <p className=" "> In this experience-led economy, we help you build digital solutions that put your consumer right at the center stage. Through careful, iterative research and prototyping, we validate unexpressed needs and help integrate all that we learn along the way seamlessly into the products. We are your trusted partner in building digital solutions from the ground up, optimizing existing ones, and completing experience modernization and transformation</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Accordion.Item
                            eventKey="5"
                            onMouseEnter={() => handleMouseEnter("5")}
                            onMouseLeave={handleMouseLeave}
                            className={`${activeKey === "5" ? " open" : " "}`}
                        >
                            <Accordion.Header >
                                <div className="accordian_header flex justify-between w-full">
                                    <div className="accordian_title">
                                        <h3>Experience Elevation</h3>
                                    </div>
                                    <div className="accordian_icon flex items-center justify-center">
                                        { /******* */
                                            activeKey != "5" ?
                                                /******* */
                                                <span className="ms-2 text-3xl "><GoPlusCircle /></span>
                                                // *********
                                                : <div className="show_arrow flex justify-center items-center">
                                                    {/* ************* */}
                                                    <h4 className=" flex justify-center items-center ">See Details  </h4>
                                                    {/* ************* */}
                                                    <span className=" text-2xl ms-2 text-white
                                                "><MdArrowOutward /></span>
                                                    {/* ********** */}
                                                </div>
                                        }

                                    </div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion_body">
                                    <p className=" "> In this experience-led economy, we help you build digital solutions that put your consumer right at the center stage. Through careful, iterative research and prototyping, we validate unexpressed needs and help integrate all that we learn along the way seamlessly into the products. We are your trusted partner in building digital solutions from the ground up, optimizing existing ones, and completing experience modernization and transformation</p>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


                        {/* *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    </Accordion>
                </div>
            </section>

        </>
    )
}
