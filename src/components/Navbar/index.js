import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import theme from '../../globalTheme';

const Wrapper = styled.div`
  background: ${theme.colorBlack};
  padding: 10px 20px;
`;

const Header = styled.div`
  color: ${theme.colorBlue};
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
`;

const Navbar = () => (
  <Wrapper>
    <Flex alignItems="center" justifyContent="space-between">
      <Header>Movie listings</Header>
    </Flex>
  </Wrapper>
);

export default Navbar;
