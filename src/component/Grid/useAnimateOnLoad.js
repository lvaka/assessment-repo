import { useEffect } from 'react'
import gsap from 'gsap'

const useAnimateOnLoad = ({ ref }) => {
  const animate = () => {
    const tl = gsap.timeline()
    const grid = ref.current
    tl.to(grid.children, {
      duration: 0,
      opacity: 0,
      y: 50
    })
    tl.to(grid.children, {
      duration: 0.4,
      opacity: 1,
      stagger: 0.1,
      y: 0
    })
  }

  useEffect(() => {
    if (ref?.current) {
      animate()
    }
  }, [ref?.current])

  return null
}

export default useAnimateOnLoad
