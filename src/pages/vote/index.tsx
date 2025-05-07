import { useState } from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Head from "next/head";
// import Cookies from "js-cookie";

// import { sendVote } from "@/api";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

const LottieBase = dynamic(
  () =>
    import("@/components/LottieBase/LottieBase").then((mod) => mod.LottieBase),
  { ssr: false },
);
const LottieRotate = dynamic(
  () =>
    import("@/components/LottieRotate/LottieRotate").then(
      (mod) => mod.LottieRotate,
    ),
  { ssr: false },
);

import {
  VoteBackground,
  SaucesList,
  SauceContainer,
  SauceSample,
  SauceTitle,
  Button,
  VotePrompt,
} from "./styled";


const sauces = [
  "sauces.sauce1.name",
  "sauces.sauce2.name",
  "sauces.sauce3.name",
];


export default function Vote() {
  const { t } = useTranslation("common");

  const router = useRouter();

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const device = useDeviceDetect();

  const animations_open = [
    <LottieBase
      key={1}
      path="/lottie/vote/dip_1_3_opening_lottie/animation.json"
    />,
    <LottieBase
      key={2}
      path="/lottie/vote/dip_2_2_opening_lottie/animation.json"
    />,
    <LottieBase
      key={3}
      path="/lottie/vote/dip_3_2_opening_lottie/animation.json"
    />,
  ];

  const animations_rotate = [
    <LottieRotate
      key={4}
      isAnimate={!isPlaying}
      isPlaying={isPlaying}
      path="/lottie/vote/dip_1_3_rotation_lottie/animation.json"
    />,
    <LottieRotate
      key={5}
      direction="down"
      isAnimate={!isPlaying}
      isPlaying={isPlaying}
      path="/lottie/vote/dip_2_2_rotation_lottie/animation.json"
    />,
    <LottieRotate
      key={6}
      isAnimate={!isPlaying}
      isPlaying={isPlaying}
      path="/lottie/vote/dip_3_2_rotation_lottie/animation.json"
    />,
  ];

  const handleCardClick = (number: number) => {
    if (activeCard === number) {
      setActiveCard(null);
      setIsButtonActive(false);
    } else {
      setActiveCard(number);
      setIsButtonActive(true);
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      setIsTransitioning(true);
      setIsPlaying(true);
      setTimeout(() => {
        setStep(2);
      }, 1200);
    }
  };

  const handleVoteClick = () => {
    if (step === 1) {
      setIsTransitioning(true);
      setIsPlaying(true);
      setTimeout(() => {
        setStep(2);
      }, 1200);
    } else {
      // const data = {
      //   token: Cookies.get("token") || "",
      //   completed: true,
      //   sauce: activeCard as 1 | 2 | 3
      // }
      // sendVote(data).then(() => {
      //   router.push("/voteResult");
      // }).catch(() => {

      // })
      router.push("/voteResult?source=qr");
    }
  };

  return (
    <>
      <Head>
        <title>Додо лаб</title>
      </Head>
      <Header />
      <main className="main">
        <VoteBackground $step={step} $isTransitioning={isTransitioning}>
          <Container>
            <SectionTitle isWhite={true}>
              <TextWithLineBreaks text={t("vote.title")} />
            </SectionTitle>
            <SaucesList>
              {sauces.map((sauce, index) => (
                <SauceContainer key={index}>
                  <div
                    style={{
                      position: "relative",
                      width: device === "desktop" ? 300 : 230,
                      height: device === "desktop" ? 300 : 230,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: step === 1 ? 1 : 0,
                        pointerEvents: step === 1 ? "auto" : "none",
                        transition: "",
                      }}
                      onClick={handleNextStep}
                    >
                      {animations_rotate[index]}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: step === 2 ? 1 : 0,
                        pointerEvents: step === 2 ? "auto" : "none",
                        transition: "",
                      }}
                      onClick={() => handleCardClick(index)}
                    >
                      {animations_open[index]}
                    </div>
                  </div>
                  <SauceSample $sPlaying={isPlaying}>
                    {t("results.sample")} № {index + 1}
                  </SauceSample>
                  <SauceTitle $sPlaying={isPlaying}>{t(sauce)}</SauceTitle>
                </SauceContainer>
              ))}
            </SaucesList>
            <Button
              $variant="glass"
              disabled={step === 2 && !isButtonActive}
              type="button"
              onClick={handleVoteClick}
              $step={isPlaying ? 2 : 1}
            >
              {step === 2 ? t("buttons.vote_select") : t("buttons.start")}
            </Button>
            <VotePrompt style={{ opacity: step === 1 ? "0" : "0.4" }}>
              {t("vote.click")}
            </VotePrompt>
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

  const cookies =
    req.headers.cookie?.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>) || {};

  // TODO потом убрать заглушку и привязатсья к реальной куке

  const accessToken = cookies.accessToken || true;

  if (!accessToken && source === "qr") {
    return {
      redirect: {
        destination: "/auth?source=qr",
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
