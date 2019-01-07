import {
  GENRES_RECEIVED,
  GENRES_REQUESTED,
  MOVIES_RECEIVED,
  MOVIES_REQUESTED,
} from './constants';

export const initialState = {
  genres: [],
  loading: false,
  movies: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GENRES_RECEIVED:
      return {
        ...state,
        genres: action.data.genres,
        loading: false,
      };

    case GENRES_REQUESTED:
      return {
        ...state,
        genres: [],
        loading: true,
      };

    case MOVIES_RECEIVED:
      return {
        ...state,
        movies: action.data.results,
        loading: false,
      };

    case MOVIES_REQUESTED:
      return {
        ...state,
        movies: [],
        loading: true,
      };
    default:
      return state;
  }
}

export default moviesReducer;
