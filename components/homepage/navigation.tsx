"use client"

import { useState, memo } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

interface NavigationProps {
  navOpacity: number
}

const Navigation = memo(({ navOpacity }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#community", label: "Community" },
  ]

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-40">
        <div
          className="
              max-w-5xl mx-auto px-6 py-5
              flex items-center justify-between
              relative
              rounded-3xl
              border
              border-[#06140e1a]
              shadow-[0_24px_40px_-26px_#06140e12]
              backdrop-blur-[15px]
              bg-[#f7f4eebf]
              backdrop-blur-xl transition-all duration-300
            "
          style={{
            // fallback for browsers that don't support tailwind's arbitrary values
            backdropFilter: "blur(15px)",
            backgroundColor: "#f7f4eebf",
            borderColor: "#06140e1a",
            borderRadius: "1.5rem",
            boxShadow: "0 24px 40px -26px #06140e12",
            display: "flex",
            position: "relative",
          }}
        >
          <div className="flex items-center gap-2">
            <Logo size="md" showText />
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-heading text-lg font-medium hover:text-primary relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="cursor-pointer h-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] rounded-xl px-6 font-heading font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              aria-label="Start your journey free"
            >
              Start Free →
            </Button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer p-2.5 hover:bg-muted rounded-xl transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))]"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 backdrop-blur-lg bg-black/30 opacity-100 transition-all"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-[hsl(var(--background)/0.95)] backdrop-blur-xl border-l border-border shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-12">
                <Logo size="sm" showText />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="px-6 space-y-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block text-lg font-heading font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <div className="pt-4">
                <Button className="h-auto w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] rounded-2xl py-3 font-heading font-semibold">
                  Start Your Journey Free →
                </Button> 
              </div>

              <div className="pt-8 border-t border-border space-y-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-wider">Resources</h3>
                  <a href="#faqs" className="block text-sm text-muted-foreground hover:text-foreground">FAQs</a>
                  <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground">Contact</a>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-wider">Legal</h3>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Terms of Use</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

Navigation.displayName = "Navigation"

export default Navigation
