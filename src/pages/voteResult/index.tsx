import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import SauceImage from "@/assets/images/sauce.png";
import ResultBackgroundImage from "../../../public/images/voteResult-background.png";

import {
  ResultWrapper,
  ResultBackground,
  ContainerInner,
  ResultHeader,
  ResultBackgroundMob,
  ResultTitle,
  ResultDescription,
  ResultContentWrapper,
  ResultSubtitle,
  Button,
  Sauce,
} from "./styled";

export default function VoteResult() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Header />
      <main className="main">
        <ResultWrapper>
          <ResultBackground src={ResultBackgroundImage.src} />
          <Container>
            <ContainerInner>
              <ResultHeader>
                <ResultBackgroundMob src={ResultBackgroundImage.src} />
                <ResultTitle>{t("vote_result.title")}</ResultTitle>
                <ResultDescription>
                  <TextWithLineBreaks text={t("vote_result.description")} />
                </ResultDescription>
              </ResultHeader>
              <ResultContentWrapper>
                <ResultSubtitle>
                  <span>48%</span> {t("vote_result.participants")}
                </ResultSubtitle>
                <ResultDescription>
                  <TextWithLineBreaks text={t("vote_result.vote")} />{" "}
                  {locale === "kz" ? "" : "№2"}
                </ResultDescription>
                <Button
                  onClick={() => router.push("/results")}
                  $variant="glass"
                >
                  {t("buttons.look")}
                </Button>
              </ResultContentWrapper>
              <Sauce alt="sauce" src={SauceImage} />
            </ContainerInner>
          </Container>
        </ResultWrapper>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
};
