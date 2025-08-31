"use client"

import { useEffect, useRef, useState } from "react"

export const useAppShowcaseEffects = () => {
  const scrollRAF = useRef<number | null>(null)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    
    // Set initial window height
    setWindowHeight(window.innerHeight)
    
    const onScroll = () => {
      if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current)
      scrollRAF.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0
        root.style.setProperty("--scroll-y", String(y))
      })
    }
    
    const onResize = () => {
      setWindowHeight(window.innerHeight)
    }
    
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    onScroll()
    onResize()
    
    return () => {
      if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const getY = () =>
    typeof window !== "undefined"
      ? Number(getComputedStyle(document.documentElement).getPropertyValue("--scroll-y")) || 0
      : 0

  const y = getY()
  
  // App showcase section animations - start immediately after hero
  const showcaseSectionY = Math.max(0, y - windowHeight * 0.1) // Start animation when section is 10% in view
  
  // Screenshot fan animations with reset behavior
  const fanProgress = Math.min(1, showcaseSectionY / 400) // Complete fan animation over 400px scroll
  
  // Initial positions (closed/fanned in)
  const initialLeftRotation = -12
  const initialRightRotation = 12
  const finalLeftRotation = -25 // Fan out more
  const finalRightRotation = 25 // Fan out more
  
  // Smooth fan animation with easing
  const leftScreenRotation = initialLeftRotation + (finalLeftRotation - initialLeftRotation) * fanProgress
  const rightScreenRotation = initialRightRotation + (finalRightRotation - initialRightRotation) * fanProgress
  const centerScreenScale = 1 + (fanProgress * 0.1) // Scale up to 1.1
  
  // Opacity animations with smooth transitions - ensure screenshots are always visible
  const screenshotsOpacity = Math.max(0.3, Math.min(1, showcaseSectionY / 100)) // Start at 30% opacity
  const contentOpacity = Math.max(0.5, Math.min(1, showcaseSectionY / 200)) // Start at 50% opacity
  
  // Content section animations - start when showcase is fully in view
  const contentSectionsY = Math.max(0, y - windowHeight * 0.8) // Start earlier
  const section1Opacity = Math.min(1, contentSectionsY / 150)
  const section2Opacity = Math.min(1, (contentSectionsY - 150) / 150)
  const section3Opacity = Math.min(1, (contentSectionsY - 300) / 150)
  const section4Opacity = Math.min(1, (contentSectionsY - 450) / 150)
  const section5Opacity = Math.min(1, (contentSectionsY - 600) / 150)

  return {
    leftScreenRotation,
    rightScreenRotation,
    centerScreenScale,
    screenshotsOpacity,
    contentOpacity,
    section1Opacity,
    section2Opacity,
    section3Opacity,
    section4Opacity,
    section5Opacity,
    showcaseSectionY
  }
}
