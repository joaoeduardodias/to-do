import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

 body {
   background: #202124;
   color: #fff;
   font: 400 1rem 'Poppins', sans-serif;

   -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  @media(max-width: 1080px){
      html {
      font-size: 93.75%;
      }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
