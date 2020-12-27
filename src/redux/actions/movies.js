import { MOVIE_LIST, SET_ERROR } from '../types';
import { MOVIE_API_URL } from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { results } = movies.data; // data is due to axios response
    dispatchMethod(MOVIE_LIST, results, dispatch);
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
