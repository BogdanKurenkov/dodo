import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import { TgAuth } from "@/widgets/TgAuth/TgAuth";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { PageWrapper } from "@/components/Shared/PageWrapper/PageWrapper";

export default function Auth() {
    return (
        <>
            <Head>
                <title>Додо Лаб</title>
                <meta name="description" content="Участвуйте в исследованиях Додо Лаб, пробуйте новые соусы и влияйте на меню Додо Пиццы" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <PageWrapper>
                <Header />
                <main role="main">
                    <TgAuth />
                </main>
                <Footer />
            </PageWrapper></>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { locale, query } = context;
    const { source } = query;

    if (source !== 'qr') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
        },
    };
};