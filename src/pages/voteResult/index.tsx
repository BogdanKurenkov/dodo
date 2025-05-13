import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { StaticImageData } from "next/image";

import {
  authUser,
  getRating
} from "@/api";
import {
  AuthRequest,
  AuthResponse,
  RatingResponse
} from "@/api/types";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import Sauce1 from "@/assets/images/zoom_on_sauce_demiglace0009.png";
import Sauce2 from "@/assets/images/zoom_on_sauce_hot0009.png";
import Sauce3 from "@/assets/images/zoom_on_sauce_smoked0009.png";
import ResultBackgroundImage from "../../../public/images/voteResult-background.webp";

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

type SauceKey = 1 | 2 | 3;

const sauceImages: Record<SauceKey, StaticImageData> = {
  1: Sauce1,
  2: Sauce2,
  3: Sauce3,
};

interface IVoteResult {
  cookies: Record<string, string>;
  user: AuthResponse;
}

export default function VoteResult({ cookies, user }: IVoteResult) {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { locale } = router;

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const [rate, setRate] = useState<RatingResponse>();

  const { USER_COUNTRY: country } = cookies;

  const getSauceImage = (sauce: string): StaticImageData => {
    const sauceNumber = parseInt(sauce);
    return sauceImages[sauceNumber as SauceKey] || Sauce2;
  };

  useEffect(() => {
    getRating().then((res) => {
      setRate(res)
    })
  }, [])

  useEffect(() => {
    const total = rate?.total_votes || 0;
    const currentSauce = rate?.data.find(item => item.sauce === parseInt(user?.sauce?.toString() || "2"));
    const saucePercentage = currentSauce ? (currentSauce.count / total) * 100 : 0;

    const animation = animate(count, saucePercentage, {
      duration: 2,
      ease: "easeOut"
    });

    return animation.stop;
  }, [count, rate, user?.sauce]);

  const text = t("vote_result.vote");
  const modifiedText = text.replace("№2", user?.sauce ? `№${user?.sauce?.toString()}` : `№2`);

  return (
    <>
      <Header country={country} />
      <main role="main" className="main">
        <ResultWrapper>
          <ResultBackground src={ResultBackgroundImage} alt="Vote result background" />
          <Container>
            <ContainerInner>
              <ResultHeader>
                <ResultBackgroundMob src={ResultBackgroundImage} alt="Vote result background" />
                <ResultTitle>{t("vote_result.title")}</ResultTitle>
                <ResultDescription>
                  <TextWithLineBreaks text={t("vote_result.description")} />
                </ResultDescription>
              </ResultHeader>
              <ResultContentWrapper>
                <ResultSubtitle>
                  <motion.span>{rounded}</motion.span>% {t('vote_result.participants')}
                </ResultSubtitle>
                <ResultDescription>
                  <TextWithLineBreaks text={locale === "kz" ? modifiedText : `${t("vote_result.vote")} ${locale === "kz" ? "" : `№${user?.sauce || 2}`}`} />{" "}
                </ResultDescription>
                <Button
                  onClick={() => router.push("/results?source=qr")}
                  $variant="glass"
                >
                  {t("buttons.look")}
                </Button>
              </ResultContentWrapper>
              <Sauce alt="sauce" src={getSauceImage(user?.sauce?.toString() || "2")} />
            </ContainerInner>
          </Container>
        </ResultWrapper>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query, req }) => {
  const { source } = query;
  const cookies = parseCookies({ req });

  const getLocalizedUrl = (path: string) => {
    return locale && locale !== 'ru' ? `/${locale}${path}` : path;
  };

  try {
    const authData: AuthRequest = {
      token: cookies.token,
    };

    const user = await authUser(authData);

    if (source !== 'qr') {
      return {
        redirect: {
          destination: getLocalizedUrl('/results'),
          permanent: false,
        },
      };
    }

    if (!user.voted) {
      return {
        redirect: {
          destination: getLocalizedUrl('/vote?source=qr'),
          permanent: false,
        },
      };
    }

    return {
      props: {
        cookies,
        user,
        ...(await serverSideTranslations(locale ?? "ru", ["common"])),
      },
    };

  } catch (error) {
    console.error('Auth error:', error);
    return {
      redirect: {
        destination: getLocalizedUrl('/'),
        permanent: false,
      },
    };
  }
};