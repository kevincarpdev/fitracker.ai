"use client"

import { memo } from "react"
import { Sparkles, Twitter, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
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
      { href: "#about", label: "About Fitracker" },
      { href: "#contact", label: "Contact" }
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" }
    ]
  }

  const socialLinks = [
    { href: "#", label: "Twitter", icon: Twitter },
    { href: "#", label: "Instagram", icon: Instagram },
    { href: "#", label: "Facebook", icon: Facebook }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary-800))] to-[hsl(var(--primary-1000))] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo size="md" showText />
            </div>
            <p className="text-lg text-white/80 font-body leading-relaxed max-w-sm mb-6">
              Your Complete AI Health Companion - revolutionizing wellness through advanced AI technology.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-white">Product</h3>
            <div className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors font-body hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-white">Company</h3>
            <div className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors font-body hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-white">Legal</h3>
            <div className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors font-body hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 font-body">
              © 2025 Fitracker. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60 font-body">
              <Sparkles className="w-4 h-4" />
              <span>Built with AI-Powered Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer
