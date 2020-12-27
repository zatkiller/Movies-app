import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';
import MainContent from '../main-content/MainContent';
import Spinner from '../spinner/Spinner';

import './Main.scss';

const Main = (props) => {
  const { loadMoreMovies, page, totalPages, setResponsePageNumber, movieType } = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
    // loadMoreMovies('now_playing', currentPage);
  }, [currentPage, totalPages]);

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      // fetchData
      fetchData();
    }
  };

  const fetchData = () => {
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      loadMoreMovies(movieType, pageNumber);
    }
  };

  return (
    <div className="main" ref={mainRef} onScroll={handleScroll}>
      {loading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef}></div>
    </div>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  movieType: PropTypes.string
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages,
  movieType: state.movies.movieType
});

export default connect(mapStateToProps, { loadMoreMovies, setResponsePageNumber })(Main);
