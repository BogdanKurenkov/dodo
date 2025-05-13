import { neueHaasUnica, segoeUiSemibold } from "@/lib/fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html[lang="ru"], html[lang="by"] {
    font-family: ${neueHaasUnica.style.fontFamily}, sans-serif;
  }

  html[lang="kk"], html[lang="kz"] {
    font-family: ${segoeUiSemibold.style.fontFamily},  sans-serif;

    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
    }
  }

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
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input,
  textarea,
  [contenteditable="true"] {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
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

  button, input[type="button"], input[type="submit"], a, img {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  button:focus, input[type="button"]:focus, input[type="submit"]:focus, a:focus, img:focus {
    outline: none;
  }
`;
