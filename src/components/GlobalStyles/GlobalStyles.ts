import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  @font-face {
    font-family: "Neue Haas Unica W1G";
    src: url("https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.eot");
    src: url("https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.eot?#iefix") format("embedded-opentype"),
         url("https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.woff2") format("woff2"),
         url("https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.woff") format("woff"),
         url("https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.ttf") format("truetype"),
         url("https://db.onlinewebfonts.com/t/31267e36af6f8dac65a56e78345e945e.svg#Neue Haas Unica W1G") format("svg");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Neue Haas Unica W1G";
    src: url("https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.eot");
    src: url("https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.eot?#iefix") format("embedded-opentype"),
         url("https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.woff2") format("woff2"),
         url("https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.woff") format("woff"),
         url("https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.ttf") format("truetype"),
         url("https://db.onlinewebfonts.com/t/7d349f3b93cd47712cf75443b05965bf.svg#Neue Haas Unica W1G Medium") format("svg");
    font-weight: 500; 
    font-style: normal;
  }

  @font-face {
    font-family: 'Segoe ui Semibold';
    src: url('/fonts/segoe_ui_semibold.woff2') format('woff2');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 100%;
    scroll-behavior: smooth;
    font-family: "Neue Haas Unica W1G", sans-serif !important;
  }

  html[lang="ru"], html[lang="by"] * {
    font-family: "Neue Haas Unica W1G", sans-serif !important;
  }

  html[lang="kk"], html[lang="kz"] * {
    font-family: "Segoe ui Semibold", sans-serif !important;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  .main {
    margin-top: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      margin-top: 82px;
    }
  }

  button, input[type="button"], input[type="submit"] {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
  }

  button:focus, input[type="button"]:focus, input[type="submit"]:focus {
    outline: none;
  }
`;
