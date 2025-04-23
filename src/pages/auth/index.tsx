import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { PageWrapper } from "@/components/Shared/PageWrapper/PageWrapper";
import { TgAuth } from "@/widgets/TgAuth/TgAuth";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function Auth() {
    return <PageWrapper>
        <Header />
        <main>
            <TgAuth />
        </main>
        <Footer />
    </PageWrapper>
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
        },
    };
};
