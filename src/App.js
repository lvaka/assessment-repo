import React from 'react'
import Header from './component/Header'
import Grid from './component/Grid'
import useGetMovies from './useGetMovies'
import './sass/app.scss'
import './App.scss'

function App () {
  const { movies } = useGetMovies()

  return (
    <div className='app'>
      <Header />
      <div className='container-fluid'>
        <h2 className='app__title'>Some Movies Titles</h2>
      </div>
      <Grid movies={movies} />
    </div>
  )
}

export default App
