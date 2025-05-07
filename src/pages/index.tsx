import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "styled-components";

import { Faq } from "@/widgets/Faq/Faq";
import { Research } from "@/widgets/Research/Research";
import { Banner } from "@/widgets/Banner/Banner";
import { Slider } from "@/widgets/Slider/Slider";
import { Steps } from "@/widgets/Steps/Steps";
import { PopupCitySelect } from "@/components/Shared/PopupCitySelect/PopupCitySelect";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { BgWrapper } from "@/components/BgWrapper/BgWrapper";
import { parseCookies } from "nookies";

interface HomeProps {
  cookies: Record<string, string>;
}

export default function Home({ cookies }: HomeProps) {
  const router = useRouter();
  const { source } = router.query;

  const { NEXT_LOCALE: locale, USER_COUNTRY: country } = cookies;
  const isLanguageSelected = locale && country;

  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Додо лаб</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PopupCitySelect />
      <main className="main">
        <Banner />
        <Slider />
        {source !== "qr" && <Steps />}
        <BgWrapper isQr={source === "qr"}>
          {source !== "qr" && <Research />}
          <Faq isQr={source === "qr"} />
        </BgWrapper>
      </main>
      <Footer
        background={isLanguageSelected ? theme.colors.white : theme.colors.black}
        color={isLanguageSelected ? theme.colors.black : theme.colors.white}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;

  const cookies = parseCookies({ req });

  return {
    props: {
      cookies,
      ...(await serverSideTranslations(ctx.locale ?? "ru", ["common"])),
    },
  };
}
