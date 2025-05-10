import styled from "styled-components";
import Image from "next/image";

import { StyledButton } from "@/components/Shared/Button/styled";
import { StyledContainer } from "@/components/Shared/Container/styled";

export const AboutWrapper = styled.div<{ $isQr?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ $isQr }) => ($isQr ? "0px" : "200px")};
  }
`;

export const Container = styled(StyledContainer)`
  && {
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const TimeLineContainer = styled.div<{ $isQr?: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: ${({ $isQr }) => ($isQr ? "2" : "2")};
  }
`;

export const TextWrapper = styled.div<{ $isQr?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 100px 0;

  &:nth-of-type(1) {
    display: ${({ $isQr }) => ($isQr ? "none" : "initial")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 28px;

    &:nth-of-type(1) {
      display: ${({ $isQr }) => ($isQr ? "block" : "flex")};
      padding: ${({ $isQr }) => ($isQr ? "50px 0 100px" : "0 0 60px")};
      order: ${({ $isQr }) => ($isQr ? "initial" : "1")};
    }
    &:nth-of-type(2) {
      padding-top: ${({ $isQr }) => ($isQr ? "0" : "60px")};
      padding-bottom: ${({ $isQr }) => ($isQr ? "0" : "37px")};
      order: ${({ $isQr }) => ($isQr ? "1" : "3")};
    }
    &:nth-of-type(3) {
      padding-top: ${({ $isQr }) => ($isQr ? "0" : "60px")};
      order: ${({ $isQr }) => ($isQr ? "3" : "3")};
    }
    &:nth-of-type(4) {
      padding-top: ${({ $isQr }) => ($isQr ? "0" : "100px")};
      order: ${({ $isQr }) => ($isQr ? "4" : "5")};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 50px 0;
    gap: 28px;
  }
`;

export const Button = styled(StyledButton)<{ $step?: number }>`
  && {
    padding: 41px 40px 48px;
    margin-top: 86px;
    width: 610px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      width: 100%;
      margin-top: 35px;
      padding: 31px 30px 38px;
      order: 4;
    }
  }
`;

export const ButtonDesktop = styled(Button)<{ $isQr?: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: ${({ $isQr }) => ($isQr ? "block" : "none")};
  }
`;

export const ButtonMobile = styled(Button)<{ $isQr?: boolean }>`
  display: ${({ $isQr }) => ($isQr ? "none !important" : "none !important")};
  && {
    margin-top: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    order: 4;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: ${({ $isQr }) => ($isQr ? "none" : "flex !important")};
    margin-top: 0;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 96px;
  font-weight: 500;
  line-height: 95%;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 42px;
    line-height: 100%;
  }
`;

export const BackgroundImagesTop = styled.div<{ $isQr?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: -1;
  height: ${({ $isQr }) => ($isQr ? "600px" : "1100px")};
  @media (min-width: 1920px) {
    width: 70%;
    right: 50%;
    transform: translateX(50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &::before {
      content: "";
      position: absolute;
      top: 70%;
      left: 50%;
      width: calc(100% + 400px);
      height: 400px;
      transform: translate(-50%, -50%);
      z-index: 1;
      background-image: url("/images/title-bg.webp");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      pointer-events: none;
    }
    &::after {
      content: "";
      position: absolute;
      top: 35%;
      left: 50%;
      width: calc(100% + 300px);
      height: 400px;
      transform: translate(-50%, -50%);
      z-index: 1;
      background-image: url("/images/title-bg.webp");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      pointer-events: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ $isQr }) => ($isQr ? "700px" : "810px")};
  }
`;

export const BackgroundImagesBottom = styled.div<{ $isQr?: boolean }>`
  position: relative;
  width: 100%;
  z-index: -1;
  height: ${({ $isQr }) => ($isQr ? "800px" : "1260px")};
  @media (min-width: 1920px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ $isQr }) => ($isQr ? "700px" : "900px")};
  }
`;
export const ParallaxWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
`;

export const BoxBackground1 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  top: -25%;
  right: -15%;
  width: 68%;
  height: 71%;
  object-fit: contain;
  display: ${({ $isQr }) => ($isQr ? "none" : "block")};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    top: -5%;
    right: initial;
    left: 50%;
    transform: translateX(-50%) rotate(-90deg);
    width: 455px;
    height: 360px;
  }
`;

export const BoxBackground2 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  object-fit: contain;
  right: ${({ $isQr }) => ($isQr ? "-20%" : "-35%")};
  width: ${({ $isQr }) => ($isQr ? "76%" : "68%")};
  height: ${({ $isQr }) => ($isQr ? "108%" : "61%")};
  top: ${({ $isQr }) => ($isQr ? "-60%" : "-10%")};
  @media (min-width: 2000px) {
    right: -15%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    top: -5%;
    right: -20%;
    transform: rotate(290deg);
    width: 480px;
    height: 380px;
    display: ${({ $isQr }) => ($isQr ? "none" : "block")};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: -15%;
    right: -55%;
  }
`;

export const BoxBackground3 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  bottom: 30%;
  left: -13%;
  width: 68%;
  height: 62%;
  object-fit: contain;
  display: ${({ $isQr }) => ($isQr ? "none" : "block")};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    bottom: ${({ $isQr }) => ($isQr ? "initial" : "25%")};
    top: ${({ $isQr }) => ($isQr ? "-20%" : "initial")};
    left: ${({ $isQr }) => ($isQr ? "50%" : "-15%")};
    width: ${({ $isQr }) => ($isQr ? "623px" : "480px")};
    height: ${({ $isQr }) => ($isQr ? "600px" : "380px")};
    transform: ${({ $isQr }) =>
      $isQr ? "rotate(-20deg) translateX(-50%)" : "rotate(-100deg)"};
    display: ${({ $isQr }) => ($isQr ? "block" : "block")};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: ${({ $isQr }) => ($isQr ? "50%" : "-35%")};
    top: ${({ $isQr }) => ($isQr ? "-15%" : "initial")};
    height: ${({ $isQr }) => ($isQr ? "500px" : "380px")};
  }
`;

export const Sauce1 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  top: ${({ $isQr }) => ($isQr ? "15%" : "10%")};
  bottom: ${({ $isQr }) => ($isQr ? "initial" : "10%")};
  left: ${({ $isQr }) => ($isQr ? "-5%" : "50%")};
  transform: ${({ $isQr }) => ($isQr ? "none" : "translateX(-50%)")};
  width: ${({ $isQr }) => ($isQr ? "24%" : "22%")};
  height: ${({ $isQr }) => ($isQr ? "37%" : "20%")};
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: ${({ $isQr }) => ($isQr ? "none" : "initial")};
    top: initial;
    bottom: 5%;
    transform: rotate(110deg);
    left: 20%;
    width: 190px;
    height: 185px;
    z-index: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 15%;
  }
