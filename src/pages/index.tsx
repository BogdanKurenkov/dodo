import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { GetStaticProps } from "next";
import { Header } from "@/components/Header/Header";
import { LottieBase } from "@/components/LottieBase/LottieBase";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Додо</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageSwitcher />
      <Header />
      <LottieBase path="/lottie/box_anima1/data.json" />
      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
    },
  };
};