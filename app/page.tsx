"use client"

import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { CoreModules } from "@/components/sections/core-modules"
import { FeaturesDetailed } from "@/components/sections/features-detailed"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { Metrics } from "@/components/sections/metrics"
import { CTASection } from "@/components/sections/cta-section"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CoreModules />
      <FeaturesDetailed />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Metrics />
      <CTASection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
