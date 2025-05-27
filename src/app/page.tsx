"use client"
import Hero from "../components/Hero"
import About from "../components/About"
import WhyChooseUs from "../components/WhyChooseUs"
import Services from "../components/Services"
import FeaturedProjects from "../components/FeaturedProjects"
import Process from "../components/Process"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
import FinalCTA from "../components/FinalCTA"
import StatsSection from "@/components/StatsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <StatsSection/>
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
