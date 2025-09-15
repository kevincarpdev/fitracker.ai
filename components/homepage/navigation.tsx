"use client"

import { useState, memo, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useScrollNavigation } from "@/hooks/use-scroll-navigation"
import { useRouter } from "next/navigation"

interface NavigationProps {
  navOpacity: number
}

const Navigation = memo(({ navOpacity }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { isVisible, isScrolling } = useScrollNavigation({ threshold: 20, debounceMs: 150 })
  const router = useRouter()

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
      <nav 
        className={`fixed top-8 left-4 right-4 z-40 transition-all duration-500 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div
          className={`
              max-w-5xl mx-auto pl-6 py-3 pr-2
              flex items-center justify-between
              relative
              rounded-3xl
              border
              border-[#06140e1a]
              shadow-[0_24px_40px_-26px_#06140e12]
              backdrop-blur-[15px]
              bg-[#f7f4eebf]
              backdrop-blur-xl transition-all duration-300
              ${isScrolling ? 'scale-95' : 'scale-100'}
            `}
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

          <div className="hidden lg:flex items-center gap-10 text-right">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-heading text-lg font-medium text-[hsl(var(--primary))] relative group text-right"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-right">
            <Button
              onClick={handleStartFree}
              className="cursor-pointer h-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] rounded-xl px-6 font-heading font-bold text-lg shadow-lg hover:shadow-xl transition-all py-3 text-right"
              aria-label="Start your journey free"
            >
              Start Free →
            </Button>
            <button
              onClick={handleOpenMenu}
              className="h-full bg-[hsl(var(--primary-300))] text-[hsl(var(--primary))] cursor-pointer p-3 hover:bg-[hsl(var(--primary-300)/0.9)] rounded-2xl transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))]"
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
          {/* Backdrop with fade-in animation */}
          <div
            className={`absolute inset-0 backdrop-blur-lg bg-black/30 transition-all duration-300 ease-out ${
              isAnimating 
                ? 'opacity-100 backdrop-blur-lg' 
                : 'opacity-0 backdrop-blur-none'
            }`}
            onClick={handleCloseMenu}
            aria-hidden="true"
          />
          
          {/* Navigation menu with slide-in animation */}
          <div 
            className={`absolute right-0 top-0 h-full w-80 bg-[hsl(var(--primary-600))] backdrop-blur-xl shadow-2xl flex flex-col transition-all duration-300 ease-out transform ${
              isAnimating 
                ? 'translate-x-0' 
                : 'translate-x-full'
            }`}
          >
            <div className="p-6 text-right">
              <div className="flex items-end justify-end mb-12 text-right">
                <button
                  onClick={handleCloseMenu}
                  className="text-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary-foreground)/0.8)] rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))]"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 space-y-4 text-right">
              {navLinks.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  className={`block text-lg font-heading font-medium text-[hsl(var(--primary-foreground))] hover:text-secondary transition-all duration-300 text-right transform ${
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

              <div className={`pt-4 border-t border-[hsl(var(--secondary))] space-y-4 text-right transition-all duration-300 transform ${
                isAnimating 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: '200ms'
              }}
              >
                <div className="space-y-3">
                  <a href="#faqs" className="block text-sm text-[hsl(var(--primary-foreground))] hover:text-foreground text-right transition-colors" onClick={handleCloseMenu}>FAQs</a>
                  <a href="#contact" className="block text-sm text-[hsl(var(--primary-foreground))] hover:text-foreground text-right transition-colors" onClick={handleCloseMenu}>Contact</a>
                  <a href="#" className="block text-sm text-[hsl(var(--primary-foreground))] hover:text-foreground text-right transition-colors" onClick={handleCloseMenu}>Privacy Policy</a>
                  <a href="#" className="block text-sm text-[hsl(var(--primary-foreground))] hover:text-foreground text-right transition-colors" onClick={handleCloseMenu}>Terms of Use</a>
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
