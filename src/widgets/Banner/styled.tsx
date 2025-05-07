import styled from "styled-components";

import { StyledButton } from "@/components/Shared/Button/styled";

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 50px 0;
  }
`;

export const Button = styled(StyledButton)<{ $step?: number }>`
  && {
    padding: 41px 40px 48px;
    margin-top: 86px;
    width: 610px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      width: 100%;
      padding: 31px 30px 38px;
    }
  }
`;

export const ButtonDesktop = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ButtonMobile = styled(Button)`
  display: none !important;

  && {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      display: flex !important;
      margin-top: 0;
    }
`

export const BannerTitle = styled.h1`
  font-size: 96px;
  font-weight: 500;
  line-height: 95%;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 42px;
    line-height: 100%;
  }
`;

export const LottieTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 1100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  }
`;

export const LottieBottom = styled.div`
  position: relative;
  width: 100%;
  height: 1260px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  }
`;
