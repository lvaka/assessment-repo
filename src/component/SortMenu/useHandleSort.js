const useHandleSort = ({ setActive, sortByReleaseDate, sortByTitle, showWishlist }) => {
  /**
   * Description: Create handle sort hook
   * @param {function} setActive function sets the state of the sort menu
   * @param {function} sortByReleaseDate sets order of movie list by release date
   * @param {function} sortByRitle sets order of movie list by title
   * @param {function} showWishlist filters movie list to only items in wishlist
   * @return {object} Object map containing handleSortByDate, handleSortByTitle,
   * and handleFilterWishlist handlers.
  */
  const handleSortByDate = (order = 'desc') => {
  /**
   * Description: Sets the order of movies by release date and deactivates the sort menu state.
   * @param {string} order is either 'asc' or 'desc' to sort by ascending or descending
   * @return null}
  */
    setActive(false)
    sortByReleaseDate(order)
  }

  const handleSortByTitle = (order = 'desc') => {
  /**
   * Description: Sets the order of movies by title and deactivates the sort menu state.
   * @param {string} order is either 'asc' or 'desc' to sort by ascending or descending
   * @return null}
  */
    setActive(false)
    sortByTitle(order)
  }

  const handleFilterWishlist = () => {
  /**
   * Description: Filters the movies by the title currently in the wish list and deactivates
   * the sort menu state.
   * @param {string} order is either 'asc' or 'desc' to sort by ascending or descending
   * @return null}
  */
    setActive(false)
    showWishlist()
  }

  return {
    handleSortByDate,
    handleSortByTitle,
    handleFilterWishlist
  }
}

export default useHandleSort
