import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import ServiceAreas from "@/components/service-areas"
import Reviews from "@/components/reviews"
import BlogSection from "@/components/blog-section"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flood Damage & Restoration Services in Long Island, NY | Tomcon Restorations",
  description:
    "Fast, reliable flood damage restoration, water extraction, and mold remediation services in Long Island, NY. 24/7 emergency response. Serving Nassau County, Suffolk County, and NYC boroughs.",
  keywords:
    "flood restoration Long Island, water damage repair, mold remediation, emergency flood services, storm damage restoration, Nassau County, Suffolk County",
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Reviews />
      <BlogSection />
      <Contact />
    </main>
  )
}
