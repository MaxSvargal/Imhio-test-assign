import { useEffect, useState } from 'react'

export const useOnScreen = (ref: React.RefObject<HTMLElement>, rootMargin = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      rootMargin
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      ref.current && observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}
