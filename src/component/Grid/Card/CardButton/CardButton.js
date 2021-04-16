import React from 'react'
import PropTypes from 'prop-types'

const CardButton = ({ title, isActive, handleCardButton }) => {
  return (
    <div className='card__button' onClick={() => handleCardButton(title)}>
      {isActive ? <><span className='card__checkmark' />Remove</> : '+ Wishlist'}
    </div>
  )
}
CardButton.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleCardButton: PropTypes.func.isRequired
}

export default CardButton
