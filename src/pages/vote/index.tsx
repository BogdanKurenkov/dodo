import { useState, useEffect, useCallback } from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { isIOS } from 'react-device-detect';
import dynamic from "next/dynamic";

import { authUser, sendVote } from "@/api";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

const VideoRotate = dynamic(
  () => import("@/components/VideoRotate/VideoRotate").then((mod) => mod.VideoRotate),
  { ssr: false },
);
const VideoOpen = dynamic(
  () => import("@/components/VideoOpen/VideoOpen").then((mod) => mod.VideoOpen),
  { ssr: false },
);

import sauce1 from "@/assets/images/1_3_0000.webp";
import sauce2 from "@/assets/images/2_2_0001.webp";
import sauce3 from "@/assets/images/3_2_0000.webp";
import VoteBackgroundImage from "../../../public/images/vote-background.webp";
import opening1 from "@/assets/webm/dip_1_3_opening_lottie.webm";
import opening2 from "@/assets/webm/dip_2_2_opening_lottie.webm";
import opening3 from "@/assets/webm/dip_3_2_opening_lottie.webm";
import rotation1 from "@/assets/webm/dip_1_3_rotation_lottie.webm";
import rotation2 from "@/assets/webm/dip_2_2_rotation_lottie.webm";
import rotation3 from "@/assets/webm/dip_3_2_rotation_lottie.webm";
import opening1_ios from "@/assets/webm/dip_1_3_opening_lottie.hevc.mp4";
import opening2_ios from "@/assets/webm/dip_2_2_opening_lottie.hevc.mp4";
import opening3_ios from "@/assets/webm/dip_3_2_opening_lottie.hevc.mp4";
import rotation1_ios from "@/assets/webm/dip_1_3_rotation_lottie.hevc.mp4";
import rotation2_ios from "@/assets/webm/dip_2_2_rotation_lottie.hevc.mp4";
import rotation3_ios from "@/assets/webm/dip_3_2_rotation_lottie.hevc.mp4";

