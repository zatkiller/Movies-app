import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';
import MainContent from '../main-content/MainContent';
import Spinner from '../spinner/Spinner';

const Main = (props) => {
  const { loadMoreMovies, page, totalPages } = props;
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
    loadMoreMovies('now_playing', 1);
  }, [currentPage]);

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
  setResponsePageNumber: PropTypes.func
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, { loadMoreMovies })(Main);
