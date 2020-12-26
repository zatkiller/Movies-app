import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-4173624.jpg&fm=jpg',
      rating: 7.5
    },
    {
      url: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?cs=srgb&dl=pexels-evie-shaffer-4004374.jpg&fm=jpg',
      rating: 8
    },
    {
      url: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-844297.jpg&fm=jpg',
      rating: 9
    },
    {
      url: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-simon-migaj-747964.jpg&fm=jpg',
      rating: 10
    },
    {
      url: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?cs=srgb&dl=pexels-emiliano-arano-1295138.jpg&fm=jpg',
      rating: 6
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
