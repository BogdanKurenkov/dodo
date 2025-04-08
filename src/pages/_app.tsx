import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { theme } from '../constants/theme'

function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default appWithTranslation(App);