`;

export const Sauce2 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  right: ${({ $isQr }) => ($isQr ? "15%" : "15%")};
  bottom: ${({ $isQr }) => ($isQr ? "initial" : "25%")};
  top: ${({ $isQr }) => ($isQr ? "40%" : "initial")};
  transform: ${({ $isQr }) => ($isQr ? "translateY(-50%)" : "rotate(15deg)")};
  width: ${({ $isQr }) => ($isQr ? "20%" : "21%")};
  height: ${({ $isQr }) => ($isQr ? "50%" : "24%")};
  object-fit: contain;

  @media (max-width: 1200px) {
    right: ${({ $isQr }) => ($isQr ? "5%" : "15%")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ $isQr }) => ($isQr ? "5%" : "-45%")};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    transform: ${({ $isQr }) => ($isQr ? "rotate(-20deg)" : "rotate(15deg)")};
    top: ${({ $isQr }) => ($isQr ? "initial" : "48%")};
    bottom: ${({ $isQr }) => ($isQr ? "-2%" : "initial")};
    right: ${({ $isQr }) => ($isQr ? "-5%" : "-5%")};
    left: ${({ $isQr }) => ($isQr ? "initial" : "initial")};
    width: 190px;
    height: 185px;
    z-index: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: ${({ $isQr }) => ($isQr ? "-12%" : "-15%")};
  }
`;

export const Sauce3 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  object-fit: contain;
  right: ${({ $isQr }) => ($isQr ? "initial" : "15%")};
  left: ${({ $isQr }) => ($isQr ? "20%" : "initial")};
  bottom: ${({ $isQr }) => ($isQr ? "-5%" : "10%")};
  top: ${({ $isQr }) => ($isQr ? "initial" : "initial")};
  width: ${({ $isQr }) => ($isQr ? "24%" : "22%")};
  height: ${({ $isQr }) => ($isQr ? "37%" : "20%")};
  transform: ${({ $isQr }) => ($isQr ? "rotate(185deg)" : "rotate(-35deg)")};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    bottom: ${({ $isQr }) => ($isQr ? "25%" : "initial")};
    right: ${({ $isQr }) => ($isQr ? "initial" : "10%")};
    left: ${({ $isQr }) => ($isQr ? "15%" : "initial")};
    top: ${({ $isQr }) => ($isQr ? "initial" : "35%")};
    transform: ${({ $isQr }) => ($isQr ? "rotate(15deg)" : "rotate(10deg)")};
    width: 190px;
    height: 185px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: ${({ $isQr }) => ($isQr ? "15%" : "initial")};
    right: ${({ $isQr }) => ($isQr ? "initial" : "5%")};
    top: ${({ $isQr }) => ($isQr ? "initial" : "30%")};
    bottom: ${({ $isQr }) => ($isQr ? "14%" : "initial")};
  }
`;

export const LineBackground1 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  object-fit: contain;
  right: -12%;
  bottom: -150%;
  transform: rotate(285deg);
  width: 61.46%;
  height: 179.17%;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    bottom: 18%;
    transform: rotate(230deg) scale(1.5);
    width: 100%;
    height: 100%;
    right: -90%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: rotate(230deg) scale(1.8);
    right: -95%;
  }
`;

export const LineBackground2 = styled(Image)<{ $isQr?: boolean }>`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-15%) scale(3.5);
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: none;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: block;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: translateX(-15%) scale(3.5);
  }
`;
