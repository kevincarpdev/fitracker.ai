"use client"

import { memo } from "react"
import { useScrollEffects } from "@/hooks/use-scroll-effects"
import Navigation from "@/components/homepage/navigation"
import Hero from "@/components/homepage/hero"
import About from "@/components/homepage/about"
import Features from "@/components/homepage/features"
import Community from "@/components/homepage/community"
import Testimonials from "@/components/homepage/testimonials"
import Pricing from "@/components/homepage/pricing"
// import AppShowcase from "@/components/homepage/app-showcase"
import CTA from "@/components/homepage/cta"
import FAQ from "@/components/homepage/faq"
import Contact from "@/components/homepage/contact"
import Newsletter from "@/components/homepage/newsletter"
import Footer from "@/components/homepage/footer"

const FitrackerApp = memo(() => {
  const { 
    heroScale, 
    heroBlur, 
    navOpacity,
    appScreenshotY,
    appScreenshotScale,
    appScreenshotOpacity
  } = useScrollEffects()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation navOpacity={navOpacity} />
      <Hero 
        heroScale={heroScale} 
        heroBlur={heroBlur}
        appScreenshotY={appScreenshotY}
        appScreenshotScale={appScreenshotScale}
        appScreenshotOpacity={appScreenshotOpacity}
      />
      {/* <AppShowcase /> */}
      <About />
      <Features />
      <Community />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  )
})

FitrackerApp.displayName = "FitrackerApp"

export default FitrackerApp

