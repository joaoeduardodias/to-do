import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

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
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
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
