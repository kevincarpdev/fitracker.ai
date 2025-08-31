"use client"

import { useEffect, useRef, useState } from "react"

export const useScrollEffects = () => {
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
  const heroScale = Math.min(1 + y / 300, 2.5)
  const heroBlur = Math.min(y / 100, 10)
  const navOpacity = Math.min(y / 100, 0.95)
  
  // App screenshot animation values - use windowHeight state instead of window.innerHeight
  const appScreenshotY = Math.max(-y * 0.5, -windowHeight * 0.8)
  const appScreenshotScale = Math.min(1 + y / 1000, 1.5)
  const appScreenshotOpacity = Math.min(y / 400, 1)

  return {
    heroScale,
    heroBlur,
    navOpacity,
    appScreenshotY,
    appScreenshotScale,
    appScreenshotOpacity
  }
}
