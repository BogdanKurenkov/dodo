import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
    line-height: 100%;
    scroll-behavior: smooth;
  }

  html {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
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

  .main{
    margin-top: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      margin-top: 82px;
    }
  }
`;
