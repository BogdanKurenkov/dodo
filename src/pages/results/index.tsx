import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "styled-components";

import { Result } from "@/widgets/Result/Result";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NotAll } from "@/components/NotAll/NotAll";

export default function Results() {
    const theme = useTheme();

    return <>
        <Header />
        <Result />
        <NotAll />
        <Footer background={theme.colors.white} color={theme.colors.black} />
    </>
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
        },
    };
};