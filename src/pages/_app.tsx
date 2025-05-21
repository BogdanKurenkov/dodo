import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";

import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";

import { theme } from "@/constants/theme";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;

  const defaultTitle = "Додо Лаб";
  const defaultDescription =
    "Участвуйте в исследованиях Додо Лаб, пробуйте новые соусы и влияйте на меню Додо Пиццы";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonicalUrl = `${siteUrl}${pathname}`;

  const previewImage = `${siteUrl}/images/social-preview.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: defaultTitle,
    description: defaultDescription,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "Додо Пицца",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.svg`,
      },
    },
  };

  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:image" content={previewImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Додо Лаб" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={previewImage} />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://use.typekit.net/bnl3bdl.css" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101709988"
              style={{ position: "absolute", left: "-9999px" }}
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
  );
}

export default appWithTranslation(App);
