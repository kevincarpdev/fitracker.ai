"use client"

import { useState, memo, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useScrollNavigation } from "@/hooks/use-scroll-navigation"

interface NavigationProps {
  navOpacity: number
}

const Navigation = memo(({ navOpacity }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { isVisible, isScrolling } = useScrollNavigation({ threshold: 20, debounceMs: 150 })

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "#community", label: "Community" },
  ]

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
    // Small delay to ensure the menu is rendered before animating
    requestAnimationFrame(() => {
      setIsAnimating(true)
    })
  }

  const handleCloseMenu = () => {
    setIsAnimating(false)
    // Delay the actual closing to allow for exit animation
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 300)
  }

  const handleStartFree = () => {
    // In a real app, this would redirect to sign-up or app download
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleCloseMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-40 transition-all duration-500 ease-out px-4 md:px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between relative transition-all duration-300">
          <div className="flex items-center gap-2">
            <Logo size="md" showText className="text-white" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-heading text-base font-semibold text-white relative group hover:text-white/80 transition-colors"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white/80 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handleStartFree}
              className="cursor-pointer h-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-700))] text-white hover:shadow-lg hover:shadow-[hsl(var(--primary-300))]/50 rounded-2xl px-6 md:px-8 font-heading font-bold text-base shadow-md transition-all py-3 group"
              aria-label="Start your journey free"
            >
              Start Free
            </Button>
            <button
              onClick={handleOpenMenu}
              className="lg:hidden bg-white/20 text-white cursor-pointer p-3 hover:bg-white/30 rounded-full transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop with fade-in animation */}
          <div
            className={`absolute inset-0 backdrop-blur-md bg-black/40 transition-all duration-300 ease-out ${
              isAnimating 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
            onClick={handleCloseMenu}
            aria-hidden="true"
          />
          
          {/* Navigation menu with slide-in animation */}
          <div 
            className={`absolute right-4 top-4 bottom-4 w-80 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl flex flex-col transition-all duration-300 ease-out transform border border-white/20 ${
              isAnimating 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Logo size="sm" showText />
                <button
                  onClick={handleCloseMenu}
                  className="text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-100))] rounded-full p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-start px-6 space-y-2">
              {navLinks.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  className={`block text-xl font-heading font-bold text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-100))] px-4 py-3 rounded-xl transition-all duration-300 transform ${
                    isAnimating 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                  onClick={handleCloseMenu}
                >
                  {label}
                </a>
              ))}

              <div className={`pt-6 mt-6 border-t border-[hsl(var(--border))] space-y-2 transition-all duration-300 transform ${
                isAnimating 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: '200ms'
              }}
              >
                <a href="#faqs" className="block text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-xl hover:bg-[hsl(var(--primary-50))] transition-colors" onClick={handleCloseMenu}>FAQs</a>
                <a href="#contact" className="block text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-xl hover:bg-[hsl(var(--primary-50))] transition-colors" onClick={handleCloseMenu}>Contact</a>
                <a href="/privacy" className="block text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-xl hover:bg-[hsl(var(--primary-50))] transition-colors" onClick={handleCloseMenu}>Privacy Policy</a>
                <a href="/terms" className="block text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-xl hover:bg-[hsl(var(--primary-50))] transition-colors" onClick={handleCloseMenu}>Terms of Use</a>
              </div>
            </div>

            <div className="p-6">
              <Button
                onClick={handleStartFree}
                className="w-full cursor-pointer h-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-700))] text-white hover:shadow-lg rounded-2xl px-8 font-heading font-bold text-lg shadow-md transition-all py-4"
                aria-label="Start your journey free"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

Navigation.displayName = "Navigation"

export default Navigation
