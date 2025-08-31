"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[hsl(var(--primary-300))]">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 transition-all will-change-transform"
        style={{
          transform: `scale(${heroScale})`,
          filter: `blur(${heroBlur}px)`,
        }}
        aria-hidden="true"
      >
        {/* <Image
          src="/motivational-coach.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        /> */}
      </div>

      {/* Hero content */}
      <div 
        className="relative max-w-5xl mx-auto px-6 text-center z-10"
      >
        <div className="mb-8 flex items-center justify-center">
          <Logo size="xl" showText={false} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[hsl(var(--primary))]">
          Your Complete AI Health Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground font-body">
          The ultimate health companion combining fitness tracking, nutrition guidance, community support, and AI coaching - all in one beautifully simple app
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="h-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] rounded-2xl px-8 py-4 text-lg font-heading font-semibold">
            Start Your Journey  →
          </Button>

        </div>
        <p className="text-base max-w-4xl mx-auto leading-relaxed text-muted-foreground font-body">
          Fitracker revolutionizes your health journey with three ways to track: snap photos, speak to our AI, or type manually. Get personalized daily recommendations, log workouts effortlessly, and connect with a supportive community while our AI coach guides you every step of the way - whether you're a complete beginner or fitness enthusiast.
        </p>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero