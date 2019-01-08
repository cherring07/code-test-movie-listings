import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Movies from './Movies';
import { makeSelectGenres, makeSelectMovies } from './selectors';
import { genresRequested, moviesRequested, ratingChanged } from './actions';

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
  movies: makeSelectMovies(),
});

const mapDispatchToProps = dispatch => ({
  genresRequested: () => dispatch(genresRequested()),
  moviesRequested: () => dispatch(moviesRequested()),
  ratingChanged: rating => dispatch(ratingChanged(rating)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Movies);
