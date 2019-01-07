import { createGlobalStyle } from 'styled-components';
import theme from './globalTheme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 2rem;
    margin: 0;
    background: ${theme.colorBlack};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
  }

  input {
    font-size: 1rem;
  }
`;
export default GlobalStyle;
