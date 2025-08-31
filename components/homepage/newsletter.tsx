"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"

const Newsletter = memo(() => {
  return (
    <section className="py-32 bg-gradient-to-r from-[hsl(var(--primary-950))] to-[hsl(var(--primary-600))] text-primary-foreground relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center bg-[hsl(var(--primary-500))] rounded-3xl py-10 px-12">
          <h2 className="text-5xl font-heading font-bold mb-4 text-[hsl(var(--primary-foreground))]">
            Stay up to date with
            <br />
            everything we are working on
          </h2>
          <p className="text-lg mb-12 opacity-90 font-body max-w-3xl mx-auto text-[hsl(var(--primary-foreground)/0.8)] max-w-lg">
            Our weekly newsletter outlines what we are building, new features, and fun behind the scenes with the
            company.
          </p>

          <div className="max-w-sm mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-sm text-foreground placeholder:text-muted-foreground font-body border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <Button className="h-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] rounded-2xl px-8 py-4 font-heading font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all text-lg cursor-pointer">
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
