"use client"

import { useEffect, useRef } from "react"

export const useScrollEffects = () => {
  const scrollRAF = useRef<number | null>(null)

  useEffect(() => {
    const root = document.documentElement
    const onScroll = () => {
      if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current)
      scrollRAF.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0
        root.style.setProperty("--scroll-y", String(y))
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const getY = () =>
    typeof window !== "undefined"
      ? Number(getComputedStyle(document.documentElement).getPropertyValue("--scroll-y")) || 0
      : 0

  const y = getY()
  const heroScale = Math.min(1 + y / 300, 2.5)
  const heroOpacity = Math.max(1 - y / 800, 0.3)
  const heroBlur = Math.min(y / 100, 10)
  const navOpacity = Math.min(y / 100, 0.95)

  return {
    heroScale,
    heroOpacity,
    heroBlur,
    navOpacity
  }
}