import {
  VoteWrapper,
  VoteBackground,
  VoteBackgroundMob,
  Container,
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

interface IVote {
  cookies: Record<string, string>;
}

export default function Vote({ cookies }: IVote) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { USER_COUNTRY: country } = cookies;

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rotateLoaded, setRotateLoaded] = useState(false);
  const [loadedRotateCount, setLoadedRotateCount] = useState(0);

  const device = useDeviceDetect();

  const handleRotateLoad = useCallback(() => {
    setLoadedRotateCount(prev => {
      if (prev >= sauces.length) return prev;
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    if (loadedRotateCount === sauces.length) {
      setRotateLoaded(true);
    }
  }, [loadedRotateCount]);

  const animations_rotate = [
    <VideoRotate
      key={4}
      isPlaying={isPlaying}
      src={isIOS ? rotation1_ios : rotation1}
      placeholderImage={sauce1}
      onLoaded={handleRotateLoad}
      isAnimate={!isPlaying}
      playbackRate={2}
    />,
    <VideoRotate
      key={5}
      direction="down"
      isPlaying={isPlaying && rotateLoaded}
      src={isIOS ? rotation2_ios : rotation2}
      placeholderImage={sauce2}
      onLoaded={handleRotateLoad}
      isAnimate={!isPlaying}
      playbackRate={2}
    />,
    <VideoRotate
      key={6}
      isPlaying={isPlaying}
      src={isIOS ? rotation3_ios : rotation3}
      placeholderImage={sauce3}
      onLoaded={handleRotateLoad}
      isAnimate={!isPlaying}
      playbackRate={2}
    />,
  ];

  const animations_open = [
    <VideoOpen
      key={1}
      isPlaying={activeCard === 0}
      src={isIOS ? opening1_ios : opening1}
      onClick={() => handleCardClick(0)}
    />,
    <VideoOpen
      key={2}
      isPlaying={activeCard === 1}
      src={isIOS ? opening2_ios : opening2}
      onClick={() => handleCardClick(1)}
    />,
    <VideoOpen
      key={3}
      isPlaying={activeCard === 2}
      src={isIOS ? opening3_ios : opening3}
      onClick={() => handleCardClick(2)}
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
    if (step === 1 && rotateLoaded) {
      setIsTransitioning(true);
      setIsPlaying(true);
      setTimeout(() => {
        setStep(2);
      }, 2000);
    }
  };

  const handleVoteClick = () => {
    if (step === 1) {
      setIsTransitioning(true);
      setIsPlaying(true);
      setTimeout(() => {
        setStep(2);
      }, 2000);
    } else {
      const data = {
        token: cookies.token || "",
        completed: true,
        sauce: (activeCard! + 1) as 1 | 2 | 3
      }

      sendVote(data).then(() => {
        router.push("/voteResult?source=qr");
        setCookie(null, 'sauce', (activeCard! + 1).toString(), {
          maxAge: 365 * 24 * 60 * 60,
          path: '/',
        });
      }).catch(() => { })
    }
  };

  return (
    <>
      <Header country={country} />
      <main role="main" className="main">
        <VoteWrapper $step={step} $isTransitioning={isTransitioning} $sPlaying={isPlaying}>
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
                      width: device === "desktop" ? 350 : 230,
                      height: device === "desktop" ? 350 : 230,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,

                        pointerEvents: step === 1 ? "auto" : "none",
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
                      }}
                      onClick={() => handleCardClick(index)}
                    >
                      {animations_open[index] || null}
                    </div>
                  </div>
                  <SauceSample $isPlaying={isPlaying}>
                    {t("results.sample")} № {index + 1}
                  </SauceSample>
                  <SauceTitle $sPlaying={isPlaying}>{t(sauce)}</SauceTitle>
                </SauceContainer>
              ))}
            </SaucesList>
            <Button
              $variant="glass"
              disabled={(step === 2 && !isButtonActive) || !rotateLoaded}
              type="button"
              onClick={handleVoteClick}
              $step={isPlaying ? 2 : 1}
            >
              {step === 2 ? t("buttons.vote_select") : t("buttons.start")}
            </Button>
            <VotePrompt $step={isPlaying ? 2 : 1} style={{ opacity: step === 1 ? "0" : "0.4" }}>
              {t("vote.click")}
            </VotePrompt>
          </Container>
          <VoteBackground src={VoteBackgroundImage} $step={step} $isTransitioning={isTransitioning} $sPlaying={isPlaying} alt="Vote background" />
          <VoteBackgroundMob $step={step} $isTransitioning={isTransitioning} $sPlaying={isPlaying}></VoteBackgroundMob>
        </VoteWrapper>
      </main>

      <Footer />
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req, locale, res } = context;
  const { source } = query;

  const cookies =
    req.headers.cookie?.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>) || {};

  const token = cookies.token;
  const country = cookies.USER_COUNTRY;

  if (!country && locale && token && query.source === "qr") {
    if (locale === "ru" || locale === "kz" || locale === "by") {
      setCookie({ res }, "NEXT_LOCALE", locale, {
        maxAge: 365 * 24 * 60 * 60,
        path: '/',
      });

      setCookie({ res }, "USER_COUNTRY", locale, {
        maxAge: 365 * 24 * 60 * 60,
        path: '/',
      });
    }
  }

  const getLocalizedUrl = (path: string) => {
    return locale && locale !== 'ru' ? `/${locale}${path}` : path;
  };

  if (!token) {
    return {
      redirect: {
        destination: getLocalizedUrl('/auth?source=qr'),
        permanent: false,
      },
    };
  }

  if (source !== "qr") {
    return {
      redirect: {
        destination: getLocalizedUrl('/'),
        permanent: false,
      },
    };
  }

  try {
    const res = await authUser({ token });

    if (res.voted) {
      return {
        redirect: {
          destination: getLocalizedUrl('/voteResult?source=qr'),
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error("Auth check failed:", error);
    return {
      redirect: {
        destination: getLocalizedUrl('/auth?source=qr'),
        permanent: false,
      },
    };
  }

  return {
    props: {
      cookies,
      ...(await serverSideTranslations(context.locale ?? "ru", ["common"])),
    },
  };
};
