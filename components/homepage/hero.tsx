"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Image from "next/image"

interface HeroProps {
  heroScale: number
  heroBlur: number
  appScreenshotY: number
  appScreenshotScale: number
  appScreenshotOpacity: number
}

const Hero = memo(({ 
  heroScale, 
  heroBlur, 
  appScreenshotY, 
  appScreenshotScale, 
  appScreenshotOpacity
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with built-in overlay gradient */}
      <div
        className="absolute inset-0 transition-all will-change-transform"
        style={{
          transform: `scale(${heroScale})`,
          filter: `blur(${heroBlur}px)`,
        }}
        aria-hidden="true"
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* Hero content */}
      <div 
        className="relative max-w-5xl mx-auto px-6 text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Your Complete AI Health Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 font-body drop-shadow-md">
          The ultimate health companion combining fitness tracking, nutrition guidance, community support, and AI coaching - all in one beautifully simple app
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.open('https://apps.apple.com/app/fitracker', '_blank')}
            className="h-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-700))] text-white hover:shadow-lg hover:shadow-[hsl(var(--primary-300))]/50 hover:scale-105 rounded-2xl px-10 py-5 text-lg font-heading font-semibold shadow-2xl transition-all duration-300"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero