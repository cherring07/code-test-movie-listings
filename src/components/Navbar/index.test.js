import React from 'react';
import { mount } from 'enzyme';
import Navbar from './index';

describe('<Navbar />', () => {
  it('displays Navbar', () => {
    const wrapper = mount(<Navbar />);

    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
});
