import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from "styled-components";
import Script from 'next/script';
import Head from 'next/head';

import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { theme } from '@/constants/theme';
import { neueHaasUnica, segoeUiSemibold } from "@/lib/fonts";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${neueHaasUnica.variable} ${segoeUiSemibold.variable}`}>
      <Head>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101709988"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </Head>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101709988, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default appWithTranslation(App);