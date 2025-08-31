"use client"

import { memo } from "react"
import { Logo } from "@/components/logo"

const Footer = memo(() => {
  const footerLinks = {
    product: [
      { href: "#features", label: "How It Works" },
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faqs", label: "FAQs" }
    ],
    company: [
      { href: "#community", label: "Community" },
      { href: "#", label: "About Fitracker" },
      { href: "#", label: "Contact" }
    ],
    legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" }
    ]
  }

  const socialLinks = [
    { href: "#", label: "@FiTracker" },
    { href: "#", label: "@FiTrackerApp" },
    { href: "#", label: "FiTracker Official" }
  ]

  return (
    <footer className="bg-gradient-to-b from-primary-950 to-black text-primary-foreground py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Logo size="md" showText />
            </div>
            <p className="text-lg opacity-90 font-body leading-relaxed max-w-sm">
              Your Complete AI Health Companion
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Product</h3>
            <div className="space-y-4">
              {footerLinks.product.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block opacity-80 hover:opacity-100 hover:text-white transition-all font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Company</h3>
            <div className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block opacity-80 hover:opacity-100 hover:text-white transition-all font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Legal</h3>
            <div className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block opacity-80 hover:opacity-100 hover:text-white transition-all font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer bottom - darker */}
        <div className="border-t border-white/20 mt-16 pt-8 bg-black/60 -mx-6 px-6 -mb-20 pb-20 rounded-t-3xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
            <p className="text-sm opacity-70 font-body">
              © 2025 Fitracker. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer
