import React, { useState, useEffect, Fragment } from 'react';

import './Rating.scss';

const Rating = (props) => {
  const { rating, totalStars } = props;
  const [numberOfStars, setNumberOfStars] = useState();

  useEffect(() => {
    // Spreading the array of stars, taking the keys (indexes), we then increment each of the index values by one
    const starArr = [...Array(totalStars).keys()].map((i) => i + 1);
    setNumberOfStars(starArr);
  }, [rating, totalStars]);

  return (
    <div className="star-rating">
      <div className="back-stars">
        {numberOfStars &&
          numberOfStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
        <div className="front-stars">
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

export default Rating;
