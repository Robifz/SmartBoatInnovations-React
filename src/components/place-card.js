import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className={`place-card-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.city}</span>
        <span className="place-card-text1">{props.description}</span>
        <OutlineButton button1="Watch Video" className=""></OutlineButton>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  image: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  imageAlt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
