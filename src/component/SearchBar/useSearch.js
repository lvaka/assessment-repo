const useSearch = ({ searchMovies, search, setSearch }) => {
  /**
    * Description: Custom React Hook to handle search input
    * @param {function} searchMovies used to make a search query
    * @param {string} search current value in search state
    * @param {function} setSearch sets new value to search state
    * @return {object} map of closures to handle form events
  */

  const handleSubmit = e => {
    e.preventDefault()
    searchMovies(search)
  }

  const handleUpdateSearch = e => {
    const searchInput = e.target.value
    setSearch(searchInput)
  }

  return {
    handleSubmit,
    handleUpdateSearch
  }
}

export default useSearch
