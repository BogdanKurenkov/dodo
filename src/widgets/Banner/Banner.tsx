import { FC } from "react"
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

import { Container } from "@/components/Shared/Container/Container";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { TimeLine } from "@/components/Shared/TimeLine/TimeLine";

import {
  TextWrapper,
  ButtonDesktop,
  ButtonMobile,
  BannerTitle
} from "./styled";


export const Banner: FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const router = useRouter();
  const { source } = router.query;

  const handleScrollToParticipate = () => {
    if (source === "qr") {
      router.push('/vote?source=qr')
    } else {
      const element = document?.getElementById('participate');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <section id="about">
      <Container>
        <TextWrapper>
          <BannerTitle>
            <TextWithLineBreaks text={source === "qr" ? t('qr_title') : t('title')} />
          </BannerTitle>
          <SectionDescription color={theme.colors.white}>
            <TextWithLineBreaks text={source === "qr" ? t('qr_description') : t('description')} />
          </SectionDescription>
        </TextWrapper>
        <TimeLine isWhite />
        <ButtonDesktop
          $variant="glass"
          type="button"
          onClick={handleScrollToParticipate}
        >
          {source === 'qr' ? t('buttons.vote') : t('buttons.event')}
        </ButtonDesktop>
        <TextWrapper>
          {
            source === "qr" && <SectionTitle isWhite>
              <TextWithLineBreaks text={t('qr_subtitle')} />
            </SectionTitle>
          }
          <SectionDescription color={theme.colors.white}>
            <TextWithLineBreaks text={t('subtitle_1')} />
          </SectionDescription>
          <SectionDescription color={theme.colors.white}>
            <TextWithLineBreaks text={t('subtitle_2')} />
          </SectionDescription>
          <ButtonMobile
            $variant="glass"
            type="button"
            onClick={handleScrollToParticipate}
          >
            {source === 'qr' ? t('buttons.vote') : t('buttons.event')}
          </ButtonMobile>
        </TextWrapper>
      </Container>
    </section>
  );
};