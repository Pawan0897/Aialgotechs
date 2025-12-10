
import { Metadata } from 'next'
// ***********************************************************************************
import '../../components/ContactUsPageSections/ContactBanner/style.css'
import '../../components/ContactUsPageSections/ContactMessageForm/style.css'
import '../../components/ContactUsPageSections/ContactMap/style.css'
import '../../components/ContactUsPageSections/FrequentlyAskedQuestion/style.css'
// *********************************************************************************
import "leaflet/dist/leaflet.css";
export const metadata: Metadata = {
    title: "Contact Us | AialgoTechs Pvt Ltd",
    description:
        "Get in touch with AialgoTechs Pvt Ltd for professional support, service inquiries, or collaborations. We're here to help you with all your IT needs.",
    keywords: [
        "contact AialgoTechs",
        "contact us",
        "IT support",
        "customer service",
        "AialgoTechs communication"
    ],
    openGraph: {
        title: "Contact Us | AialgoTechs Pvt Ltd",
        description:
            "Reach out to AialgoTechs Pvt Ltd for inquiries, support, or business partnerships. We’re always ready to assist.",
        url: "https://demo.aialgotechs.com/contact-us",
        images: ["https://demo.aialgotechs.com/og/contact-us-banner.jpg"]
    }
};


export default function ContactusLayout({ children }: { children: React.ReactNode }) {
    return (


        <div>

            {children}
        </div>

    )
}