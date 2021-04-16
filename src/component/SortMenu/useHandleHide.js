import { useEffect } from 'react'
import gsap from 'gsap'

const useHandleHide = ({ active, setActive, sortOptionsRef, sortByReleaseDate, sortByTitle, showWishlist }) => {
  const handleHide = () => {
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

  const handleSortByDate = (order = 'desc') => {
    setActive(false)
    sortByReleaseDate(order)
  }

  const handleSortByTitle = (order = 'desc') => {
    setActive(false)
    sortByTitle(order)
  }

  const handleFilterWishlist = () => {
    setActive(false)
    showWishlist()
  }

  useEffect(() => {
    handleHide()
  }, [active])

  return {
    handleSortByDate,
    handleSortByTitle,
    handleFilterWishlist
  }
}

export default useHandleHide
