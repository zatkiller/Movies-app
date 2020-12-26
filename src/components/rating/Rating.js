import React, { useState, useEffect, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import './Rating.scss';

const Rating = (props) => {
  const { rating, totalStars, className } = props;
  const [numberOfStars, setNumberOfStars] = useState();
  const ratingRef = useRef();

  useEffect(() => {
    // Spreading the array of stars, taking the keys (indexes), we then increment each of the index values by one
    const starArr = [...Array(totalStars).keys()].map((i) => i + 1);
    setNumberOfStars(starArr);
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    const startPercentage = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = startPercentage;
  }, [rating, totalStars]);

  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}></div>
      <div className="back-stars">
        {numberOfStars &&
          numberOfStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}

        <div className={`front-stars ${className}`} ref={ratingRef}>
          {numberOfStars &&
            numberOfStars.map((i) => (
              <Fragment key={i}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Rating;
