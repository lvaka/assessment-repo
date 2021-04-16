import { useEffect, useState } from 'react'
import movieList from './data.json'
import Cookies from 'js-cookie'
import moment from 'moment'

const useGetMovies = () => {
  const [movies, setMovies] = useState([])
  const [sortOrder, setSortOrder] = useState()
  const [lastSearch, setLastSearch] = useState()
  const [search, setSearch] = useState('')

  const getMovies = () => {
    // This should be an AJAX call to API to get list of movies

    sortByReleaseDate()
  }

  const sortTitleAsc = () => {
    // Sorts by title in ascending order. Returns sorted list.

    const sortedList = [].slice.call(movieList).sort((a, b) => {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    })

    return sortedList
  }

  const sortTitleDesc = () => {
    // Sorts by title in descending order. Returns sorted list.

    const sortedList = [].slice.call(movieList).sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    })

    return sortedList
  }

  const sortByTitle = (order = 'asc') => {
    // sort movies by list. order should === 'asc' or 'desc'

    setSearch('')

    if (order === 'asc') {
      const sortedList = sortTitleAsc()
      setMovies(sortedList)
      setSortOrder('titleAsc')
      return
    }
    const sortedList = sortTitleDesc()
    setMovies(sortedList)
    setSortOrder('titleDesc')
  }

  const sortDateAsc = () => {
    // Sorts by Date in Ascending Order. Returns sorted list.
    const sortedList = [].slice.call(movieList).sort((a, b) => {
      const aDate = new Date(a.releaseDate)
      const bDate = new Date(b.releaseDate)
      return aDate - bDate
    })

    return sortedList
  }

  const sortDateDesc = () => {
    // Sorts by Date in Descending Order.  Returns sorted list.
    const sortedList = [].slice.call(movieList).sort((a, b) => {
      const aDate = new Date(a.releaseDate)
      const bDate = new Date(b.releaseDate)
      return bDate - aDate
    })

    return sortedList
  }

  const sortByReleaseDate = (order = 'desc') => {
    // sort by date.  order should === 'asc' or 'desc'

    setSearch('')

    if (order === 'asc') {
      const sortedList = sortDateAsc()
      setMovies(sortedList)
      setSortOrder('dateAsc')
      return
    }
    const sortedList = sortDateDesc()
    setMovies(sortedList)
    setSortOrder('dateDesc')
  }

  const sortWishlist = () => {
    setSearch('')

    const wishlist = JSON.parse(Cookies.get('wishlist'))
    const sortedList = [].slice.call(movies).filter(movie => wishlist.includes(movie.title))
    return sortedList
  }

  const showWishlist = () => {
    // show only movies in list

    const sortedList = sortWishlist()
    setMovies(sortedList)
    setSortOrder('wishlist')
  }

  const wordsInTitle = (words, title) => {
    // Checks to see if words are in title.
    let wordHitCount = 0

    for (const word of words) {
      if (title.includes(word)) {
        wordHitCount++
      }
    }

    return words.length === wordHitCount
  }

  const wordsInDate = (words, date) => {
    // Checks to see if the words are in the date of movie

    let wordHitCount = 0
    const dateTime = moment(date).format('MMMM D, YYYY').toLowerCase()

    for (const word of words) {
      if (date.includes(word)) {
        wordHitCount++
        continue
      }
      if (dateTime.includes(word)) {
        wordHitCount++
      }
    }

    return words.length === wordHitCount
  }

  const searchMovies = searchString => {
    /*
      This will search by search string.  It will filter through the list
      of movies.  It will compare the string to titles as well as date.
    */

    const sortMethods = {
      titleAsc: sortTitleAsc,
      titleDesc: sortTitleDesc,
      dateAsc: sortDateAsc,
      dateDesc: sortDateDesc,
      wishlist: sortWishlist
    }

    const words = searchString.split(' ').map(word => word.toLowerCase())
    const sortedList = sortMethods[sortOrder]()
    if (words.length === 0) {
      // Break Condition.  If there are no words, set sorted list.
      setMovies(sortedList)
      setLastSearch(searchString)
      return
    }

    const filteredList = sortedList.filter(movie => {
      if (wordsInTitle(words, movie.title.toLowerCase())) {
        return true
      }
      if (wordsInDate(words, movie.releaseDate)) {
        return true
      }
      return false
    })
    setMovies(filteredList)
    setLastSearch(searchString)
  }

  useEffect(() => getMovies(), [])

  return {
    movies,
    searchMovies,
    sortByTitle,
    sortByReleaseDate,
    showWishlist,
    getMovies,
    sortOrder,
    lastSearch,
    search,
    setSearch
  }
}

export default useGetMovies
