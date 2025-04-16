import { GetServerSideProps } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Shared/Container/Container";
import SauceImage from "@/assets/images/sauce.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  ResultDescription,
  ResultHeader,
  ContainerInner,
  ResultSubtitle,
  ResultTitle,
  ResultContentWrapper,
  ResultBackground,
  Button,
  Sauce,
} from "./styled";

export default function VoteResult() {
  return (
    <>
      <Header />
      <ResultBackground>
        <Container>
          <ContainerInner>
            <ResultHeader>
              <ResultTitle>выбор сделан!</ResultTitle>
              <ResultDescription>
                ваш ответ влияет <br /> на будущие новинки додо пиццы
              </ResultDescription>
            </ResultHeader>
            <ResultContentWrapper>
              <ResultSubtitle>
                <span>48%</span> участников
              </ResultSubtitle>
              <ResultDescription>
                тоже проголосовали <br /> за образец № 2
              </ResultDescription>
              <Button $variant="glass">смотреть результаты</Button>
            </ResultContentWrapper>
            <Sauce alt="sauce" src={SauceImage} />
          </ContainerInner>
        </Container>
      </ResultBackground>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
};
