import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useAddWishList = ({ sortOrder, showWishlist }) => {
  /**
    * Description: Custom React Hook to handle wishlist changes
    * @param {string} sortOrder current sort order type
    * @param {function} showWishlist filters movie grid to only show items in wishlist
    * @return {object} returns object map containing wishlist and handleCardButton handler
  */
  const [wishlist, setWishlist] = useState([])

  const handleCardButton = title => {
  /**
    * Description: Handler to handle click on wishlist button of card. Will add
    * title to wishlist or filter out title if already in wishlist
    * @param {string} title of movie associated with card
    * @return {null}
  */
    if (wishlist.includes(title)) {
      setWishlist(wishlist.filter(movieTitle => movieTitle !== title))
      return
    }

    setWishlist(wishlist => [...wishlist, title])
  }

  const loadWishlist = () => {
  /**
    * Description: Loads wishlist from Cookies and sets wishlist to state
    * @return {null}
  */
    const jsonWishlist = Cookies.get('wishlist')
    if (jsonWishlist) {
      setWishlist(JSON.parse(jsonWishlist))
    }
  }

  const updateWishlist = () => {
  /**
    * Description: Updates Cookies with current state of wish list.  If sortOrder
    * is currently 'wishlist', run showWishlist function to update filtered movie titles
    * to display in grid.
    * @return {null}
  */
    const jsonWishlist = JSON.stringify(wishlist)
    Cookies.set('wishlist', jsonWishlist)
    if (sortOrder === 'wishlist') {
      showWishlist()
    }
  }

  useEffect(() => {
    loadWishlist()
  }, [])

  useEffect(() => {
    updateWishlist()
  }, [wishlist])

  return {
    wishlist,
    handleCardButton
  }
}

export default useAddWishList
