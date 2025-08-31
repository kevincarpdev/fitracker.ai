"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

const CTA = memo(() => {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary-950))] to-[hsl(var(--primary-600))] text-[hsl(var(--primary-foreground))] relative overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
          Ready to Transform Your Complete Health Journey?
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90 font-body max-w-4xl mx-auto leading-relaxed text-[hsl(var(--primary-foreground)/0.8)]">
          Join thousands who've discovered the ultimate health companion that truly guides you through every aspect of wellness. With three ways to track (photo, voice, or manual), daily AI recommendations, comprehensive fitness and nutrition logging, and a supportive community by your side - Fitracker makes lasting health transformation achievable for everyone.
        </p>

        {/* Two CTA Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Book a Call Box */}
          <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-left relative overflow-hidden">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  Start Free Today
                </h3>
                <ArrowDownIcon className="w-6 h-6 text-white/60" />
              </div>
              <p className="text-white/80 font-body leading-relaxed">
                Begin your health transformation journey<br />
                with Fitracker's comprehensive tracking.
              </p>
            </div>

            <Button className="h-auto bg-[hsl(var(--primary-800))] hover:bg-[hsl(var(--primary-900))] text-white rounded-xl px-8 py-3 font-heading font-semibold">
              Start Free Today →
            </Button>

            {/* Phone mockup placeholder */}
            <div className="absolute -right-8 -bottom-8 w-32 h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl transform rotate-12 opacity-30"></div>
          </div>

          {/* Download App Box */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-left relative overflow-hidden">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  Download Fitracker
                </h3>
                <ArrowDownIcon className="w-6 h-6 text-white/60" />
              </div>
              <p className="text-white/80 font-body leading-relaxed">
                Get started today by downloading Fitracker<br />
                on the app store.
              </p>
            </div>

            <Button className="h-auto bg-[hsl(var(--primary-800))] hover:bg-[hsl(var(--primary-700))] text-white rounded-xl px-8 py-3 font-heading font-semibold">
              Download App →
            </Button>

            {/* Phone mockup placeholder */}
            <div className="absolute -right-8 -bottom-8 w-32 h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl transform -rotate-12 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
})

CTA.displayName = "CTA"

export default CTA