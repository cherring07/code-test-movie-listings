import React from 'react';
import { find, propEq } from 'ramda';
import PropTypes from 'prop-types';

const Genres = ({ genres, genreIds }) => {
  const genreList = genreIds.map(id => (
    <li key={id}>
      <span>{find(propEq('id', id), genres).name}</span>
    </li>
  ));

  return <ul>{genreList}</ul>;
};

Genres.propTypes = {
  genres: PropTypes.array,
  genreIds: PropTypes.array,
};
export default Genres;
