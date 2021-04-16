
const useSearch = ({ searchMovies, search, setSearch }) => {
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
