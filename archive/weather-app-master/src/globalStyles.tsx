import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100%;
    font-family: 'Oswald',Open-Sans, Helvetica, Sans-Serif;
  }

  .App {
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1399px) {
  .App {
    display: flex;
  }
}

`;

export default GlobalStyle;
