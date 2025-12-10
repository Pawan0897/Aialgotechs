"use client"
import Contactanner from '../../components/ContactUsPageSections/ContactBanner/Contactanner'
import Header from '../../components/Header'
import MessageForm from '../../components/ContactUsPageSections/ContactMessageForm/MessageForm'
// import Map from '../../components/ContactUsPageSections/ContactMap/Map'
import AskedQuestionSection from '../../components/ContactUsPageSections/FrequentlyAskedQuestion/AskedQuestionSection'
import Footer from '../../components/Footer'
import "../../components/ContactUsPageSections/Responsive/style.css"
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("../../components/ContactUsPageSections/ContactMap/Map"), {
    ssr: false,
});

function ContactUsPage() {
    return (
        <>
            <Header />
            <Contactanner />

            <MessageForm />

            <Map />

            <AskedQuestionSection />


            <Footer />

        </>
    )
}

export default ContactUsPage