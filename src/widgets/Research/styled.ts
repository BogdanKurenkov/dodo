import { Button } from "@/components/Shared/Button/Button";
import styled, { keyframes } from "styled-components";

const growAnimation = keyframes`
  from {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  to {
    transform: scaleY(1);
  }
`;

export const ResearchWrapper = styled.section`
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const ColsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 57%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 30px;

    & h2 {
      margin-bottom: 18px;
    }
  }
`;

export const RightCol = styled.div`
  width: 43%;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Graphics = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin-top: 48px;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

export const BarBase = styled.div`
  border-radius: 18.35px;
  position: relative;
  box-shadow: 0px 4.59px 22.93px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(22px);
  display: flex;
  flex-direction: column;
  animation: ${growAnimation} 1.5s ease-out forwards;
  transform-origin: bottom;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18.35px;
    padding: 0.99px;
    background: linear-gradient(
      166.29deg,
      rgba(144, 144, 144, 0.25) 6.91%,
      rgba(144, 144, 144, 0) 50.11%,
      rgba(64, 64, 64, 0) 72.6%,
      rgba(64, 64, 64, 0.25) 95.08%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export const FirstBar = styled(BarBase)`
  height: 309px;
  width: calc(33.33% - 27px);
  background: linear-gradient(
    169.11deg,
    rgba(70, 70, 80, 0.5) 10.47%,
    rgba(70, 70, 80, 0.3) 80.6%
  );
  gap: 34.86px;

  @media (max-width: 500px) {
    height: 191px;
    width: calc(33.33% - (20px / 3));
  }
`;

export const SecondBar = styled(BarBase)`
  width: calc(33.33% - 27px);
  height: 475px;
  border-radius: 18.35px;
  padding-top: 34.86px;
  padding-right: 20.18px;
  padding-bottom: 33.16px;
  padding-left: 22.93px;
  gap: 34.86px;
  background: linear-gradient(
      169.11deg,
      rgba(96, 96, 96, 0.4) 10.47%,
      rgba(96, 96, 96, 0.1) 80.6%
    ),
    rgba(255, 105, 0, 1);
  background-blend-mode: overlay;
  opacity: 0.6;
  border: 0.99px solid rgba(144, 144, 144, 0.25);
  border-radius: 18.35px;
  box-shadow: 0px 4.59px 22.93px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(202.016094207763672px);

  @media (max-width: 500px) {
    height: 294px;
    width: calc(33.33% - (20px / 3));
  }
`;

export const ThirdBar = styled(FirstBar)`
  height: 232px;

  @media (max-width: 500px) {
    height: 143px;
    width: calc(33.33% - (20px / 3));
  }
`;

export const BtnDesktop = styled(Button)`
  width: ${({ $width }) => ($width ? $width : "max-content")};
  margin-top: 40px;

  background-color: ${({ $backgroundColor }) => {
    if ($backgroundColor) return $backgroundColor;
  }};

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BtnMobile = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-top: 48px;

    background-color: ${({ $backgroundColor }) => {
      if ($backgroundColor) return $backgroundColor;
    }};
  }
`;
