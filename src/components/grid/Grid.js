import React from 'react';

import './Grid.scss';

const Grid = (props) => {
  const { images } = props;

  return (
    <div className="grid">
      {images.map((image, i) => (
        <React.Fragment key={i}>
          <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
            <div className="grid-read-more">
              <button className="grid-cell-button">Read More</button>
            </div>
            <div className="grid-detail">
              <span className="grid-detail-title">Mission Impossible</span>
              <div className="grid-detail-rating"></div>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <div className="grid-vote-average">4.5</div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
