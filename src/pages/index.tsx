import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from "styled-components";

import { Faq } from "@/widgets/Faq/Faq";
import { Research } from "@/widgets/Research/Research";
import { Banner } from "@/widgets/Banner/Banner";
import { Slider } from "@/widgets/Slider/Slider";
import { Steps } from "@/widgets/Steps/Steps";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { BgWrapper } from "@/components/BgWrapper/BgWrapper";

export default function Home() {
  const router = useRouter();
  const { source } = router.query;

  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Додо</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <Banner />
        <Slider />
        <Steps />
        <BgWrapper isQr={source === 'qr'}>
          {source !== 'qr' && <Research />}
          <Faq isQr={source === 'qr'} />
        </BgWrapper>
      </main>
      <Footer
        background={theme.colors.white}
        color={theme.colors.black}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
    },
  };
};