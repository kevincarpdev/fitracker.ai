import { useState, useEffect, useCallback } from 'react'

interface UseScrollNavigationOptions {
  threshold?: number
  debounceMs?: number
}

export const useScrollNavigation = (options: UseScrollNavigationOptions = {}) => {
  const { threshold = 10, debounceMs = 100 } = options
  
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    // Show navigation at the very top
    if (currentScrollY <= threshold) {
      setIsVisible(true)
      setLastScrollY(currentScrollY)
      return
    }

    // Determine scroll direction
    const isScrollingDown = currentScrollY > lastScrollY
    const scrollDifference = Math.abs(currentScrollY - lastScrollY)

    // Only update if scroll difference is significant enough
    if (scrollDifference > threshold) {
      setIsVisible(!isScrollingDown)
      setLastScrollY(currentScrollY)
    }
  }, [lastScrollY, threshold])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        handleScroll()
        setIsScrolling(false)
      }, debounceMs)
    }

    const onScroll = () => {
      setIsScrolling(true)
      debouncedHandleScroll()
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timeoutId)
    }
  }, [handleScroll, debounceMs])

  return {
    isVisible,
    isScrolling,
    scrollY: lastScrollY
  }
}
