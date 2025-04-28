import { useState } from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { LottieBase } from "@/components/LottieBase/LottieBase";

import {
  VoteBackground,
  SaucesList,
  SauceContainer,
  SauceCard,
  SauceNumber,
  SauceType,
  SauceSample,
  SauceTitle,
  Button,
  VotePrompt,
} from "./styled";
import { LottieRotate } from "@/components/LottieRotate/LottieRotate";

const sauces = [
  "sauces.sauce1.name",
  "sauces.sauce2.name",
  "sauces.sauce3.name"
];

const animations = [
  <LottieBase path="/lottie/vote/dip_1_3_opening_lottie/animation.json" width={200} height={200} />,
  <LottieBase path="/lottie/vote/dip_2_2_opening_lottie/animation.json" width={200} height={200} />,
  <LottieBase path="/lottie/vote/dip_3_2_opening_lottie/animation.json" width={200} height={200} />
]

export default function Vote() {
  const { t } = useTranslation('common');

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleCardClick = (number: number) => {
    if (activeCard === number) {
      setActiveCard(null);
      setIsButtonActive(false);
    } else {
      setActiveCard(number);
      setIsButtonActive(true);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <VoteBackground>
          <Container>
            <SectionTitle isWhite={true}>
              <TextWithLineBreaks text={t('vote.title')} />
            </SectionTitle>
            <SaucesList>
              {sauces.map((sauce, index) => (
                <SauceContainer key={index}>
                  {/* <SauceCard
                    onClick={() => handleCardClick(index)}
                    className={activeCard === index ? "active" : ""}
                  >
                    <SauceNumber>{index + 1}</SauceNumber>
                    <SauceType>{t(sauce)}</SauceType>
                  </SauceCard> */}
                  <div onClick={() => handleCardClick(index)} >
                    {animations[index]}
                  </div>
                  <SauceSample>{t('results.sample')} № {index + 1}</SauceSample>
                  <SauceTitle>{t(sauce)}</SauceTitle>
                </SauceContainer>
              ))}
            </SaucesList>
            <Button $variant="glass" disabled={!isButtonActive} type="button">
              {t('buttons.vote_select')}
            </Button>
            <VotePrompt>{t('vote.click')}</VotePrompt>
          </Container>
        </VoteBackground>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query } = context;
  const { source } = query;

  const cookies = req.headers.cookie?.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>) || {};

  // TODO потом убрать заглушку и привязатсья к реальной куке

  const accessToken = cookies.accessToken || true;

  if (!accessToken && source === 'qr') {
    return {
      redirect: {
        destination: '/auth?source=qr',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "ru", ["common"])),
    },
  };
};
