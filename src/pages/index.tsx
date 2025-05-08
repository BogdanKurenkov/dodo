import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "styled-components";
import { parseCookies } from "nookies";

import { Faq } from "@/widgets/Faq/Faq";
import { Research } from "@/widgets/Research/Research";
import { Banner } from "@/widgets/Banner/Banner";
import { Slider } from "@/widgets/Slider/Slider";
import { Steps } from "@/widgets/Steps/Steps";
import { PopupCitySelect } from "@/components/Shared/PopupCitySelect/PopupCitySelect";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { BgWrapper } from "@/components/BgWrapper/BgWrapper";
import { PageWrapper } from "@/components/Shared/PageWrapper/PageWrapper";

interface HomeProps {
  cookies: Record<string, string>;
}

export default function Home({ cookies }: HomeProps) {
  const router = useRouter();
  const { pathname, query } = router;
  const { source } = query;

  const { NEXT_LOCALE: locale, USER_COUNTRY: country } = cookies;
  const isLanguageSelected = locale && country;

  const theme = useTheme();

  const pageTitle = "Додо Лаб";
  const pageDescription = "Участвуйте в исследованиях Додо Лаб, пробуйте новые соусы и влияйте на меню Додо Пиццы";
  const canonicalUrl = `https://lab-preview.vercel.app${pathname}`;
  const ogImage = "https://dodopizza.ru/images/social-share.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Додо Пицца",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dodopizza.ru/images/logo.png"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={ogImage} />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <PageWrapper>
        <Header country={country} />
        <PopupCitySelect />
        <main role="main" className="main" style={{ opacity: isLanguageSelected ? 1 : 0 }}>
          <div itemScope itemType="https://schema.org/WebPageElement">
            <Banner />
            <Slider />
            {source !== "qr" && <Steps />}
            <BgWrapper isQr={source === "qr"}>
              {source !== "qr" && <Research />}
              <Faq isQr={source === "qr"} />
            </BgWrapper>
          </div>
        </main>
        <Footer
          background={isLanguageSelected ? theme.colors.white : theme.colors.black}
          color={isLanguageSelected ? theme.colors.black : theme.colors.white}
        />
      </PageWrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, locale } = ctx;

  const cookies = parseCookies({ req });

  return {
    props: {
      cookies,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}