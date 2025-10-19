"use client"

import { memo, useState } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

const Footer = memo(() => {
  const [email, setEmail] = useState("")

  const footerLinks = {
    product: [
      { href: "#features", label: "How It Works" },
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faqs", label: "FAQs" }
    ],
    company: [
      { href: "#community", label: "Community" },
      { href: "#about", label: "About Fitracker" },
      { href: "#contact", label: "Contact" }
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" }
    ]
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
  }

  return (
    <footer className="relative bg-gradient-to-b from-white via-[#1F005C]/15 to-white overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative max-w-[1200px] mx-auto px-6 pt-10 sm:pt-24 pb-12 z-10">
        <div className="bg-white rounded-[10px] py-[90px] px-8 flex flex-col items-center gap-10 shadow-sm">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[#1F005C]">
              Stay up to date with
              <br />
              everything we are working on
            </h2>
            <p className="text-lg text-[#1F005C]/70 font-body max-w-2xl mx-auto">
              Our weekly newsletter outlines what we are building, new features, and fun behind the scenes with the company.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md w-full">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 rounded-xl bg-white text-foreground placeholder:text-muted-foreground font-body border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1F005C]/50 transition-all"
                required
              />
              <Button 
                type="submit"
                className="h-auto bg-[#1F005C] text-white hover:bg-[#1F005C]/90 rounded-xl px-8 py-4 font-heading font-semibold shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Start Premium Trial
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 lg:pt-12">
          {/* Logo and Tagline Row */}
          <div className="mb-8">
            <div className="mb-2">
              <Logo size="md" showText={false} />
            </div>
            <p className="text-sm text-[#1F005C] font-body">
              Your Complete AI Health Companion
            </p>
          </div>

          {/* Contact and Navigation Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 items-start">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg p-4 shadow-sm w-full">
                <p className="font-semibold text-[#1F005C] font-heading mb-4 text-base">Get in touch</p>
                <div className="space-y-2 text-sm text-[#1F005C]/80 font-body">
                  <p>Want to reach out? Contact us at:</p>
                  <a href="mailto:hello@fitracker.ai" className="text-[#1F005C] hover:text-[#1F005C]/80 transition-colors block font-medium">
                    hello@fitracker.ai
                  </a>
                  <div className="pt-4 space-y-1">
                    <p className="font-semibold text-[#1F005C]">Fitracker, Inc</p>
                    <p>611 S Dupont Highway</p>
                    <p>Dover 19901 DE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Gap Column */}
            <div className="hidden md:block"></div>

            {/* Product */}
            <div className="md:col-span-1">
              <h3 className="text-base font-heading font-bold mb-3 text-[#1F005C]">Product</h3>
              <div className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-[#1F005C]/70 hover:text-[#1F005C] transition-colors font-body"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="md:col-span-1">
              <h3 className="text-base font-heading font-bold mb-3 text-[#1F005C]">Company</h3>
              <div className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-[#1F005C]/70 hover:text-[#1F005C] transition-colors font-body"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="md:col-span-1">
              <h3 className="text-base font-heading font-bold mb-3 text-[#1F005C]">Legal</h3>
              <div className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-[#1F005C]/70 hover:text-[#1F005C] transition-colors font-body"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        {/* Footer bottom */}
        <div className="py-8 border-t border-[#1F005C]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#1F005C]/60 font-body">
              © 2025 Fitracker. All rights reserved
            </p>
            <div className="flex items-center gap-4 text-sm text-[#1F005C]/60 font-body">
              <a href="#" className="hover:text-[#1F005C] transition-colors">@FiTracker</a>
              <a href="#" className="hover:text-[#1F005C] transition-colors">@FiTrackerApp</a>
              <a href="#" className="hover:text-[#1F005C] transition-colors">FiTracker Official</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer
