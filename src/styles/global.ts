import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100%;
  }

  body > #root {
    display: flex;
    justify-content: center;
  }

  

`;
