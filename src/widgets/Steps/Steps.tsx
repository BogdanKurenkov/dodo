import { FC, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { Container } from "@/components/Shared/Container/Container";
import { TimeLine } from "@/components/Shared/TimeLine/TimeLine";
import { Plus } from "@/components/Shared/Plus/Plus";

import { appLink } from "@/constants/appLink";

import DodoLogoImg from "@/assets/images/3d_logo.png";
import Snack_RU from "@/assets/images/Snack_RU.png";
import Snack_KZ from "@/assets/images/Snack_KZ.png";
import QrCode_RU from "@/assets/images/qr_ru.png";
import QrCode_KZ from "@/assets/images/qr_kz.png";
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
  QrCodeImage,
  Button,
  TitleLg,
  DodoLogo,
} from "./styled";

type CountryCode = 'ru' | 'kz' | 'by';
type LocaleCode = 'ru' | 'kz' | 'by';

const promotion_info: Record<CountryCode, Partial<Record<LocaleCode, string>>> = {
  ru: {
    ru: "Набор соусов Додо Лаб за 1 ₽ при заказе от 990 ₽",
    kz: "Додо Лаб соусы жиынтығы 990 ₽-ден бастап тапсырыс бергенде 1₽"
  },
  kz: {
    ru: "Набор соусов Додо Лаб за 10 Т при заказе от 5 000 Т",
    kz: "5 000 ₸-ден бастап — Додо Лаб тұздықтар жиынтығы небәрі 10 ₸"
  },
  by: {
    by: "Набор соусов Додо Лаб за 1 руб. при заказе от 30 руб.",
    kz: "Додо Лаб соустарының жиынтығы 1 рубльге. 30 рубльден асатын тапсырыстар үшін."
  }
};

const step2_info: Record<CountryCode, Partial<Record<LocaleCode, string>>> = {
  ru: {
    ru: "Закажите продукты из меню на сумму от 900 ₽ и примените акцию",
  },
  kz: {
    ru: "Закажите продукты из меню на сумму от 5000 ₸ и примените акцию",
    kz: "Мәзірден 5000 ₸-ден бастап тапсырыс беріп, акцияны қолданыңыз"
  },
  by: {
    by: "Закажите продукты из меню на сумму от 30 руб и примените акцию"
  }
};

export const Steps: FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [promotionText, setPromotionText] = useState('');

  const { userCountry, currentLocale } = useLanguageSwitcher();

  const step2Text = step2_info[userCountry as CountryCode]?.[currentLocale as LocaleCode] || '';


  const handleAppRedirect = () => {
    if (typeof window !== 'undefined') {
      window.open(appLink, '_blank', 'noopener,noreferrer');
    }
  }

  useEffect(() => {
    const savedOpenAccordionId = sessionStorage.getItem("stepsOpenAccordionId");
    if (savedOpenAccordionId) {
      setOpenAccordionId(savedOpenAccordionId);
    }

    if (typeof window !== 'undefined') {
      const text = promotion_info[userCountry as CountryCode]?.[currentLocale as LocaleCode] || '';
      setPromotionText(text);
    }
  }, [userCountry, currentLocale]);

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
          <TitleLg>
            <TextWithLineBreaks text={t('choice.title')} />
          </TitleLg>
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
                      <DodoLogo width={45} height={45} alt="dodo" src={DodoLogoImg} />
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
                        {promotionText}
                      </CardTitle>
                      <CardNote>{t('choice.stage.stage1.to')}</CardNote>
                      <CardButton>{t('buttons.apply')}</CardButton>
                    </CardContent>
                    <CardImagesWrapper>
                      <CardImage src={currentLocale === "ru" ? Snack_RU : Snack_KZ} alt="Snack" />
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
                    {step2Text}
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
                  <QrCodeImage src={currentLocale !== "kz" ? QrCode_RU : QrCode_KZ} alt="QR Code" />
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
        <Button onClick={handleAppRedirect} $variant="primary">{t('buttons.buy')}</Button>
      </Container>
    </StepsWrapper>
  );
};
