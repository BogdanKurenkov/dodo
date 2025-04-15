import {useState} from "react";
import {GetServerSideProps} from "next";
import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
import {Container} from "@/components/Shared/Container/Container";
import {SectionTitle} from "@/components/Shared/SectionTitle/SectionTitle";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {
  SauceCard,
  SauceContainer,
  SauceTitle,
  SauceNumber,
  SauceSample,
  SaucesList,
  SauceType,
  VotePrompt,
  VoteBackground,
  Button,
} from "./styled";

const sauces = [{type: "томленый"}, {type: "жаркий"}, {type: "копченый"}];

export default function Vote() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleCardClick = (number: number) => {
    if (activeCard === number) {
      setActiveCard(null);
      setIsButtonActive(false);
    } else {
      setActiveCard(number);
      setIsButtonActive(true);
    }
  };
  return (
    <>
      <Header />
      <VoteBackground>
        <Container>
          <SectionTitle isWhite={true}>
            какой соус <br /> выбираете вы?
          </SectionTitle>
          <SaucesList>
            {sauces.map((sauce, index) => (
              <SauceContainer key={index}>
                <SauceCard
                  onClick={() => handleCardClick(index)}
                  className={activeCard === index ? "active" : ""}
                >
                  <SauceNumber>{index + 1}</SauceNumber>
                  <SauceType>{sauce.type}</SauceType>
                </SauceCard>
                <SauceSample>образец № {index + 1}</SauceSample>
                <SauceTitle>{sauce.type}</SauceTitle>
              </SauceContainer>
            ))}
          </SaucesList>
          <Button
            $variant="glass"
            disabled={!isButtonActive}
            type="button"
            $width="610px"
          >
            голос за него
          </Button>
          <VotePrompt>нажмите на образцы</VotePrompt>
        </Container>
      </VoteBackground>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
};
