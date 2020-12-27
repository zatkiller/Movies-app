import { MOVIE_LIST, SET_ERROR, RESPONSE_PAGE } from '../types';
import { MOVIE_API_URL } from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = movies.data; // data is due to axios response
    const payload = {
      page,
      totalPages: total_pages
    };
    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
  } catch (err) {
    if (err.response) {
      dispatchMethod(SET_ERROR, err.response.data.message, dispatch);
    }
  }
};

const dispatchMethod = (type, payload, dispatch) => {
  // Redux Thunk uses the disaptch syntax to update the store
  dispatch({ type, payload });
};
