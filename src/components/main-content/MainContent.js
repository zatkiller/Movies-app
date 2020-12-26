import React from 'react';
import Slideshow from '../slide-show/Slideshow';

import './MainContent.scss';

const MainContent = () => {
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

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
    </div>
  );
};

export default MainContent;
