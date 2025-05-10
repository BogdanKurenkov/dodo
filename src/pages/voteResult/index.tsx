import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";

import {
  authUser,
  getRating
} from "@/api";
import {
  AuthRequest,
  AuthResponse,
  RatingItem
} from "@/api/types";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

// import Sauce1 from "@/assets/images/zoom_on_sauce_demiglace0009.png";
import Sauce2 from "@/assets/images/zoom_on_sauce_hot0009.png";
// import Sauce3 from "@/assets/images/zoom_on_sauce_smoked0009.png";
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

interface IVoteResult {
  cookies: Record<string, string>;
}

export default function VoteResult({ cookies }: IVoteResult) {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { locale } = router;

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const [/*rate*/, setRate] = useState<RatingItem[]>([]);
  const [/*user*/, setUser] = useState<AuthResponse>();

  const { USER_COUNTRY: country } = cookies;

  useEffect(() => {
    getRating().then((res) => {
      setRate(res.data)
    })
    const cookies = parseCookies();

    const authData: AuthRequest = {
      token: cookies.token,
      lang: cookies.NEXT_LOCALE,
      country: cookies.USER_COUNTRY
    };
    authUser(authData).then((res) => {
      setUser(res);
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
      <Head>
        <title>Додо Лаб</title>
        <meta name="description" content="Участвуйте в исследованиях Додо Лаб, пробуйте новые соусы и влияйте на меню Додо Пиццы" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
                  <TextWithLineBreaks text={`${t("vote_result.vote")} ${locale === "kz" ? "" : "№2"}`} />{" "}

                </ResultDescription>
                <Button
                  onClick={() => router.push("/results?source=qr")}
                  $variant="glass"
                >
                  {t("buttons.look")}
                </Button>
              </ResultContentWrapper>
              <Sauce alt="sauce" src={Sauce2} />
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
  const cookies = parseCookies({ req })


  if (source !== 'qr') {
    return {
      redirect: {
        destination: '/results',
        permanent: false,
      },
    };
  }

  return {
    props: {
      cookies,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}
