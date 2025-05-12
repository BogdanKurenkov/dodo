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

interface IAuth {
    cookies: Record<string, string>;
}

export default function Auth({ cookies }: IAuth) {
    const fingerprint = useFingerprint();
    const router = useRouter();

    const { USER_COUNTRY: country } = cookies;

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
                <Header country={country} />
                <main>
                    <TgAuth />
                </main>
                <Footer />
            </PageWrapper>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { locale, query, req } = context;
    const { source } = query;

    const getLocalizedUrl = (path: string) => {
        return locale && locale !== 'ru' ? `/${locale}${path}` : path;
    };

    const cookies =
        req.headers.cookie?.split(";").reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split("=");
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>) || {};

    if (source !== "qr") {
        return {
            redirect: {
                destination: getLocalizedUrl("/"),
                permanent: false,
            },
        };
    }

    const token = cookies.token;

    if (token && source === "qr") {
        return {
            redirect: {
                destination: getLocalizedUrl("/vote?source=qr"),
                permanent: false,
            },
        };
    }

    return {
        props: {
            cookies,
            ...(await serverSideTranslations(locale ?? "ru", ["common"])),
        },
    };
};