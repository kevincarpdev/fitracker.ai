"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Download } from "lucide-react"
import Image from "next/image"

const CTA = memo(() => {
  const handleStartFree = () => {
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const handleDownloadApp = () => {
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  return (
    <section className="py-32 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary-700))] to-[hsl(var(--primary-900))] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-heading font-semibold text-white">Start Your Transformation Today</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
          Ready to Transform Your
          <br />
          <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Health Journey?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 opacity-90 font-body max-w-4xl mx-auto leading-relaxed">
          Join thousands who've discovered the ultimate AI-powered health companion that guides you through every aspect of wellness
        </p>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Start Free Card */}
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-left relative overflow-hidden border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Start Free Today
              </h3>
              
              <p className="text-white/80 font-body leading-relaxed mb-8 text-lg">
                Begin your health transformation journey with Fitracker's comprehensive AI-powered tracking, coaching, and community support
              </p>

              <Button 
                onClick={handleStartFree}
                className="w-full h-auto bg-white text-[hsl(var(--primary))] hover:bg-white/90 rounded-full px-8 py-5 font-heading font-bold text-lg shadow-xl transition-all group/btn"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Download App Card */}
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-left relative overflow-hidden border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Download Now
              </h3>
              
              <p className="text-white/80 font-body leading-relaxed mb-8 text-lg">
                Get the Fitracker app on your device and start tracking with photos, voice, or manual input in seconds
              </p>

              <Button 
                onClick={handleDownloadApp}
                className="w-full h-auto bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 rounded-full px-8 py-5 font-heading font-bold text-lg backdrop-blur-sm transition-all group/btn"
              >
                <Download className="w-5 h-5 mr-2 group-hover/btn:translate-y-1 transition-transform" />
                Download App
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
          </div>
        </div>

        {/* Feature list */}
        <div className="flex flex-wrap gap-8 justify-center items-center text-base text-white/80 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span>Free Forever Plan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
})

CTA.displayName = "CTA"

export default CTA