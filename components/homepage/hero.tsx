"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface HeroProps {
  heroScale: number
  heroOpacity: number
  heroBlur: number
  appScreenshotY: number
  appScreenshotScale: number
  appScreenshotOpacity: number
  heroContentOpacity: number
}

const Hero = memo(({ 
  heroScale, 
  heroOpacity, 
  heroBlur, 
  appScreenshotY, 
  appScreenshotScale, 
  appScreenshotOpacity, 
  heroContentOpacity 
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 transition-all will-change-transform"
        style={{
          transform: `scale(${heroScale})`,
          opacity: heroOpacity,
          filter: `blur(${heroBlur}px)`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.05)] via-[hsl(var(--primary-200)/0.1)] to-[hsl(var(--primary-300)/0.15)]" />
        {/* <Image
          src="/motivational-coach.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        /> */}
      </div>

      {/* Hero content that fades out */}
      <div 
        className="relative max-w-7xl mx-auto px-6 text-center z-10 transition-opacity duration-300"
        style={{ opacity: heroContentOpacity }}
      >
        <div className="mb-8 flex items-center justify-center">
          <Logo size="xl" showText={false} />
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
          Your Complete AI Health Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground font-body">
          The ultimate health companion combining fitness tracking, nutrition guidance, community support, and AI coaching - all in one beautifully simple app
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="h-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] rounded-2xl px-8 py-4 text-lg font-heading font-semibold">
            Start Your Journey  →
          </Button>

        </div>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground font-body">
          Fitracker revolutionizes your health journey with three ways to track: snap photos, speak to our AI, or type manually. Get personalized daily recommendations, log workouts effortlessly, and connect with a supportive community while our AI coach guides you every step of the way - whether you're a complete beginner or fitness enthusiast.
        </p>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero