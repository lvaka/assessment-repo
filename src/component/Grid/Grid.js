import React, { useRef } from 'react'
import './gridStyle.scss'
import useAddWishlist from './useAddWishlist'
import useAnimateOnLoad from './useAnimateOnLoad'
import Card from './Card'
import PropTypes from 'prop-types'

const Grid = ({ movies, sortOrder, showWishlist, lastSearch }) => {
  const gridRef = useRef()
  const { wishlist, handleCardButton } = useAddWishlist({ sortOrder, showWishlist })
  useAnimateOnLoad({ ref: gridRef, sortOrder: sortOrder, lastSearch: lastSearch })

  return (
    <div className='grid container-fluid'>
      <div className='row grid__row' ref={gridRef}>
        {movies && movies.map(movie =>
          <div className='col-lg-2 grid__column' key={movie.title}>
            <Card
              title={movie.title}
              image={movie.image}
              releaseDate={movie.releaseDate}
              wishlist={wishlist}
              handleCardButton={handleCardButton}
            />
          </div>
        )}
      </div>
    </div>
  )
}
Grid.propTypes = {
  movies: PropTypes.array,
  sortOrder: PropTypes.string,
  showWishlist: PropTypes.func,
  lastSearch: PropTypes.string
}

export default Grid
