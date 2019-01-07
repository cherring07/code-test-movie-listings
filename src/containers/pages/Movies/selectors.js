import { sortBy, prop, ascend } from 'ramda';
import { createSelector } from 'reselect';

const selectMoviesPageDomain = state => state.moviesReducer;

const makeSelectGenres = () =>
  createSelector(selectMoviesPageDomain, substate => substate.genres);

const makeSelectMovies = () =>
  createSelector(selectMoviesPageDomain, substate => substate.movies);

const makeSelectMoviesPopular = () =>
  createSelector(selectMoviesPageDomain, substate =>
    sortBy(ascend(prop('popularity')), substate.movies)
  );

// export default makeSelectMoviesPage;
export { makeSelectGenres, makeSelectMovies, makeSelectMoviesPopular };
