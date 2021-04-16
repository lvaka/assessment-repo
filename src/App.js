import React from 'react'
import Header from './component/Header'
import Grid from './component/Grid'
import SortMenu from './component/SortMenu'
import useGetMovies from './useGetMovies'
import './sass/app.scss'
import './App.scss'

function App () {
  const { movies, sortOrder, sortByReleaseDate, sortByTitle, showWishlist } = useGetMovies()

  return (
    <div className='app'>
      <Header />
      <div className='container-fluid'>
        <h2 className='app__title'>Some Movies Titles</h2>
      </div>
      <SortMenu
        sortOrder={sortOrder}
        sortByReleaseDate={sortByReleaseDate}
        sortByTitle={sortByTitle}
        showWishlist={showWishlist}
      />
      <Grid movies={movies} sortOrder={sortOrder} showWishlist={showWishlist} />
    </div>
  )
}

export default App
