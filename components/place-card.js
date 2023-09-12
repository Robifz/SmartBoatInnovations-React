import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'

const PlaceCard = (props) => {
  return (
    <>
      <div className={`place-card-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image}
          className="place-card-image"
        />
        <div className="place-card-container1">
          <span className="place-card-text">{props.city}</span>
          <span className="place-card-text1">{props.description}</span>
          <OutlineButton button1="Watch Video"></OutlineButton>
        </div>
      </div>
      <style jsx>
        {`
          .place-card-container {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .place-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-card-container1 {
            width: 383px;
            height: 197px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .place-card-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .place-card-text1 {
            font-size: 12px;
            max-width: 250px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .place-card-root-class-name {
            width: auto;
          }
          .place-card-root-class-name1 {
            width: auto;
          }
          .place-card-root-class-name2 {
            width: auto;
          }
          .place-card-root-class-name3 {
            width: auto;
          }
          .place-card-root-class-name4 {
            width: auto;
          }
          .place-card-root-class-name5 {
            width: auto;
          }
          .place-card-root-class-name6 {
            width: auto;
          }
          .place-card-root-class-name7 {
            width: auto;
          }
          .place-card-root-class-name8 {
            width: auto;
          }
          .place-card-root-class-name9 {
            width: auto;
          }
          .place-card-root-class-name10 {
            width: auto;
          }
          .place-card-root-class-name11 {
            width: auto;
          }
          @media (max-width: 767px) {
            .place-card-container {
              width: 200px;
            }
            .place-card-root-class-name {
              width: 100%;
              height: auto;
            }
            .place-card-root-class-name1 {
              width: 100%;
            }
            .place-card-root-class-name2 {
              width: 100%;
            }
            .place-card-root-class-name3 {
              width: 100%;
            }
            .place-card-root-class-name4 {
              width: 100%;
            }
            .place-card-root-class-name5 {
              width: 100%;
            }
            .place-card-root-class-name6 {
              width: 100%;
              height: auto;
            }
            .place-card-root-class-name7 {
              width: 100%;
            }
            .place-card-root-class-name8 {
              width: 100%;
            }
            .place-card-root-class-name9 {
              width: 100%;
            }
            .place-card-root-class-name10 {
              width: 100%;
            }
            .place-card-root-class-name11 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .place-card-container {
              width: 300px;
            }
            .place-card-root-class-name {
              width: 100%;
            }
            .place-card-root-class-name1 {
              width: 100%;
            }
            .place-card-root-class-name2 {
              width: 100%;
            }
            .place-card-root-class-name3 {
              width: 100%;
            }
            .place-card-root-class-name4 {
              width: 100%;
            }
            .place-card-root-class-name5 {
              width: 100%;
            }
            .place-card-root-class-name6 {
              width: 100%;
            }
            .place-card-root-class-name7 {
              width: 100%;
            }
            .place-card-root-class-name8 {
              width: 100%;
            }
            .place-card-root-class-name9 {
              width: 100%;
            }
            .place-card-root-class-name10 {
              width: 100%;
            }
            .place-card-root-class-name11 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

PlaceCard.defaultProps = {
  image: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
