import { FC, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TimeLine } from "@/components/Shared/TimeLine/TimeLine";
import { Plus } from "@/components/Shared/Plus/Plus";

import DodoLogo from "@/assets/svg/steps-logo.svg";
import Snack from "@/assets/images/Snack-02.png";
import QrCode from "@/assets/images/qr-code.png";
import IconInfo from "@/assets/svg/icon-info.svg";

import {
  StepsWrapper,
  StepsHeader,
  SectionDescription,
  AccordionList,
  Accordion,
  StepsSummary,
  StepsStage,
  StepsTitle,
  StepsList,
  StepsItem,
  StepsText,
  StepsNote,
  StepsButton,
  ButtonImage,
  ButtonContent,
  ButtonTitle,
  ButtonCopyright,
  StepsCard,
  CardContent,
  CardSubtitle,
  CardTitle,
  CardNote,
  CardButton,
  CardImagesWrapper,
  CardImage,
  CardImageInfo,
  StepsQrWrapper,
  QrTitle,
  QrCodeImage,
  Button,
} from "./styled";

export const Steps: FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const { t } = useTranslation('common');

  useEffect(() => {
    const savedOpenAccordionId = sessionStorage.getItem("stepsOpenAccordionId");
    if (savedOpenAccordionId) {
      setOpenAccordionId(savedOpenAccordionId);
    }
  }, []);

  useEffect(() => {
    if (openAccordionId === null) {
      sessionStorage.removeItem("stepsOpenAccordionId");
    } else {
      sessionStorage.setItem("stepsOpenAccordionId", openAccordionId);
    }
  }, [openAccordionId]);

  const handleAccordionClick = (accordionKey: string) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionKey ? null : accordionKey,
    );
  };

  return (
    <StepsWrapper id="participate">
      <Container>
        <StepsHeader>
          <SectionTitle isWhite={false}>
            <TextWithLineBreaks text={t('choice.title')} />
          </SectionTitle>
          <SectionDescription>
            {t('choice.description')}
          </SectionDescription>
          <TimeLine isWhite={false} />
        </StepsHeader>
        <AccordionList>
          <Accordion
            title={
              <>
                <StepsSummary>
                  <StepsStage>{t('choice.stage.title')} 1</StepsStage>
                  <StepsTitle>{t('choice.stage.stage1.title')}</StepsTitle>
                </StepsSummary>
                <Plus isCross={openAccordionId === "0"} />
              </>
            }
            content={
              <StepsList>
                <StepsItem>
                  <StepsText>{t('choice.stage.stage1.download')}</StepsText>
                  <StepsButton>
                    <ButtonImage>
                      <DodoLogo />
                    </ButtonImage>
                    <ButtonContent>
                      <ButtonTitle>{t('choice.stage.stage1.dodo')}</ButtonTitle>
                      <ButtonCopyright>
                        DODO Brands International DMCC
                      </ButtonCopyright>
                    </ButtonContent>
                  </StepsButton>
                </StepsItem>
                <StepsItem>
                  <StepsText>
                    {t('choice.stage.stage1.profile')}
                  </StepsText>
                  <StepsNote>
                    {t('choice.stage.stage1.qty')}
                  </StepsNote>
                  <StepsCard>
                    <CardContent>
                      <CardSubtitle>{t('choice.stage.stage1.type')}</CardSubtitle>
                      <CardTitle>
                        {t('choice.stage.stage1.kit')}
                      </CardTitle>
                      <CardNote>{t('choice.stage.stage1.to')}</CardNote>
                      <CardButton>{t('buttons.apply')}</CardButton>
                    </CardContent>
                    <CardImagesWrapper>
                      <CardImage src={Snack.src} alt="Snack" />
                      <CardImageInfo>
                        <IconInfo />
                      </CardImageInfo>
                    </CardImagesWrapper>
                  </StepsCard>
                </StepsItem>
              </StepsList>
            }
            isOpen={openAccordionId === "0"}
            onClick={() => handleAccordionClick("0")}
          />
          <Accordion
            title={
              <>
                <StepsSummary>
                  <StepsStage>{t('choice.stage.title')} 2</StepsStage>
                  <StepsTitle>{t('choice.stage.stage2.title')}</StepsTitle>
                </StepsSummary>
                <Plus isCross={openAccordionId === "1"} />
              </>
            }
            content={
              <StepsList>
                <StepsItem>
                  <StepsText>
                    {t('choice.stage.stage2.order')}
                  </StepsText>
                </StepsItem>
                <StepsItem>
                  <StepsText>{t('choice.stage.stage2.try')}</StepsText>
                </StepsItem>
              </StepsList>
            }
            isOpen={openAccordionId === "1"}
            onClick={() => handleAccordionClick("1")}
          />
          <Accordion
            title={
              <>
                <StepsSummary>
                  <StepsStage>{t('choice.stage.title')} 3</StepsStage>
                  <StepsTitle>{t('choice.stage.stage3.title')}</StepsTitle>
                </StepsSummary>
                <Plus isCross={openAccordionId === "2"} />
              </>
            }
            content={
              <StepsList>
                <StepsItem>
                  <StepsText>{t('choice.stage.stage3.qr')}</StepsText>
                  <StepsQrWrapper>
                    <QrTitle>{t('choice.stage.stage3.share')}</QrTitle>
                    <QrCodeImage src={QrCode.src} alt="QR Code" />
                  </StepsQrWrapper>
                </StepsItem>
                <StepsItem>
                  <StepsText>
                    {t('choice.stage.stage3.auth')}
                  </StepsText>
                </StepsItem>
                <StepsItem>
                  <StepsText>
                    {t('choice.stage.stage3.select')}
                  </StepsText>
                </StepsItem>
              </StepsList>
            }
            isOpen={openAccordionId === "2"}
            onClick={() => handleAccordionClick("2")}
          />
        </AccordionList>
        <Button $variant="secondary">{t('buttons.buy')}</Button>
      </Container>
    </StepsWrapper>
  );
};
