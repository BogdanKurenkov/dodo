import styled from "styled-components";

export const SectionWrapper = styled.section<{ $isQr: boolean }>`
  padding: 100px 0;
  position: relative;
  z-index: 1;
  min-height: 100vh;

  ${({ $isQr }) =>
    $isQr &&
    `
    background-image: url("/images/faq_bg-desktop.png");
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: top;
    padding-top: 50px;
    margin-top: 50px;

    @media (max-width: 768px) {
      background-image: none;
    }
  `}

  @media (max-width: 768px) {
    padding: 50px 0;
  }

  @media (max-width: 500px) {
    background-image: url("/images/faq-project_bg.png");
    background-position: top right;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: local;
    padding-bottom: 0;
  }
`;

export const FaqContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  background: transparent;

  @media (max-width: 1280px) {
    width: calc(100vw - 60px);
  }

  @media (max-width: 500px) {
    width: 100vw;

    & h2 {
      margin-left: 30px;
    }
  }
`;

export const FaqWrapper = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  gap: 38px;
  margin-top: 88px;
  position: relative;
  z-index: 2;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 48px;
  }
`;

export const QuestionsWrapper = styled.div`
  padding: 30px 42px 30px 55px;
  background: linear-gradient(
    153.34deg,
    rgba(255, 255, 255, 0.7) 33.29%,
    rgba(255, 255, 255, 0.4) 83.71%
  );
  border-radius: 30px;
  height: max-content;
  box-shadow: 0px 5px 15px -1px #0000001a;
  backdrop-filter: blur(24px);
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 10px 22px;
    backdrop-filter: blur(12px);
  }
`;

export const QuestionsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 19px);
  gap: 38px;
  overflow: visible;

  @media (max-width: 500px) {
    width: 100%;
    gap: 20px;
    padding: 0 30px;

    &:nth-child(2) {
      background-image: url("/images/faq-sauces_bg.png");
      background-repeat: no-repeat;
      background-size: 90%;
      background-position: 0 -85px;
      padding-bottom: 80px;
    }
  }

  @media (max-width: 400px) {
    &:nth-child(2) {
      background-position: 0 -30px;
    }
  }
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
`;
