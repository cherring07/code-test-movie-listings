import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterBar from '../../../components/FilterBar';
import MovieCard from '../../../components/MovieCard';
import Navbar from '../../../components/Navbar';

class Movies extends Component {
  componentDidMount() {
    this.props.genresRequested();
    this.props.moviesRequested();
  }

  onRatingChange() {
    // move to dispatch
  }

  render() {
    const { movies, genres, ratingChanged } = this.props;

    const movieCards = movies.map(movie => (
      <li key={movie.id}>
        <MovieCard movie={movie} genres={genres} />
      </li>
    ));

    return (
      <div>
        <Navbar />
        <FilterBar
          onRatingChange={event => ratingChanged(event.target.value)}
        />
        <ol>{movieCards}</ol>
      </div>
    );
  }
}

Movies.propTypes = {
  genres: PropTypes.array,
  genresRequested: PropTypes.func,
  movies: PropTypes.array,
  moviesRequested: PropTypes.func,
  ratingChanged: PropTypes.func,
};

export default Movies;
