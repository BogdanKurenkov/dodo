import { useState, useEffect, useCallback } from "react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { setCookie } from "nookies";

import { authUser, sendVote } from "@/api";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
const LottieRotate = dynamic(
  () =>
    import("@/components/LottieRotate/LottieRotate").then(
      (mod) => mod.LottieRotate
    ),
  { ssr: false }
);
const LottieBase = dynamic(
  () =>
    import("@/components/LottieBase/LottieBase").then((mod) => mod.LottieBase),
  { ssr: false }
);

import sauce1 from "@/assets/images/1_3_0000.webp";
import sauce2 from "@/assets/images/2_2_0001.webp";
import sauce3 from "@/assets/images/3_2_0000.webp";

import {
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

  const animations_open = rotateLoaded ? [
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
  ] : [];

  const animations_rotate = [
    <LottieRotate
      key={4}
      isAnimate={!isPlaying}
      isPlaying={isPlaying}
      path="/lottie/vote/dip_1_3_rotation_lottie/animation.json"
      onLoad={() => { }}
      placeholderImage={sauce1}
      onLoaded={handleRotateLoad}

    />,
    <LottieRotate
      key={5}
      direction="down"
      isAnimate={!isPlaying}
      isPlaying={isPlaying && rotateLoaded}
      path="/lottie/vote/dip_2_2_rotation_lottie/animation.json"
      onLoad={() => { }}
      placeholderImage={sauce2}
      onLoaded={handleRotateLoad}
    />,
    <LottieRotate
      key={6}
      isAnimate={!isPlaying}
      isPlaying={isPlaying}
      path="/lottie/vote/dip_3_2_rotation_lottie/animation.json"
      onLoad={() => { }}
      placeholderImage={sauce3}
      onLoaded={handleRotateLoad}
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
        <VoteBackground $step={step} $isTransitioning={isTransitioning} $sPlaying={isPlaying}>
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
                        opacity: step === 1 ? 1 : 0,
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
                  <SauceSample $sPlaying={isPlaying}>
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
          <VoteBackgroundMob $step={step} $isTransitioning={isTransitioning} $sPlaying={isPlaying}></VoteBackgroundMob>
        </VoteBackground>
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
