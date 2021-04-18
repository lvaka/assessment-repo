import { useEffect, useState } from 'react'
import movieList from './data.json'
import Cookies from 'js-cookie'
import moment from 'moment'

const useGetMovies = () => {
  /**
    * Description: Custom React Hook to handle getting, sorting, and
    * filtering of movies
    * @return {object} collection of closures to use outside of hook
  */

  const [movies, setMovies] = useState([])
  const [sortOrder, setSortOrder] = useState()
  const [lastSearch, setLastSearch] = useState()
  const [search, setSearch] = useState('')

  const getMovies = () => {
    /**
     * Description: Should be ajax call to API in production
     * @return {null}
    */

    sortByReleaseDate()
  }

  const sortTitleAsc = () => {
    /**
     * Description: Sort movie list by title in ascending order
     * @return {array} sortedList
    */

    const sortedList = [].slice.call(movieList).sort((a, b) => {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    })

    return sortedList
  }

  const sortTitleDesc = () => {
    /**
     * Description: Sort movie list by title in descending order
     * @return {array} sortedList
    */

    const sortedList = [].slice.call(movieList).sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    })

    return sortedList
  }

  const sortByTitle = (order = 'asc') => {
    /**
     * Description: Sort movies by title
     * @param {string} order either 'asc' or 'desc' for direction of sort
     * @return {null}
    */

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
    /**
     * Description: Sort movie list by date in ascending order
     * @return {array} sortedList
    */
    const sortedList = [].slice.call(movieList).sort((a, b) => {
      const aDate = new Date(a.releaseDate)
      const bDate = new Date(b.releaseDate)
      return aDate - bDate
    })

    return sortedList
  }

  const sortDateDesc = () => {
    /**
     * Description: Sort movie list by date in descending order
     * @return {array} sortedList
    */
    const sortedList = [].slice.call(movieList).sort((a, b) => {
      const aDate = new Date(a.releaseDate)
      const bDate = new Date(b.releaseDate)
      return bDate - aDate
    })

    return sortedList
  }

  const sortByReleaseDate = (order = 'desc') => {
    /**
     * Description: Sort Movies by Release Date
     * @param {string} order direction of sort
     * @return {null}
    */

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
    /**
     * Description: Will sort movies by current sort method and return filtered list
     * @return {array} sortedList movies filtered by what's in the wishlist.
    */
    const sortMethods = {
      titleAsc: sortTitleAsc,
      titleDesc: sortTitleDesc,
      dateAsc: sortDateAsc,
      dateDesc: sortDateDesc,
      wishlist: () => movieList
    }

    setSearch('')
    const wishlist = JSON.parse(Cookies.get('wishlist'))
    const sortedList = sortMethods[sortOrder]().filter(movie => wishlist.includes(movie.title))
    return sortedList
  }

  const showWishlist = () => {
    /**
     * Description: Chains functions to sort set wishlist
     * @return {null}
    */
    const sortedList = sortWishlist()
    setMovies(sortedList)
    setSortOrder('wishlist')
  }

  const wordsInTitle = (words, title) => {
    /**
     * Description: Search if words are found in the movie title
     * @param {array} words list of words to search for
     * @param {string} title in YYYY-MM-DD string format
     * @return {bool} whether user search is within the date of the movie
    */
    let wordHitCount = 0

    for (const word of words) {
      if (title.includes(word)) {
        wordHitCount++
      }
    }

    return words.length === wordHitCount
  }

  const wordsInDate = (words, date) => {
    /**
     * Description: Search if words are found in date
     * @param {array} words list of words to search for
     * @param {string} date in YYYY-MM-DD string format
     * @return {bool} whether user search is within the date of the movie
    */

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

  // Map of sort methods
  const sortMethods = {
    titleAsc: sortTitleAsc,
    titleDesc: sortTitleDesc,
    dateAsc: sortDateAsc,
    dateDesc: sortDateDesc,
    wishlist: sortWishlist
  }

  const searchMovies = searchString => {
    /**
     * Description: Searches List of Movies by Title and Date
     * @param {string} searchString The user's search query
     * @return {null}
    */

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
