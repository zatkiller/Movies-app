import { MOVIE_LIST } from '../types';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state, // return all the other properties in the previous state
        list: action.payload
      };
    default:
      return state;
  }
};
