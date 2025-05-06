import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "styled-components";

import { Result } from "@/widgets/Result/Result";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NotAll } from "@/components/NotAll/NotAll";
import { useRouter } from "next/router";

export default function Results() {
    const theme = useTheme();

    const router = useRouter();
    const { source } = router.query;

    return <>
        <Header />
        <Result />
        {source === "qr" && <NotAll />}
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