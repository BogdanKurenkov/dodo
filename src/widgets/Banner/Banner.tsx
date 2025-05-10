import { FC, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { TimeLine } from "@/components/Shared/TimeLine/TimeLine";

import SauceImage1 from "../../../public/images/sauce-1.webp";
import SauceImage2 from "../../../public/images/sauce-2.webp";
import SauceImage3 from "../../../public/images/sauce-3.webp";
import BoxBackgroundImage1 from "../../../public/images/box-1.webp";
import BoxBackgroundImage2 from "../../../public/images/box-2.webp";
import BoxBackgroundImage3 from "../../../public/images/box-3.webp";
import LineBackgroundImage1 from "../../../public/images/voteResult-background.webp";
import LineBackgroundImage2 from "../../../public/images/vote-background.webp";

import {
  TextWrapper,
  Container,
  TimeLineContainer,
  ButtonDesktop,
  ButtonMobile,
  BannerTitle,
  AboutWrapper,
  BackgroundImagesTop,
  BackgroundImagesBottom,
  ParallaxWrapper,
  BoxBackground1,
  BoxBackground2,
  BoxBackground3,
  Sauce1,
  Sauce2,
  Sauce3,
  LineBackground1,
  LineBackground2,
} from "./styled";

export const Banner: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const { source } = router.query;

  const deviceType = useDeviceDetect();
  const isQrLayout = source === "qr";

  const boxBackground1Ref = useRef<HTMLDivElement>(null);
  const boxBackground2Ref = useRef<HTMLDivElement>(null);
  const boxBackground3Ref = useRef<HTMLDivElement>(null);
  const sauce1Ref = useRef<HTMLDivElement>(null);
  const sauce2Ref = useRef<HTMLDivElement>(null);
  const sauce3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const backgroundParallax = [
        {
          ref: boxBackground1Ref,
          speed: deviceType === "mobile" ? 0.05 : 0.1,
        },
        {
          ref: boxBackground2Ref,
          speed: deviceType === "mobile" ? 0.05 : 0.1,
        },
        {
          ref: boxBackground3Ref,
          speed: deviceType === "mobile" ? 0.03 : 0.1,
        },
        {
          ref: sauce1Ref,
          speed: deviceType === "mobile" ? -0.03 : -0.05,
        },
        {
          ref: sauce2Ref,
          speed: deviceType === "mobile" ? -0.03 : -0.05,
        },
        {
          ref: sauce3Ref,
          speed: deviceType === "mobile" ? -0.03 : -0.05,
        },
      ];

      backgroundParallax.forEach(({ ref, speed }) => {
        if (ref.current) {
          const translateY = scrollPosition * speed;
          ref.current.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [deviceType]);

  const handleScrollToParticipate = () => {
    if (isQrLayout) {
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
      <AboutWrapper $isQr={isQrLayout}>
        <Container>
          {source === "qr" && (
            <TextWrapper>
              <SectionTitle isWhite>
                <TextWithLineBreaks text={t("qr_subtitle")} />
              </SectionTitle>
            </TextWrapper>
          )}
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
          <TimeLineContainer $isQr={isQrLayout}>
            <TimeLine isWhite />
          </TimeLineContainer>
          <ButtonDesktop
            $variant="glass"
            type="button"
            onClick={handleScrollToParticipate}
            $isQr={isQrLayout}
          >
            {source === "qr" ? t("buttons.vote") : t("buttons.event")}
          </ButtonDesktop>
          <TextWrapper>
            {source === "qr" && (
              <SectionTitle isWhite>
                <TextWithLineBreaks
                  text={t(
                    deviceType === "mobile" ? "qr_subtitle2" : "qr_subtitle1",
                  )}
                />
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
              $isQr={isQrLayout}
            >
              {source === "qr" ? t("buttons.vote") : t("buttons.event")}
            </ButtonMobile>
          </TextWrapper>
        </Container>
        <BackgroundImagesTop $isQr={isQrLayout}>
          {!isQrLayout && (
            <ParallaxWrapper ref={boxBackground1Ref}>
              <BoxBackground1
                $isQr={isQrLayout}
                src={BoxBackgroundImage1}
                alt="Box background 1"
              />
            </ParallaxWrapper>
          )}
          {!isQrLayout && (
            <ParallaxWrapper ref={sauce2Ref}>
              <Sauce2
                $isQr={isQrLayout}
                src={SauceImage2}
                alt="Sauce background 2"
              />
            </ParallaxWrapper>
          )}
          {isQrLayout && (
            <ParallaxWrapper ref={sauce2Ref}>
              <Sauce2
                $isQr={isQrLayout}
                src={deviceType === "mobile" ? SauceImage3 : SauceImage2}
                alt="Sauce background 2"
              />
            </ParallaxWrapper>
          )}
          {isQrLayout && (
            <ParallaxWrapper ref={boxBackground2Ref}>
              <LineBackground1
                $isQr={isQrLayout}
                src={LineBackgroundImage1}
                alt="Line background 1"
              />
            </ParallaxWrapper>
          )}
        </BackgroundImagesTop>
        <BackgroundImagesBottom $isQr={isQrLayout}>
          <ParallaxWrapper ref={boxBackground2Ref}>
            <BoxBackground2
              $isQr={isQrLayout}
              src={isQrLayout ? BoxBackgroundImage1 : BoxBackgroundImage2}
              alt="Box background 2"
            />
          </ParallaxWrapper>
          <ParallaxWrapper ref={sauce1Ref}>
            <Sauce1
              $isQr={isQrLayout}
              src={SauceImage1}
              alt="Sauce background 1"
            />
          </ParallaxWrapper>
          {!isQrLayout && (
            <ParallaxWrapper ref={sauce3Ref}>
              <Sauce3
                $isQr={isQrLayout}
                src={SauceImage3}
                alt="Sauce background 3"
              />
            </ParallaxWrapper>
          )}
          {isQrLayout && (
            <ParallaxWrapper ref={sauce3Ref}>
              <Sauce3
                $isQr={isQrLayout}
                src={deviceType === "mobile" ? SauceImage2 : SauceImage3}
                alt="Sauce background 3"
              />
            </ParallaxWrapper>
          )}
          {!isQrLayout && (
            <ParallaxWrapper ref={boxBackground3Ref} style={{ zIndex: -1 }}>
              <BoxBackground3
                $isQr={isQrLayout}
                src={
                  deviceType === "mobile"
                    ? BoxBackgroundImage1
                    : BoxBackgroundImage3
                }
                alt="Box background 3"
              />
            </ParallaxWrapper>
          )}
          {isQrLayout && deviceType === "mobile" && (
            <ParallaxWrapper ref={boxBackground3Ref} style={{ zIndex: -1 }}>
              <BoxBackground3
                $isQr={isQrLayout}
                src={BoxBackgroundImage3}
                alt="Box background 3"
              />
            </ParallaxWrapper>
          )}
          {isQrLayout && (
            <ParallaxWrapper ref={boxBackground1Ref} style={{ zIndex: -2 }}>
              <LineBackground2
                $isQr={isQrLayout}
                src={LineBackgroundImage2}
                alt="Line background 2"
              />
            </ParallaxWrapper>
          )}
        </BackgroundImagesBottom>
      </AboutWrapper>
    </section>
  );
};
