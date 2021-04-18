import { useEffect } from 'react'
import gsap from 'gsap'

const useHandleHide = ({ active, sortOptionsRef }) => {
  /**
   * Description: Hide sort options menu handler.  Will handle animation of sort options
   * menu based on the active state
   * @param {bool} active state of sort menu
   * @param {object} sortOptionsRef is a reference to the React node for the sort options
   * menu.
   * @return {null}
  */
  const handleHide = () => {
  /**
   * Description: Will animate the sort options menu to appear if active state is true.
   * If active state is false, this will animate and hide the sort options menu.
   * @return {null}
  */
    const tl = gsap.timeline()
    if (active) {
      tl.to(sortOptionsRef.current, {
        opacity: 0,
        duration: 0,
        maxHeight: 0,
        y: '120%'
      })
      tl.to(sortOptionsRef.current, {
        opacity: 1,
        duration: 0.4,
        maxHeight: 300,
        y: '140%'
      })
      return
    }
    tl.to(sortOptionsRef.current, {
      opacity: 1,
      duration: 0,
      maxHeight: 300
    })
    tl.to(sortOptionsRef.current, {
      opacity: 0,
      duration: 0.4,
      maxHeight: 0
    })
  }

  useEffect(() => {
    handleHide()
  }, [active])
}

export default useHandleHide
