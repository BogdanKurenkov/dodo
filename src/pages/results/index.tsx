import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "styled-components";

import { Result } from "@/widgets/Result/Result";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NotAll } from "@/components/NotAll/NotAll";

export default function Results() {
    const theme = useTheme();

    const router = useRouter();
    const { source } = router.query;

    return <>
        <Head>
            <title>Додо Лаб</title>
        </Head>
        <Header />
        <main role="main">
            <Result />
            {source === "qr" && <NotAll />}
        </main>
        <Footer
            background={source === "qr" ? theme.colors.white : theme.colors.black}
            color={source === "qr" ? theme.colors.black : theme.colors.white}
        />
    </>
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
        },
    };
};