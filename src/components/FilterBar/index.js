import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  transition: 0.3s ease-in-out;
`;

const FilterBar = ({ onRatingChange }) => {
  const ratings = [...Array(10)].map((_, i) => {
    return (
      <li key={i}>
        <label htmlFor={`rating-${i}`}>
          {i}
          <input
            id={`rating-${i}`}
            type="radio"
            name="rating"
            value={i}
            onChange={onRatingChange}
          />
        </label>
      </li>
    );
  });

  return (
    <Wrapper>
      <ul>{ratings}</ul>
    </Wrapper>
  );
};

FilterBar.propTypes = {
  genres: PropTypes.array,
  onRatingChange: PropTypes.func,
};

export default FilterBar;
