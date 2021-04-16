import React from 'react'
import './gridStyle.scss'
import useAddWishlist from './useAddWishlist'
import Card from './Card'
import PropTypes from 'prop-types'

const Grid = ({ movies }) => {
  const { wishlist, handleCardButton } = useAddWishlist()

  return (
    <div className='grid container-fluid'>
      <div className='row grid__row'>
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
  movies: PropTypes.array
}

export default Grid
