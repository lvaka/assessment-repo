import { useEffect, useState } from 'react'
import movieList from './data.json'

const useGetMovies = () => {
  const [movies, setMovies] = useState([])
  const [sortOrder, setSortOrder] = useState()

  const getMovies = () => {
    // This should be an AJAX call to API to get list of movies

    sortByReleaseDate()
  }

  const searchMovies = searchString => {
    // This should filter by search string
  }

  const sortByTitle = (order = 'asc') => {
    // sort movies by list. order should === 'asc' or 'desc'

    if (order === 'asc') {
      const sortedList = [].slice.call(movieList).sort((a, b) => {
        return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
      })
      setMovies(sortedList)
      setSortOrder('titleAsc')
      return
    }
    const sortedList = [].slice.call(movieList).sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    })
    setMovies(sortedList)
    setSortOrder('titleDesc')
  }

  const sortByReleaseDate = (order = 'desc') => {
    // sort by date.  order should === 'asc' or 'desc'
    if (order === 'asc') {
      const sortedList = [].slice.call(movieList).sort((a, b) => {
        const aDate = new Date(a.releaseDate)
        const bDate = new Date(b.releaseDate)
        return aDate - bDate
      })
      setMovies(sortedList)
      setSortOrder('dateAsc')
      return
    }
    const sortedList = [].slice.call(movieList).sort((a, b) => {
      const aDate = new Date(a.releaseDate)
      const bDate = new Date(b.releaseDate)
      return bDate - aDate
    })
    setMovies(sortedList)
    setSortOrder('dateDesc')
  }

  const showWishlist = () => {
    // show only movies in list
  }

  useEffect(() => getMovies(), [])

  return {
    movies,
    searchMovies,
    sortByTitle,
    sortByReleaseDate,
    showWishlist,
    getMovies,
    sortOrder
  }
}

export default useGetMovies
