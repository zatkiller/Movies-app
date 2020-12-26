import React from 'react';

import './Slideshow.scss';

const Slideshow = () => {
  const images = [1, 2, 3, 4, 5];
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" />
        <div className="slider-arrow slider-arrow--right" />
      </div>
    );
  };

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
        <div
          className="slider-image"
          style={{
            backgroundImage:
              'url(data:image/jpeg;base64,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)'
          }}
        ></div>
        <Indicators currentSlide={1} />
        <RenderArrows />
      </div>
    </div>
  );
};

export default Slideshow;
