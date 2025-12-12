"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css"
const NavbarServiceDropdown = () => {
    return (
        <>

            <FlyoutLink href="#" FlyoutContent={PricingContent}>
                Pricing
            </FlyoutLink>

        </>
    );
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative  nav-dropdown-link"
        >
            <a href={href} className="relative  nav-link fw-semibold visible  hover:text-indigo-600 no-underline text-decoration-none">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out "
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-15  bg-white p-6 shadow-xl border-t-2 border-blue-700 z-20 navbar_mega_menu_dropdown"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent w-full" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45  d-none" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PricingContent = () => {
    return (
        <section>
            <div className="container">
                <div className="row items-center">
                    <h6 className="drop-title fw-semibold">
                        Service that we provide
                    </h6>
                    <div className="col-lg-4">
                        <div className="  navabar_Services_megaDropDown   ">
                            <div className="mb-3 space-y-3 service_meagdropdown">
                                <div className="navabr_dropdown_item">
                                    <ul>
                                        <li className="mt-4">
                                            <h6 className="fw-semibold">
                                                Softeware Developer
                                            </h6>
                                            <p>
                                                understanding User need and understanding
                                            </p>
                                        </li>
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Web App Development
                                            </h6>
                                            <p>
                                                Mobile app user trend analysis
                                            </p>
                                        </li>
                                        {/* ************************** */}

                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Cryptocurrency Development
                                            </h6>
                                            <p>
                                                Creating Crypto Web & Apps
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                MVP Development
                                            </h6>
                                            <p>
                                                Build MVP Development
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Enterprise Software Development
                                            </h6>
                                            <p>
                                                Measure B2B Scope
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                UX/UI Designing
                                            </h6>
                                            <p>
                                                Creating User centric design
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                AI Development Services
                                            </h6>
                                            <p>
                                                Implementing AI in softwares
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Hire Software Developers
                                            </h6>
                                            <p>
                                                Hire Top Talent as per need
                                            </p>
                                        </li>
                                        {/* ************************** */}

                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* ********************************************************************************** */}
                    <div className="col-lg-4">

                        <div className="  navabar_Services_megaDropDown   ">
                            <div className="mb-3 space-y-3 service_meagdropdown">
                                <div className="navabr_dropdown_item">
                                    <ul className="border-s-2 border-slate-300">
                                        <li className="mt-4">
                                            <h6 className="fw-semibold">
                                                Softeware Developer
                                            </h6>
                                            <p>
                                                understanding User need and understanding
                                            </p>
                                        </li>
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Web App Development
                                            </h6>
                                            <p>
                                                Mobile app user trend analysis
                                            </p>
                                        </li>
                                        {/* ************************** */}

                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Cryptocurrency Development
                                            </h6>
                                            <p>
                                                Creating Crypto Web & Apps
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                MVP Development
                                            </h6>
                                            <p>
                                                Build MVP Development
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Enterprise Software Development
                                            </h6>
                                            <p>
                                                Measure B2B Scope
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                UX/UI Designing
                                            </h6>
                                            <p>
                                                Creating User centric design
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                AI Development Services
                                            </h6>
                                            <p>
                                                Implementing AI in softwares
                                            </p>
                                        </li>
                                        {/* ************************** */}
                                        {/* **************** */}
                                        <li className="mt-4">
                                            <h6 className="fw-semibold mt-2">
                                                Hire Software Developers
                                            </h6>
                                            <p>
                                                Hire Top Talent as per need
                                            </p>
                                        </li>
                                        {/* ************************** */}

                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="  navabar_Services_megaDropDown   ">
                            <div className="mb-3 space-y-3 service_meagdropdown">
                                <div className="navabr_dropdown_item">

                                    <div className="flex flex-col gap-8">
                                        {/* *************************************************************************** */}
                                        <div className="w-full">
                                            <div className="service_megadropdown_content">
                                                <div className="content flex items-center gap-20 justify-between blue rounded-2xl">
                                                    <div className="img">
                                                        <img
                                                            width={100}

                                                            src="/img/mega_menu_img.webp"
                                                            alt="Services preview"
                                                            className="img-fluid rounded"
                                                        />
                                                    </div>
                                                    <div className="content-text">
                                                        <h6>
                                                            App Monetization Strategies: How to Make Money From an App?
                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* ************************************************************************************** */}
                                        {/* *************************************************************************** */}
                                        <div className="w-full">
                                            <div className="service_megadropdown_content">
                                                <div className="content flex items-center gap-20 justify-between yellow rounded-2xl">
                                                    <div className="img">
                                                        <img
                                                            width={100}

                                                            src="/img/mega_menu_img.webp"
                                                            alt="Services preview"
                                                            className="img-fluid rounded"
                                                        />
                                                    </div>
                                                    <div className="content-text">
                                                        <h6>
                                                            App Monetization Strategies: How to Make Money From an App?
                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* ************************************************************************************** */}
                                        {/* *************************************************************************** */}
                                        <div className="w-full">
                                            <div className="service_megadropdown_content">
                                                <div className="content flex items-center gap-20 justify-between pink rounded-2xl">
                                                    <div className="img">
                                                        <img
                                                            width={100}

                                                            src="/img/mega_menu_img.webp"
                                                            alt="Services preview"
                                                            className="img-fluid rounded"
                                                        />
                                                    </div>
                                                    <div className="content-text">
                                                        <h6>
                                                            App Monetization Strategies: How to Make Money From an App?
                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* ************************************************************************************** */}
                                        {/* *************************************************************************** */}
                                        <div className="w-full">
                                            <div className="service_megadropdown_content">
                                                <div className="content flex items-center gap-20 justify-between purple rounded-2xl">
                                                    <div className="img">
                                                        <img
                                                            width={100}

                                                            src="/img/mega_menu_img.webp"
                                                            alt="Services preview"
                                                            className="img-fluid rounded"
                                                        />
                                                    </div>
                                                    <div className="content-text">
                                                        <h6>
                                                            App Monetization Strategies: How to Make Money From an App?
                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* ************************************************************************************** */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default NavbarServiceDropdown;