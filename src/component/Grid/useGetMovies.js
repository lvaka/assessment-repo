import { useEffect, useState } from 'react'
import movieList from '../../data.json'

const useGetMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    // This should be an AJAX call to API to get list of movies

    setMovies(movieList)
  }

  useEffect(() => getMovies(), [])

  return { movies }
}

export default useGetMovies
