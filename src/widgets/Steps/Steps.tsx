import { FC, useState, useEffect } from "react";

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
    <StepsWrapper>
      <Container>
        <StepsHeader>
          <SectionTitle isWhite={false}>
            Сделайте <br /> свой выбор
          </SectionTitle>
          <SectionDescription>
            Вступайте в команду Додо Лаб и участвуйте:
          </SectionDescription>
          <TimeLine isWhite={false} />
        </StepsHeader>
        <AccordionList>
          <Accordion
            title={
              <>
                <StepsSummary>
                  <StepsStage>этап 1</StepsStage>
                  <StepsTitle>Найдите акцию</StepsTitle>
                </StepsSummary>
                <Plus isCross={openAccordionId === "0"} />
              </>
            }
            content={
              <StepsList>
                <StepsItem>
                  <StepsText>Скачайте приложение</StepsText>
                  <StepsButton>
                    <ButtonImage>
                      <DodoLogo />
                    </ButtonImage>
                    <ButtonContent>
                      <ButtonTitle>Додо Пицца доставка и ресторан</ButtonTitle>
                      <ButtonCopyright>
                        DODO Brands International DMCC
                      </ButtonCopyright>
                    </ButtonContent>
                  </StepsButton>
                </StepsItem>
                <StepsItem>
                  <StepsText>
                    Перейдите в профиль в правом верхнем углу приложения и
                    найдите акцию с Набором соусов Додо Лаб*
                  </StepsText>
                  <StepsNote>
                    *Количество наборов по акции ограничено. Если наборы по
                    акции закончились, вы можете найти их в меню
                  </StepsNote>
                  <StepsCard>
                    <CardContent>
                      <CardSubtitle>на любой тип заказа</CardSubtitle>
                      <CardTitle>
                        Набор соусов Додо Лаб за 1 ₽ при заказе от 990 ₽
                      </CardTitle>
                      <CardNote>до 10 июня</CardNote>
                      <CardButton>Применить</CardButton>
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
                  <StepsStage>этап 2</StepsStage>
                  <StepsTitle>Попробуйте соусы</StepsTitle>
                </StepsSummary>
                <Plus isCross={openAccordionId === "1"} />
              </>
            }
            content={
              <StepsList>
                <StepsItem>
                  <StepsText>
                    Закажите продукты из меню на сумму от 900 ₽ и примените
                    акцию
                  </StepsText>
                </StepsItem>
                <StepsItem>
                  <StepsText>Попробуйте все три соуса</StepsText>
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
                  <StepsStage>этап 3</StepsStage>
                  <StepsTitle>Выберите один</StepsTitle>
                </StepsSummary>
                <Plus isCross={openAccordionId === "2"} />
              </>
            }
            content={
              <StepsList>
                <StepsItem>
                  <StepsText>Отсканируйте QR-код на коробке</StepsText>
                  <StepsQrWrapper>
                    <QrTitle>Поделитесь мнением</QrTitle>
                    <QrCodeImage src={QrCode.src} alt="QR Code" />
                  </StepsQrWrapper>
                </StepsItem>
                <StepsItem>
                  <StepsText>
                    После авторизации откройте страницу голосования
                  </StepsText>
                </StepsItem>
                <StepsItem>
                  <StepsText>
                    Решите судьбу фирменного соуса Додо Пиццы!
                  </StepsText>
                </StepsItem>
              </StepsList>
            }
            isOpen={openAccordionId === "2"}
            onClick={() => handleAccordionClick("2")}
          />
        </AccordionList>
        <Button $variant="secondary">заказать набор</Button>
      </Container>
    </StepsWrapper>
  );
};
