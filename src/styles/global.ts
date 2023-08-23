import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.gray};
  }

  html, body{
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
