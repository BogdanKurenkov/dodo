import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";

import { theme } from '@/constants/theme';
import { neueHaasUnica, segoeUiSemibold } from "@/lib/fonts";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${neueHaasUnica.variable} ${segoeUiSemibold.variable}`}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default appWithTranslation(App);