import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Movies from './Movies';
import { makeSelectGenres, makeSelectMoviesPopular } from './selectors';
import { genresRequested, moviesRequested } from './actions';

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
  movies: makeSelectMoviesPopular(),
});

const mapDispatchToProps = dispatch => ({
  moviesRequested: () => dispatch(moviesRequested()),
  genresRequested: () => dispatch(genresRequested()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Movies);
