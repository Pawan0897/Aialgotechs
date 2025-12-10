import { Metadata } from "next";
// *************************************************************************
import "../../components/ServicePageSections/Banner/style.css";
import "../../components/ServicePageSections/Requirement/style.css";
import "../../components/ServicePageSections/Staffing/style.css";
import "../../components/ServicePageSections/ScrollStack/style.css";
import "../../components/ServicePageSections/TalentSourcing/style.css";
import "../../components/ServicePageSections/Request&Service/style.css";
// **************************************************************************************************
export const metadata: Metadata = {
    title: "Our Services | AialgoTechs Pvt Ltd",
    description:
        "Explore the professional IT and software services offered by AialgoTechs Pvt Ltd, including web development, AI automation, digital solutions, and more.",
    keywords: [
        "AialgoTechs services",
        "IT services",
        "software development",
        "AI solutions",
        "web development",
        "digital transformation",
    ],
    openGraph: {
        title: "Our Services | AialgoTechs Pvt Ltd",
        description:
            "AialgoTechs Pvt Ltd provides a wide range of IT services including AI solutions, digital transformation, software development, and enterprise systems.",
        url: "https://demo.aialgotechs.com/services",
        images: ["https://demo.aialgotechs.com/og/services-banner.jpg"],
    },
};
// ************************************************************************************************************
export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div>{children}</div>

    );
}
