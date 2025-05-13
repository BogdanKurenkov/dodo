import styled from "styled-components";

import { StyledContainer } from "@/components/Shared/Container/styled";
import { StyledButton } from "@/components/Shared/Button/styled";

export const VoteBackground = styled.section<{
  $step: number;
  $sPlaying: boolean;
  $isTransitioning: boolean;
}>`
  position: relative;
  z-index: 1;
  padding: 90px 0;
  height: ${({ $sPlaying }) => ($sPlaying ? "auto" : "785px")};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("/images/vote-background.webp");
    background-size: auto;
    background-repeat: no-repeat;
    background-position: ${({ $sPlaying }) =>
      $sPlaying ? "40% 60%" : "40% 32.8%"};
    z-index: -1;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      background-size: cover;
      background-position: 40% 15%;
      top: -10%;
      opacity: ${({ $isTransitioning }) => ($isTransitioning ? 1 : 0)};
      transition: all 1.2s ease;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5%;
    left: 0;
    display: none;
    background-image: url("/images/vote-background.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 85% 100%;
    z-index: -1;
    pointer-events: none;
    transition: all 1s ease;
    opacity: ${({ $isTransitioning }) => ($isTransitioning ? 0 : 1)};
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 40px 0;
  }
`;

export const VoteBackgroundMob = styled.div<{
  $step: number;
  $sPlaying: boolean;
  $isTransitioning: boolean;
}>`
  position: absolute;
  bottom: 5%;
  right: -60%;
  z-index: -1;
  width: 350px;
  height: 300px;
  opacity: ${({ $sPlaying }) => ($sPlaying ? 1 : 0)};
  pointer-events: none;
  transition: all 1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/images/vote-background-mob.webp");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Container = styled(StyledContainer)`
  && {
    height: 100%;
  }
`;

export const SaucesList = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  /* gap: 146px; */
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 88px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 0;
    justify-content: space-between;
    flex-direction: column;
    width: min-content;
    /* margin: 0 auto; */
    padding: 56px 0 0;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const SauceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    &:nth-child(odd) {
      margin-top: -80px;
      align-self: flex-start;
      margin-left: 0;
    }

    &:nth-child(1) {
      margin-left: -28px !important;
    }

    &:nth-child(even) {
      margin-top: -130px;
    }

    &:nth-child(1) {
      margin-top: 0px;
      margin-left: 0px;
    }

    &:nth-child(2) {
      margin-left: calc(100vw - 246px) !important;
    }
  }

  @media (max-width: 375px) {
    &:nth-child(odd) {
      margin-top: -50px;
      align-self: flex-start;
    }

    &:nth-child(2) {
      margin-left: calc(100vw - 200px) !important;
    }

    &:nth-child(even) {
      margin-top: -100px;
    }

    &:nth-child(1) {
      margin-top: 0px;
      margin-left: 0px;
    }
  }
`;

export const SauceCard = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  background: linear-gradient(160.9deg, #908f8f 29%, #c2c2c2 87.15%);
  border-radius: 41.15px 41.15px 41.15px 11.76px;
  min-width: 178px;
  height: 219px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    min-width: initial;
    width: 120px;
    height: 150px;
    border-radius: 28px 28px 28px 8px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%);
    z-index: 1;
    transition: all 0.4s ease;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 20px);
    height: calc(100% - 15px);
    background: #ea9a16;
    border-radius: 25px;
    clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%);
    z-index: 2;
    transition: all 0.4s ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      width: calc(100% - 15px);
      height: calc(100% - 10px);
    }
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 6.63px -6.63px 66.32px 0px ${({ theme }) => theme.colors.orange};

      &::after {
        clip-path: polygon(0 45%, 100% 81%, 100% 100%, 0% 100%);
      }

      &::before {
        clip-path: polygon(0 47%, 100% 81%, 100% 100%, 0% 100%);
      }
    }
  }

  &.active {
    box-shadow: 6.63px -6.63px 66.32px 0px ${({ theme }) => theme.colors.orange};

    &::after {
      clip-path: polygon(0 45%, 100% 81%, 100% 100%, 0% 100%);
    }

    &::before {
      clip-path: polygon(0 47%, 100% 81%, 100% 100%, 0% 100%);
    }
  }
`;

export const SauceNumber = styled.span`
  font-family: ${({ theme }) => theme.font.rooftop};
  font-size: 252px;
  line-height: 100%;
  text-align: right;
  position: absolute;
  top: 52%;
  right: -25px;
  transform: translateY(-50%);
  z-index: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 171px;
    right: -18px;
  }
`;

export const SauceType = styled.span`
  font-family: ${({ theme }) => theme.font.rooftop};
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  bottom: 71px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 16px;
    bottom: 50px;
  }
`;

export const SauceSample = styled.span<{ $isPlaying: boolean }>`
  margin-top: -32px;
  font-weight: 500;
  font-size: 22.75px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  opacity: ${({ $isPlaying }) => ($isPlaying ? 1 : 0)};
  transition: opacity 2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 18px;
  }
`;

export const SauceTitle = styled.span<{ $sPlaying: boolean }>`
  font-size: 32px;
  font-weight: 500;
  line-height: 100%;
  text-align: center;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 11px;
  opacity: ${({ $sPlaying }) => ($sPlaying ? 1 : 0)};
  transition: opacity 2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
    margin-top: 8px;
  }
`;

export const Button = styled(StyledButton)<{ $step?: number }>`
  && {
    padding: 41px 40px 48px;
    margin: 86px auto 0;
    width: 610px;
    transform: ${({ $step }) =>
      $step === 1 ? "translateY(-200px)" : "translateY(0)"};
    transition: transform 1s ease;
    position: relative;
    z-index: 3;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      width: 100%;
      padding: 31px 30px 38px;
      margin: 47px auto 0;
      transform: ${({ $step }) =>
        $step === 1 ? "translateY(-150px)" : "translateY(0)"};
    }
  }
`;

export const VotePrompt = styled.span<{ $step?: number }>`
  display: block;
  width: 100%;
  font-size: 22px;
  line-height: 120%;
  text-align: center;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  margin: 28px auto 0;
  transform: ${({ $step }) =>
    $step === 1 ? "translateY(-200px)" : "translateY(0)"};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin: 22px auto 0;
    font-size: 18px;
    transform: ${({ $step }) =>
      $step === 1 ? "translateY(-150px)" : "translateY(0)"};
  }
`;
