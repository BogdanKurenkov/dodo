import styled from "styled-components";
import { Text } from "@/components/Shared/SectionDescription/styled";
import { StyledButton } from "@/components/Shared/Button/styled";
import { Sauce as SauceStyled } from "@/components/VotesBlock/styled";

export const ResultBackground = styled.section`
  position: relative;
  z-index: 0;
  padding: 90px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 40px 0;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("/images/voteResult-background.png");
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: 120% 60%;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: none;
    }
  }
`;

export const ContainerInner = styled.div`
  position: relative;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    background: linear-gradient(
      169.11deg,
      rgba(70, 70, 80, 0.4) 10.47%,
      rgba(70, 70, 80, 0.2) 80.6%
    );
    box-shadow: 0px 5px 25px 0px #00000026;
    backdrop-filter: blur(24px);
    border-radius: 30px;
    padding-bottom: 38px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 30px;
      padding: 1px;
      background: linear-gradient(
        166.29deg,
        rgba(144, 144, 144, 0.5) 6.91%,
        rgba(144, 144, 144, 0) 51%,
        rgba(64, 64, 64, 0) 72.6%,
        rgba(64, 64, 64, 0.5) 95.08%
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      pointer-events: none;
    }
  }
`;

export const ResultHeader = styled.div`
  padding-bottom: 98px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 625px;
    width: 100%;
    height: 1px;
    background: rgba(244, 244, 241, 0.4);
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 400px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      max-width: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 150px;
    left: 0;
    background-image: url("/images/voteResult-background-mob.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 40px 25px 0;
    height: 610px;
    overflow: hidden;
  }
`;

export const ResultTitle = styled.h2`
  font-size: 96px;
  font-weight: 500;
  line-height: 95%;
  text-transform: lowercase;
  margin-bottom: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 42px;
    line-height: 100%;
    margin-bottom: 18px;
  }
`;

export const ResultDescription = styled(Text)<{ $color?: string }>`
  color: ${({ theme }) => theme.colors.white};
  text-transform: lowercase;
`;
export const ResultContentWrapper = styled.div`
  padding-top: 62px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 28px 25px 0;
  }
`;

export const ResultSubtitle = styled.h3`
  font-size: 42px;
  font-weight: 500;
  line-height: 120%;

  margin-bottom: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 32px;
  }

  span {
    font-size: 62px;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      font-size: 42px;
    }
  }
`;

export const Button = styled(StyledButton)`
  padding: 41px;
  margin: 120px 0 0;
  width: 610px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 18px 60px 25px;
    margin: 66px auto 0;
    width: 100%;
  }
`;

export const Sauce = styled(SauceStyled)`
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  left: initial;
  bottom: initial;
  width: 338px;
  height: 300px;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    top: 23%;
    width: 270px;
    height: 240px;
    right: initial;
    left: 50%;
    transform: translateX(-50%);
  }
`;
