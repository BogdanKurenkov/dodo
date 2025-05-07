import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { authUser, getRating } from "@/api";
import { AuthResponse, RatingItem } from "@/api/types";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import SauceImage from "@/assets/images/sauce.png";

import {
  ResultBackground,
  ContainerInner,
  ResultHeader,
  ResultTitle,
  ResultDescription,
  ResultContentWrapper,
  ResultSubtitle,
  Button,
  Sauce,
} from "./styled";


export default function VoteResult() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const [/*rate*/, setRate] = useState<RatingItem[]>([]);
  const [/*user*/, setUser] = useState<AuthResponse>();

  useEffect(() => {
    getRating().then((res) => {
      setRate(res.data)
    })
    authUser(Cookies.get('token') || "").then((res) => {
      setUser(res)
    })
  }, [])

  useEffect(() => {
    const animation = animate(count, 48, {
      duration: 2,
      ease: "easeOut"
    });

    return animation.stop;
  }, [count]);

  return (
    <>
      <Header />
      <main className="main">
        <ResultBackground>
          <Container>
            <ContainerInner>
              <ResultHeader>
                <ResultTitle>{t('vote_result.title')}</ResultTitle>
                <ResultDescription>
                  <TextWithLineBreaks text={t('vote_result.description')} />
                </ResultDescription>
              </ResultHeader>
              <ResultContentWrapper>
                <ResultSubtitle>
                  <motion.span>{rounded}</motion.span>% {t('vote_result.participants')}
                </ResultSubtitle>
                <ResultDescription>
                  <TextWithLineBreaks text={t('vote_result.vote')} /> {locale === 'kz' ? "" : "№2"}
                </ResultDescription>
                <Button onClick={() => router.push('/results')} $variant="glass">
                  {t('buttons.look')}
                </Button>
              </ResultContentWrapper>
              <Sauce alt="sauce" src={SauceImage} />
            </ContainerInner>
          </Container>
        </ResultBackground>
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