import React from 'react';
import { shallow } from 'enzyme';

import Movies from './Movies';
import Provider from '../../../internal/Provider';

describe('<Movies />', () => {
  it('displays Movies', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };

    const wrapper = shallow(
      <Provider>
        <Movies {...props} />
      </Provider>
    );

    expect(wrapper.find(Movies)).toHaveLength(1);
  });
});
