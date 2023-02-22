import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  html,
  #root,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
    font-family: 'Press Start 2P', sans-serif;
  }
  

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  button,
  input ,
  select {
    appearance: none;
    border: none;
    font-family: 'Press Start 2P', sans-serif;
  }
  

  ul {
    list-style: none;
  }
`;
