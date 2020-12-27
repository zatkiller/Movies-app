import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './MainContent.scss';

import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import PropTypes from 'prop-types';

import { IMAGE_URL } from '../../services/movies.service';

const MainContent = (props) => {
  const { list, movieType } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);

  // Randomize the order of movies obtained, randomly get 4
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  useEffect(() => {
    console.log(list);
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}${randomMovies[2].backdrop_path}` // Part of reponse from Moves
        },
        {
          id: 4,
          url: `${IMAGE_URL}${randomMovies[3].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
  }, []);

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
        <div className="movieType">{movieType}</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired,
  movieType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  movieType: state.movies.movieType
});

export default connect(mapStateToProps, {})(MainContent);
