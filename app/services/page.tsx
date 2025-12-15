
"use client"
import ServiceBanner from "../../components/ServicePageSections/Banner/ServiceBanner";
import Header from "../../components/Header";
import RequirementSection from "../../components/ServicePageSections/Requirement/RequirementSection";
import StaffingSection from "../../components/ServicePageSections/Staffing/StaffingSection";
import Card from "../../components/ServicePageSections/ScrollStack/Card";
import Page from "../../components/ServicePageSections/TalentSourcing/Page";
import Footer from "../../components/Footer";
import MissionPage from "../../components/ServicePageSections/Request&Service/MissionPage";
import "../../components/ServicePageSections/Responsive/style.css";
import ContactBlock from "../../components/HomePageSections/Contact/ContactBlock"
import Swiper from "../../components/ServicePageSections/Swiper/Swiper_scroll"
// import FetchHome from "../../components/ServicePageSections/Scroll/Page"
function ServicesPage() {
    return (
        <>
            <Header />
            <ServiceBanner />
            <RequirementSection />
            <StaffingSection />
            {/* <Card /> */}

            {/* <TryCard /> */}
            {/* <FetchHome /> */}

            <Swiper />
            <Page />
            <MissionPage />
            <ContactBlock />
            <Footer />



        </>
    )
}

export default ServicesPage