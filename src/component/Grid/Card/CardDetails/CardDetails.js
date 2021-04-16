import React from 'react'
import moment from 'moment'
import CardButton from '../CardButton'
import PropTypes from 'prop-types'

const CardDetails = ({ title, releaseDate, isActive, handleCardButton }) => {
  const formatedDate = moment(releaseDate).format('MMMM D, YYYY')

  return (
    <div className='card__details'>
      <div className='card__textContainer'>
        <h4 className='card__title'>{title}</h4>
        <h5 className='card__releaseDate'>
          Released: <span className='card__date'>{formatedDate}</span>
        </h5>
        <CardButton title={title} handleCardButton={handleCardButton} isActive={isActive} />
      </div>
    </div>
  )
}
CardDetails.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  handleCardButton: PropTypes.func.isRequired
}

export default CardDetails
