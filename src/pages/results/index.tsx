import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NotAll } from "@/components/NotAll/NotAll";
import { Result } from "@/widgets/Result/Result";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Results() {
    return <>
        <Header />
        <Result />
        <NotAll />
        <Footer background="#F4F4F1" color="#111110" />
    </>
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
        },
    };
};