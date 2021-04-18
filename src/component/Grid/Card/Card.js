import React from 'react'
import './cardStyles.scss'
import CardDetails from './CardDetails'
import PropTypes from 'prop-types'

const Card = ({ title, image, releaseDate, wishlist, handleCardButton }) => {
  const ImageSrc = require(`../../../${image}`)
  const isActive = wishlist.includes(title)

  return (
    <div className={isActive ? 'card card--active' : 'card'}>
      <img src={ImageSrc.default} className='card__image' />
      <CardDetails
        title={title}
        releaseDate={releaseDate}
        isActive={isActive}
        handleCardButton={handleCardButton}
      />
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  wishlist: PropTypes.array.isRequired,
  handleCardButton: PropTypes.func.isRequired
}

export default Card
