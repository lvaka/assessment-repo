import { useEffect } from 'react'
import gsap from 'gsap'

const useAnimateOnLoad = ({ ref, sortOrder, lastSearch }) => {
  /**
   * Description: Create Animation Hook for Grid items
   * @param {object} ref reference to React node of grid container
   * @param {string} sortOrder current sort order type for movie list
   * @param {string} lastSearch last search query submited by user
   * @return {null}
  */
  const animate = () => {
  /**
   * Description: Animate grid items to fade in and shift upwards in staggered
   * delay.
   * @return {null}
  */
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
    if (ref?.current || sortOrder) {
      animate()
    }
  }, [ref?.current, sortOrder, lastSearch])

  return null
}

export default useAnimateOnLoad
