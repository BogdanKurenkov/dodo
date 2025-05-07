import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { TgAuth } from "@/widgets/TgAuth/TgAuth";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { PageWrapper } from "@/components/Shared/PageWrapper/PageWrapper";

export default function Auth() {
    return (
        <PageWrapper>
            <Header />
            <main>
                <TgAuth />
            </main>
            <Footer />
        </PageWrapper>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { locale, query, req } = context;
    const { source } = query;

    const cookies =
        req.headers.cookie?.split(";").reduce((acc, cookie) => {
            const [key, value] = cookie.trim()?.split("=");
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>) || {};

    const accessToken = cookies.token || false;


    if (accessToken) {
        return {
            redirect: {
                destination: '/vote',
                permanent: false,
            },
        };
    }

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