import React from 'react'
import Header from './component/Header'
import Grid from './component/Grid'
import SortMenu from './component/SortMenu'
import SearchBar from './component/SearchBar'
import useGetMovies from './useGetMovies'
import './sass/app.scss'
import './App.scss'

function App () {
  /**
    * Description: Parent Component of App
    * @return {React.FC}
  */
  const {
    movies,
    searchMovies,
    sortOrder,
    sortByReleaseDate,
    sortByTitle,
    showWishlist,
    lastSearch,
    search,
    setSearch
  } = useGetMovies()

  return (
    <div className='app'>
      <Header />
      <SearchBar searchMovies={searchMovies} search={search} setSearch={setSearch} />
      <div className='container-fluid'>
        <h2 className='app__title'>Some Movies Titles</h2>
      </div>
      <SortMenu
        sortOrder={sortOrder}
        sortByReleaseDate={sortByReleaseDate}
        sortByTitle={sortByTitle}
        showWishlist={showWishlist}
      />
      <Grid movies={movies} sortOrder={sortOrder} showWishlist={showWishlist} lastSearch={lastSearch} />
    </div>
  )
}

export default App
