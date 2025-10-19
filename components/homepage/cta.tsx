"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const CTA = memo(() => {
  const handleStartFree = () => {
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const handleDownloadApp = () => {
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  return (
    <section className="relative w-full min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/transform.jpg"
        alt="Transform your health journey"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight max-w-[25ch] mx-auto">
          Ready to Transform Your Complete Health Journey?
        </h2>
        
        <p className="text-lg md:text-xl text-white mb-16 max-w-5xl mx-auto leading-relaxed max-w-[60ch] mx-auto">
          Join thousands who've discovered the ultimate health companion that truly guides you through every aspect of wellness. With three ways to track (photo, voice, or manual), daily AI recommendations, comprehensive fitness and nutrition logging, and a supportive community by your side - Fitracker makes lasting health transformation achievable for everyone.
        </p>

        {/* CTA Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Start Free Today Card */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Start Free Today
            </h3>
            
            <p className="text-gray-600 font-body leading-relaxed text-lg max-w-[32ch] mx-auto">
              Begin your health transformation journey with Fitracker's comprehensive tracking.
            </p>

            <Button 
              onClick={handleStartFree}
              className="w-auto h-auto bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white rounded-xl px-12 py-3 font-heading font-medium text-lg shadow-xl transition-all mt-6"
            >
              Start Free Today
            </Button>
          </div>

          {/* Download Fitracker Card */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Download Fitracker
            </h3>
            
            <p className="text-gray-600 font-body leading-relaxed text-lg max-w-[32ch] mx-auto">
              Get started today by downloading Fitracker on the app store.
            </p>

            <Button 
              onClick={handleDownloadApp}
              className="w-auto h-auto bg-[#1a0b3e] hover:bg-[#2a1b4e] text-white rounded-xl px-12 py-3 font-heading font-medium text-lg shadow-xl transition-all mt-6"
            >
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

CTA.displayName = "CTA"

export default CTA