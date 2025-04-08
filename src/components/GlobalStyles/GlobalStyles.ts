import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Neue Haas Unica';
    src: url('/fonts/NeueHaasUnica-Regular.woff2') format('woff2'),
         url('/fonts/NeueHaasUnica-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url('/fonts/NeueHaasUnica-Medium.woff2') format('woff2'),
         url('/fonts/NeueHaasUnica-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Neue Haas Unica';
    src: url('/fonts/NeueHaasUnica-Bold.woff2') format('woff2'),
         url('/fonts/NeueHaasUnica-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url('/fonts/NeueHaasUnica-Black.woff2') format('woff2'),
         url('/fonts/NeueHaasUnica-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url('/fonts/NeueHaasUnica-Light.woff2') format('woff2'),
        url('/fonts/NeueHaasUnica-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Neue Haas Unica', -apple-system, sans-serif;
    line-height: 100%;
  }

  html {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }
`;
