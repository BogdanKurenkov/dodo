import { neueHaasUnica, segoeUiSemibold } from "@/lib/fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    font-family: ${neueHaasUnica.style.fontFamily}, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 100%;
    scroll-behavior: smooth;
    font-family: inherit;
  }

  html[lang="ru"], html[lang="by"] {
    font-family: ${neueHaasUnica.style.fontFamily}, sans-serif;
  }

  html[lang="kk"], html[lang="kz"] {
    font-family: ${segoeUiSemibold.style.fontFamily}, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }

  /* Остальные стили остаются без изменений */
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
