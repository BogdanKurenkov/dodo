import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import {
  BtnDesktop,
  BtnMobile,
  ColsWrapper,
  FirstBar,
  Graphics,
  LeftCol,
  ResearchWrapper,
  RightCol,
  SecondBar,
  ThirdBar,
} from "./styled";

export const Research: FC = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [graphicsRef, isGraphicsVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "0px",
  });

  const handleNavigate = () => {
    router.push("results");
  };

  return (
    <ResearchWrapper id="results">
      <Container>
        <ColsWrapper>
          <LeftCol>
            <SectionTitle isWhite={false}>{t("research.title")}</SectionTitle>
            <SectionDescription>{t("research.subtitle")}</SectionDescription>
            <SectionDescription>
              <TextWithLineBreaks text={t("research.description")} />
            </SectionDescription>
            <BtnDesktop
              $variant="primary"
              onClick={handleNavigate}
              $width="610px"
            >
              {t("buttons.results")}
            </BtnDesktop>
          </LeftCol>
          <RightCol>
            <Graphics ref={graphicsRef}>
              <FirstBar $shouldAnimate={isGraphicsVisible} />
              <SecondBar $shouldAnimate={isGraphicsVisible} />
              <ThirdBar $shouldAnimate={isGraphicsVisible} />
            </Graphics>
            <BtnMobile $variant="primary" onClick={handleNavigate}>
              {t("buttons.results")}
            </BtnMobile>
          </RightCol>
        </ColsWrapper>
      </Container>
    </ResearchWrapper>
  );
};