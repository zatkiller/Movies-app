import { MOVIE_LIST, RESPONSE_PAGE, LOAD_MORE_RESULTS, MOVIE_TYPE } from '../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  movieType: 'now_playing'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state, // return all the other properties in the previous state
        list: action.payload
      };
    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case LOAD_MORE_RESULTS:
      console.log(action);
      return {
        ...state,
        list: [...state.list, ...action.payload.list]
      };
    case MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload
      };
    default:
      return state;
  }
};
