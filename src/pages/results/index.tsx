import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "styled-components";
import { parseCookies } from "nookies";

import { getRating } from "@/api";
import { RatingResponse } from "@/api/types";

import { Result } from "@/widgets/Result/Result";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NotAll } from "@/components/NotAll/NotAll";

const EMPTY_DATA: RatingResponse = {
    data: [
        { sauce: 1, count: 0 },
        { sauce: 2, count: 0 },
        { sauce: 3, count: 0 }
    ],
    total_votes: 0
};

interface ResultsPageProps {
    ratingData: RatingResponse | null;
    cookies: Record<string, string>;
}

export default function Results({ ratingData, cookies }: ResultsPageProps) {
    const theme = useTheme();
    const router = useRouter();
    const { source } = router.query;

    const { USER_COUNTRY: country } = cookies;

    return (
        <>
            <Head>
                <title>Додо Лаб</title>
                <meta
                    name="description"
                    content="Участвуйте в исследованиях Додо Лаб, пробуйте новые соусы и влияйте на меню Додо Пиццы"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header country={country} />
            <main role="main">
                <Result ratingData={ratingData === null ? EMPTY_DATA : ratingData} />
                {source === "qr" && <NotAll />}
            </main>
            <Footer
                background={source === "qr" ? theme.colors.white : theme.colors.black}
                color={source === "qr" ? theme.colors.black : theme.colors.white}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ locale, req }) => {
    const cookies = parseCookies({ req })

    try {
        const ratingData = await getRating();

        return {
            props: {
                ...(await serverSideTranslations(locale ?? "ru", ["common"])),
                ratingData,
                cookies
            },
        };
    } catch (error) {
        console.error("Failed to fetch rating:", error);

        return {
            props: {
                ...(await serverSideTranslations(locale ?? "ru", ["common"])),
                ratingData: null,
                cookies
            },
        };
    }
};