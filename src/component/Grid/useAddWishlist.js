import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useAddWishList = ({ sortOrder, showWishlist }) => {
  const [wishlist, setWishlist] = useState([])

  const handleCardButton = title => {
    if (wishlist.includes(title)) {
      setWishlist(wishlist.filter(movieTitle => movieTitle !== title))
      return
    }

    setWishlist(wishlist => [...wishlist, title])
  }

  useEffect(() => {
    const jsonWishlist = Cookies.get('wishlist')
    if (jsonWishlist) {
      setWishlist(JSON.parse(jsonWishlist))
    }
  }, [])

  useEffect(() => {
    const jsonWishlist = JSON.stringify(wishlist)
    Cookies.set('wishlist', jsonWishlist)
    if (sortOrder === 'wishlist') {
      showWishlist()
    }
  }, [wishlist])

  return {
    wishlist,
    handleCardButton
  }
}

export default useAddWishList
