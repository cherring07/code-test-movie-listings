import { createSelector } from 'reselect';

const selectMoviesPageDomain = state => state.moviesReducer;
const selectMovies = state => state.moviesReducer.movies;
const selectRating = state => state.moviesReducer.rating;
const selectGenres = state => state.moviesReducer.genres;

const makeSelectGenres = () =>
  createSelector(selectMoviesPageDomain, substate => substate.genres);

const makeSelectRating = () =>
  createSelector(selectMoviesPageDomain, substate => substate.rating);

const makeSelectMovies = () =>
  createSelector(
    [selectMovies, selectGenres, selectRating],
    (movies, genres, rating) => {
      const genreIds = genres.map(genres => genres.id);

      return movies
        .filter(movie =>
          movie.genre_ids.find(genre => genreIds.includes(genre))
        )
        .filter(movie => movie.vote_average >= rating)
        .sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
    }
  );

export { makeSelectGenres, makeSelectMovies, makeSelectRating };
