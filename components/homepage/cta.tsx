"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"

const CTA = memo(() => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary-600 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          Ready to Transform Your Complete Health Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90 font-body max-w-4xl mx-auto leading-relaxed">
          Join thousands who've discovered the ultimate health companion that truly guides you through every aspect of wellness. With three ways to track (photo, voice, or manual), daily AI recommendations, comprehensive fitness and nutrition logging, and a supportive community by your side - Fitracker makes lasting health transformation achievable for everyone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-4 text-lg font-heading font-semibold">
            Start Free Today
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-4 text-lg font-heading font-semibold">
            Watch Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg px-6 py-3 font-body">
            Download on the App Store
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg px-6 py-3 font-body">
            Get it on Google Play
          </Button>
        </div>
      </div>
    </section>
  )
})

CTA.displayName = "CTA"

export default CTA