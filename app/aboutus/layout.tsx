// ******************************************************** Style Links ************
import '../../components/AboutUsPageSections/banner/style.css'
import '../../components/AboutUsPageSections/AboutUsDetail/style.css'
import '../../components/AboutUsPageSections/Services/style.css'
import '../../components/AboutUsPageSections/expertHire/style.css'
import '../../components/AboutUsPageSections/certifiedExperts/style.css'
import '../../components/AboutUsPageSections/futureWithUs/style.css'
import '../../components/AboutUsPageSections/MakeItHappen/style.css'
import '../../components/AboutUsPageSections/ProgressNumber/style.css'
import '../../components/AboutUsPageSections/Awords/style.css'
import "../../components/AboutUsPageSections/Responsive/style.css"



import { Metadata } from 'next';
// ******************************************************************** meta tags ********************************


export const metadata: Metadata = {
    title: "About Us | AialgoTechs Pvt Ltd",
    description: "Learn more about AialgoTechs Pvt Ltd — a technology-driven company offering innovative IT solutions, digital transformation, and AI-powered services.",
    keywords: ["AialgoTechs",
        "About AialgoTechs",
        "About Us",
        "IT Company",
        "Tech Company",
        "Software Solutions"],
    openGraph: {
        title: "About Us | AialgoTechs Pvt Ltd",
        description:
            "Discover who we are at AialgoTechs Pvt Ltd — a company dedicated to delivering smart, scalable, and innovative technology solutions.",
        url: "https://demo.aialgotechs.com/about-us",
        images: ["https://demo.aialgotechs.com/og/about-us-banner.jpg"]
    }
}


export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}