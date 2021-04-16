import React from 'react'
import Header from './component/Header'
import Grid from './component/Grid'
import useGetMovies from './useGetMovies'
import './sass/app.scss'
import './App.css'

function App () {
  const { movies } = useGetMovies()

  return (
    <div className='app'>
      <Header />
      <Grid movies={movies} />
    </div>
  )
}

export default App
