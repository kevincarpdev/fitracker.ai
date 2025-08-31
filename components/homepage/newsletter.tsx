"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const Newsletter = memo(() => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary-900 via-primary to-primary-600 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" showText={false} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            Stay up to date with
            <br />
            everything we are working on
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-body max-w-3xl mx-auto leading-relaxed">
            Our weekly newsletter outlines what we are building, new features, and fun behind the scenes with the
            company.
          </p>

          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/95 backdrop-blur-sm text-foreground placeholder:text-muted-foreground font-body border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-4 font-heading font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all">
                Join newsletter →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Newsletter.displayName = "Newsletter"

export default Newsletter
