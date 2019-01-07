import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Genres from '../Genres';
import theme from '../../globalTheme';

const Wrapper = styled.div`
  max-width: 200px;
  margin: 1rem;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
  margin: 0;
  color: ${theme.colorWhite};
  line-height: 1.25rem;
`;

const CustomCard = styled.img`
  display: block;
  height: 300px;
  margin: 0;
  width: 200px;
`;

const Details = styled.div`
  padding: 0.5rem;
  background: #1b1b1b;
  color: #ffffff;
  height: 75px;
`;

const MovieCard = ({ genres, movie: { poster_path, title, genre_ids } }) => (
  <Wrapper>
    <CustomCard
      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      alt={title}
    />
    <Details>
      <Title>{title}</Title>
      <Genres genres={genres} genreIds={genre_ids} />
    </Details>
  </Wrapper>
);

MovieCard.propTypes = {
  genres: PropTypes.array,
  movie: PropTypes.shape({
    genre_ids: PropTypes.array,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default MovieCard;
