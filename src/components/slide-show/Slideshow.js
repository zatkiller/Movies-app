import React, { useState } from 'react';

import './Slideshow.scss';

const Slideshow = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-4173624.jpg&fm=jpg'
    },
    {
      url: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?cs=srgb&dl=pexels-evie-shaffer-4004374.jpg&fm=jpg'
    },
    {
      url: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-844297.jpg&fm=jpg'
    }
  ];
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  // This will be used to check track current index of pagination
  const [currentIndex, setCurrentIndex] = useState(0);

  const { slideShow, slideIndex } = state;
  // let currentSlideIndex = 0;

  // Functon used to change the index of pagination
  const moveSlideWithArrows = (type) => {
    let index = currentIndex;
    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    } else {
      if (currentIndex < images.length) {
        index += 1;
      }
      if (index === images.length) {
        index = 0;
      }
    }
    setCurrentIndex(index);
    // prev refer to previous state values
    setState((prev) => ({
      ...prev,
      slideIndex: index,
      slideShow: images[index]
    }));
  };

  // Render the pagination arrows
  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => moveSlideWithArrows('prev')} />
        <div className="slider-arrow slider-arrow--right" onClick={() => moveSlideWithArrows('next')} />
      </div>
    );
  };

  /* eslint-disable */
  const Indicators = (props) => {
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <div className="slider">
      <div className="slider-slides">
        {images && images.length && slideShow && <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }}></div>}
        <Indicators currentSlide={slideIndex} />
        <RenderArrows />
      </div>
    </div>
  );
};

export default Slideshow;
