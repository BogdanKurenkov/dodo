import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";

import { AuthRequest } from "@/api/types";
import { authUser } from "@/api";

import { useFingerprint } from "@/hooks/useFingerprint";

import { TgAuth } from "@/widgets/TgAuth/TgAuth";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { PageWrapper } from "@/components/Shared/PageWrapper/PageWrapper";

export default function Auth() {
    const fingerprint = useFingerprint();
    const router = useRouter();

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

                router.push("/vote?source=qr");
            })
    }, [fingerprint, router]);



    return (
        <>
            <Head>
                <title>Додо Лаб</title>
                <meta name="description" content="Участвуйте в исследованиях Додо Лаб, пробуйте новые соусы и влияйте на меню Додо Пиццы" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <PageWrapper>
                <Header />
                <main>
                    <TgAuth />
                </main>
                <Footer />
            </PageWrapper>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { locale, query } = context;
    const { source } = query;

    if (source !== "qr") {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "ru", ["common"])),
        },
    };
};