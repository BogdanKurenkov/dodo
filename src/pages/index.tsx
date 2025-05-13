import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "styled-components";
import { parseCookies, setCookie } from "nookies";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import { authUser, trackVisit } from "@/api";
import { AuthRequest } from "@/api/types";

import { useFingerprint } from "@/hooks/useFingerprint";

import { Research } from "@/widgets/Research/Research";
import { Banner } from "@/widgets/Banner/Banner";
import { Slider } from "@/widgets/Slider/Slider";
const Steps = dynamic(
  () => import("@/widgets/Steps/Steps").then((mod) => mod.Steps),
  { ssr: false },
);
const Faq = dynamic(
  () => import("@/widgets/Faq/Faq").then((mod) => mod.Faq),
  { ssr: false },
);

import { PopupCitySelect } from "@/components/Shared/PopupCitySelect/PopupCitySelect";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { BgWrapper } from "@/components/BgWrapper/BgWrapper";
import { PageWrapper } from "@/components/Shared/PageWrapper/PageWrapper";

interface IHome {
  cookies: Record<string, string>;
}

export default function Home({ cookies }: IHome) {
  const router = useRouter();
  const { query } = router;
  const { source } = query;

  const { NEXT_LOCALE: locale, USER_COUNTRY: country } = cookies;
  const isLanguageSelected = locale && country;

  const theme = useTheme();

  const fingerprint = useFingerprint();

  useEffect(() => {
    trackVisit(source === 'qr' ? "qr" : "link");
  }, [])

  useEffect(() => {
    if (!fingerprint) return;

    const cookies = parseCookies();
    const authData: AuthRequest = {
      token: fingerprint,
      lang: cookies.NEXT_LOCALE,
      country: cookies.USER_COUNTRY
    };

    authUser(authData)
      .then((res) => {
        setCookie(null, 'token', res.user, {
          maxAge: 365 * 24 * 60 * 60,
          path: '/',
        });
      })
  }, [fingerprint, router]);

  return (
    <PageWrapper>
      {isLanguageSelected && <Header country={country} />}
      <PopupCitySelect />
      <main
        role="main"
        className="main"
        style={{
          height: isLanguageSelected ? "auto" : 0,
          opacity: isLanguageSelected ? 1 : 0
        }}
      >
        <div itemScope itemType="https://schema.org/WebPageElement">
          <Banner />
          {/* <Slider /> */}
          {source !== "qr" && <Steps />}
          <BgWrapper isQr={source === "qr"}>
            {source !== "qr" && <Research />}
            <Faq isQr={source === "qr"} />
          </BgWrapper>
        </div>
      </main>
      <Footer
        style={{
          height: isLanguageSelected ? "auto" : 0,
          opacity: isLanguageSelected ? 1 : 0
        }}
        background={isLanguageSelected ? theme.colors.white : theme.colors.black}
        color={isLanguageSelected ? theme.colors.black : theme.colors.white}
      />
    </PageWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res, locale, defaultLocale, query } = ctx;

  if (query.fingerprint) {
    const authData: AuthRequest = {
      token: query.fingerprint as string,
      lang: locale || 'ru',
      country: parseCookies({ req }).USER_COUNTRY || 'ru'
    };

    try {
      const authResponse = await authUser(authData);
      res.setHeader('Set-Cookie', [
        `token=${authResponse.user}; Max-Age=${365 * 24 * 60 * 60}; Path=/;`
      ]);

      const targetLocale = locale || 'ru';
      res.writeHead(302, { Location: `/${targetLocale}/vote?source=qr` });
      res.end();
      return { props: {} };
    } catch (error) {
      console.error('Auth error:', error);
      const targetLocale = locale || 'ru';
      res.writeHead(302, { Location: `/${targetLocale}/vote?source=qr` });
      res.end();
      return { props: {} };
    }
  }

  const rawUrl = req.url || "";
  const correctedUrl = rawUrl.replace(/&amp;/g, "&");

  if (rawUrl !== correctedUrl) {
    const targetLocale = locale || 'ru';
    const newUrl = correctedUrl.startsWith(`/${targetLocale}`)
      ? correctedUrl
      : `/${targetLocale}${correctedUrl}`;

    res.writeHead(302, { Location: newUrl });
    res.end();
    return { props: {} };
  }

  const cookies = parseCookies({ req });

  if (cookies.USER_COUNTRY !== 'kz' && locale === 'kz') {
    const targetLocale = defaultLocale || 'ru';
    const newUrl = correctedUrl.replace('/kz', `/${targetLocale}`);
    res.writeHead(302, { Location: newUrl });
    res.end();
    return { props: {} };
  }

  return {
    props: {
      cookies,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
};
