import React from 'react';
import { mount } from 'enzyme';

import MovieCard from './index';

describe('<MovieCard />', () => {
  it('displays MovieCard', () => {
    const movie = {
      genre_ids: [1],
      id: 10,
      title: 'Hello world!',
    };

    const genres = [{ id: 1, name: 'thriller' }];

    const wrapper = mount(<MovieCard genres={genres} movie={movie} />);

    expect(wrapper.find(MovieCard)).toHaveLength(1);
    expect(wrapper.html().indexOf('Hello world!')).not.toBe(-1);
  });
});
