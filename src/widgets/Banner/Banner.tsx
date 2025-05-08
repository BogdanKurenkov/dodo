import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { TimeLine } from "@/components/Shared/TimeLine/TimeLine";

import {
  TextWrapper,
  Container,
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

const lottieConfigs = [
  {
    key: 1,
    path: "/lottie/main/box_anima1/data.json",
    style: (deviceType: string) => ({
      position: "absolute",
      top:
        deviceType === "mobile"
          ? "-12%"
          : deviceType === "tablet"
          ? "-20%"
          : "-10%",
      right:
        deviceType === "mobile"
          ? "50%"
          : deviceType === "tablet"
          ? "50%"
          : "-5%",
      transform:
        deviceType === "mobile"
          ? "rotate(20deg) translateX(50%)"
          : deviceType === "tablet"
          ? "rotate(20deg) translateX(50%)"
          : "rotate(120deg)",
      zIndex: -1,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
    }),
    group: "box",
  },
  {
    key: 2,
    path: "/lottie/main/box_anima2/data.json",
    style: (deviceType: string) => ({
      position: "absolute",
      top:
        deviceType === "mobile"
          ? "-10%"
          : deviceType === "tablet"
          ? "-12%"
          : "-10%",
      right:
        deviceType === "mobile"
          ? "50%"
          : deviceType === "tablet"
          ? "-22%"
          : "-25%",
      transform:
        deviceType === "mobile"
          ? "rotate(170deg) translateX(-70%)"
          : deviceType === "tablet"
          ? "rotate(170deg)"
          : "rotate(-120deg)",
      zIndex: -1,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
    }),
    group: "box",
  },
  {
    key: 3,
    path: "/lottie/main/box_anima3/data.json",
    style: (deviceType: string) => ({
      position: "absolute",
      bottom:
        deviceType === "mobile"
          ? "2%"
          : deviceType === "tablet"
          ? "12%"
          : "15%",
      left:
        deviceType === "mobile"
          ? "50%"
          : deviceType === "tablet"
          ? "-18%"
          : "-10%",
      transform:
        deviceType === "mobile"
          ? "rotate(200deg) translateX(80%)"
          : deviceType === "tablet"
          ? "rotate(20deg)"
          : "rotate(20deg)",
      zIndex: -1,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
    }),
    group: "box",
  },
  {
    key: 1,
    path: "/lottie/vote/dip_1_3_rotation_lottie/animation.json",
    style: (deviceType: string) => ({
      position: "absolute",
      top:
        deviceType === "mobile"
          ? "initial"
          : deviceType === "tablet"
          ? "-2%"
          : "0%",
      bottom:
        deviceType === "mobile"
          ? "2%"
          : deviceType === "tablet"
          ? "initial"
          : "initial",
      left:
        deviceType === "mobile"
          ? "40%"
          : deviceType === "tablet"
          ? "48%"
          : "50%",
      transform: "translateX(-50%)",
      zIndex: 0,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
    }),
    group: "sauce",
  },
  {
    key: 2,
    path: "/lottie/vote/dip_3_3_rotation_lottie/animation.json",
    style: (deviceType: string) => ({
      position: "absolute",
      bottom:
        deviceType === "mobile"
          ? "30%"
          : deviceType === "tablet"
          ? "30%"
          : "0%",
      right:
        deviceType === "mobile"
          ? "-15%"
          : deviceType === "tablet"
          ? "8%"
          : "15%",
      zIndex: -1,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
    }),
    group: "sauce",
  },
  {
    key: 3,
    path: "/lottie/vote/dip_3_2_rotation_lottie/animation.json",
    style: (deviceType: string) => ({
      position: "absolute",
      bottom:
        deviceType === "mobile"
          ? "initial"
          : deviceType === "tablet"
          ? "12%"
          : "15%",
      top:
        deviceType === "mobile"
          ? "25%"
          : deviceType === "tablet"
          ? "initial"
          : "initial",
      right:
        deviceType === "mobile"
          ? "35%"
          : deviceType === "tablet"
          ? "12%"
          : "15%",
      transform:
        deviceType === "mobile"
          ? "translateX(50%)"
          : deviceType === "tablet"
          ? "none"
          : "none",
      zIndex: -1,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
    }),
    group: "sauce",
  },
];

const getDimensions = (group: string, deviceType: string) => {
  if (group === "box") {
    return {
      width:
        deviceType === "mobile"
          ? "480px"
          : deviceType === "tablet"
          ? "600px"
          : "990px",
      height:
        deviceType === "mobile"
          ? "380px"
          : deviceType === "tablet"
          ? "480px"
          : "785px",
    };
  }
  return {
    width:
      deviceType === "mobile"
        ? "190px"
        : deviceType === "tablet"
        ? "220px"
        : "320px",
    height:
      deviceType === "mobile"
        ? "185px"
        : deviceType === "tablet"
        ? "200px"
        : "300px",
  };
};

const createAnimations = (deviceType: string) => {
  return {
    animations_box: lottieConfigs
      .filter((config) => config.group === "box")
      .map((config, index) => ({
        element: (
          <LottieBanner
            key={config.key}
            path={config.path}
            {...getDimensions("box", deviceType)}
            customAnimation={index === 0}
          />
        ),
        style: config.style(deviceType),
      })),
    animations_sauce: lottieConfigs
      .filter((config) => config.group === "sauce")
      .map((config) => ({
        element: (
          <LottieBanner
            key={config.key}
            path={config.path}
            {...getDimensions("sauce", deviceType)}
          />
        ),
        style: config.style(deviceType),
      })),
  };
};

export const Banner: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const { source } = router.query;

  const deviceType = useDeviceDetect();

  const { animations_box, animations_sauce } = createAnimations(deviceType);

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
          <div style={animations_box[0].style as React.CSSProperties}>
            {animations_box[0].element}
          </div>
          <div style={animations_sauce[1].style as React.CSSProperties}>
            {animations_sauce[1].element}
          </div>
        </LottieTop>
        <LottieBottom>
          <div style={animations_box[1].style as React.CSSProperties}>
            {animations_box[1].element}
          </div>
          <div style={animations_sauce[0].style as React.CSSProperties}>
            {animations_sauce[0].element}
          </div>
          <div style={animations_box[2].style as React.CSSProperties}>
            {animations_box[2].element}
          </div>
          <div style={animations_sauce[2].style as React.CSSProperties}>
            {animations_sauce[2].element}
          </div>
        </LottieBottom>
      </AboutWrapper>
    </section>
  );
};
