import { createGlobalStyle } from 'styled-components';

import { normalize } from './Normalize';

const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  main {
    flex-grow: 1;
    min-height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  header,
  footer {
    flex-grow: 0;
    flex-shrink: 0;
  }
  a {
    color: inherit;
  }
  .container {
    max-width: 1360px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    position: relative;
  }
  p.error {
    color: red;
    margin: 10px 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
