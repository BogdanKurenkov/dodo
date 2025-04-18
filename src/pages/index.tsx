import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Faq } from "@/widgets/Faq/Faq";
import { Research } from "@/widgets/Research/Research";
import { Slider } from "@/widgets/Slider/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Додо</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Research />
      <Slider />
      <Faq />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
};
