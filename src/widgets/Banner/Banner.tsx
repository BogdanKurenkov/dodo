import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

import { Container } from "@/components/Shared/Container/Container";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { TimeLine } from "@/components/Shared/TimeLine/TimeLine";

import {
  TextWrapper,
  ButtonDesktop,
  ButtonMobile,
  BannerTitle,
  AboutWrapper,
  LottieTop,
  LottieBottom,
} from "./styled";

const LottieBanner = dynamic(
  () =>
    import("@/components/LottieBanner/LottieBanner").then(
      (mod) => mod.LottieBanner,
    ),
  { ssr: false },
);

const animations_box = [
  <LottieBanner
    key={1}
    path="/lottie/main/box_anima1/data.json"
    width={990}
    height={785}
  />,
  <LottieBanner
    key={2}
    path="/lottie/main/box_anima2/data.json"
    width={990}
    height={785}
  />,
  <LottieBanner
    key={3}
    path="/lottie/main/box_anima3/data.json"
    width={990}
    height={785}
  />,
];

const animations_sauce = [
  <LottieBanner
    key={1}
    path="/lottie/vote/dip_1_3_rotation_lottie/animation.json"
    width={310}
    height={270}
  />,
  <LottieBanner
    key={2}
    path="/lottie/vote/dip_3_3_rotation_lottie/animation.json"
    width={310}
    height={270}
  />,
  <LottieBanner
    key={3}
    path="/lottie/vote/dip_3_2_rotation_lottie/animation.json"
    width={310}
    height={270}
  />,
];

export const Banner: FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const router = useRouter();
  const { source } = router.query;

  const handleScrollToParticipate = () => {
    if (source === "qr") {
      router.push("/vote?source=qr");
    } else {
      const element = document?.getElementById("participate");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <section id="about">
      <AboutWrapper>
        <Container>
          <TextWrapper>
            <BannerTitle>
              <TextWithLineBreaks
                text={source === "qr" ? t("qr_title") : t("title")}
              />
            </BannerTitle>
            <SectionDescription color={theme.colors.white}>
              <TextWithLineBreaks
                text={source === "qr" ? t("qr_description") : t("description")}
              />
            </SectionDescription>
          </TextWrapper>
          <TimeLine isWhite />
          <ButtonDesktop
            $variant="glass"
            type="button"
            onClick={handleScrollToParticipate}
          >
            {source === "qr" ? t("buttons.vote") : t("buttons.event")}
          </ButtonDesktop>
          <TextWrapper>
            {source === "qr" && (
              <SectionTitle isWhite>
                <TextWithLineBreaks text={t("qr_subtitle")} />
              </SectionTitle>
            )}
            <SectionDescription color={theme.colors.white}>
              <TextWithLineBreaks text={t("subtitle_1")} />
            </SectionDescription>
            <SectionDescription color={theme.colors.white}>
              <TextWithLineBreaks text={t("subtitle_2")} />
            </SectionDescription>
            <ButtonMobile
              $variant="glass"
              type="button"
              onClick={handleScrollToParticipate}
            >
              {source === "qr" ? t("buttons.vote") : t("buttons.event")}
            </ButtonMobile>
          </TextWrapper>
        </Container>
        <LottieTop>
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-300px",
              transform: "rotate(120deg)",
              zIndex: -1,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            {animations_box[0]}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "200px",
              zIndex: -1,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            {animations_sauce[1]}
          </div>
        </LottieTop>
        <LottieBottom>
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-400px",
              transform: "rotate(-120deg)",
              zIndex: -1,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            {animations_box[1]}
          </div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: -1,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            {animations_sauce[0]}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "150px",
              left: "-200px",
              transform: "rotate(20deg)",
              zIndex: -1,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            {animations_box[2]}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "150px",
              right: "150px",
              zIndex: -1,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            {animations_sauce[2]}
          </div>
        </LottieBottom>
      </AboutWrapper>
    </section>
  );
};
