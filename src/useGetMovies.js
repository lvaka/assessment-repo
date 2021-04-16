import { useEffect, useState } from 'react'
import movieList from './data.json'

const useGetMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    // This should be an AJAX call to API to get list of movies

    setMovies(movieList)
  }

  const searchMovies = searchString => {
    // This should filter by search string
  }

  const sortByTitles = (title, order = 'asc') => {
    // sort movies by list. order should === 'asc' or 'desc'
  }

  const sortByReleaseDate = (order = 'asc') => {
    // sort by date.  order should === 'asc' or 'desc'
  }

  const showWishlist = () => {
    // show only movies in list
  }

  useEffect(() => getMovies(), [])

  return {
    movies,
    searchMovies,
    sortByTitles,
    sortByReleaseDate,
    showWishlist,
    getMovies
  }
}

export default useGetMovies
