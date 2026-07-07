import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CoursesSection from "@/components/courses-section"
import WhyUsSection from "@/components/why-us-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* offset for fixed navbar */}
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <CoursesSection />
        <WhyUsSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
