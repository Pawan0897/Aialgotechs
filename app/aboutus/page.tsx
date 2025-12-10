
"use client"
import Header from '../../components/Header'
import AboutUsBanner from '../../components/AboutUsPageSections/banner/AboutUsBanner'
import Section from '../../components/AboutUsPageSections/AboutUsDetail/Section'
import Services from '../../components/AboutUsPageSections/Services/Services'
import HiringSection from '../../components/AboutUsPageSections/expertHire/HiringSection'
import ExpertSection from '../../components/AboutUsPageSections/certifiedExperts/ExpertSection'
import FuterWithUsSection from '../../components/AboutUsPageSections/futureWithUs/FuterWithUsSection'
import MakeItHappenTitle from '../../components/AboutUsPageSections/MakeItHappen/MakeItHappenTitle'
import Progress_Number_section from '../../components/AboutUsPageSections/ProgressNumber/Progress_Number_section'
import Awords_section from '../../components/AboutUsPageSections/Awords/Awords_section'
import Footer from '../../components/Footer'
import "../../components/AboutUsPageSections/Responsive/style.css"
export default function AboutUsPage() {
  return (
    <>
      <Header />
      <AboutUsBanner />
      <Section />
      <Services />
      <HiringSection />
      <ExpertSection />
      <FuterWithUsSection />
      <MakeItHappenTitle />
      <Progress_Number_section />
      <Awords_section />
      <Footer />
    </>
  )
}
