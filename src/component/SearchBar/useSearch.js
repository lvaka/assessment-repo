const useSearch = ({ searchMovies, search, setSearch }) => {
  /**
    * Description: Custom React Hook to handle search input
    * @param {function} searchMovies used to make a search query
    * @param {string} search current value in search state
    * @param {function} setSearch sets new value to search state
    * @return {object} map of closures to handle form events
  */

  const handleSubmit = e => {
  /**
    * Description: cancels default event handler and handles form submit on search bar.  Initiate Search
    * @param {event} event handler.
    * @return {null}
  */
    e.preventDefault()
    searchMovies(search)
  }

  const handleUpdateSearch = e => {
  /**
    * Description: Update state of current Search Input value
    * @param {event} event handler.
    * @return {null}
  */
    const searchInput = e.target.value
    setSearch(searchInput)
  }

  return {
    handleSubmit,
    handleUpdateSearch
  }
}

export default useSearch
