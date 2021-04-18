const useHandleSort = ({ setActive, sortByReleaseDate, sortByTitle, showWishlist }) => {
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

  return {
    handleSortByDate,
    handleSortByTitle,
    handleFilterWishlist
  }
}

export default useHandleSort
