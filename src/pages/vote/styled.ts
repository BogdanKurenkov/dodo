import styled from "styled-components";
import {StyledButton} from "@/components/Shared/Button/styled";

export const VoteBackground = styled.section`
  background-image: url("/images/vote-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  z-index: 0;
  padding: 90px 0;
`;

export const SauceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SaucesList = styled.div`
  ${({theme}) => theme.mixins.flexCenter}
  gap: 146px;
  position: relative;
  z-index: 1;
  padding: 88px 0;
`;

export const SauceCard = styled.div`
  ${({theme}) => theme.mixins.flexCenter}
  flex-direction: column;
  background: linear-gradient(160.9deg, #908f8f 29%, #c2c2c2 87.15%);
  border-radius: 41.15px 41.15px 41.15px 11.76px;
  min-width: 178px;
  width: 100%;
  height: 219px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.colors.white};
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
  }

  &:hover {
    box-shadow: 6.63px -6.63px 66.32px 0px ${({theme}) => theme.colors.orange};
    &::after {
      clip-path: polygon(0 45%, 100% 81%, 100% 100%, 0% 100%);
    }
    &::before {
      clip-path: polygon(0 47%, 100% 81%, 100% 100%, 0% 100%);
    }
  }

  &.active {
    box-shadow: 6.63px -6.63px 66.32px 0px ${({theme}) => theme.colors.orange};
    &::after {
      clip-path: polygon(0 45%, 100% 81%, 100% 100%, 0% 100%);
    }
    &::before {
      clip-path: polygon(0 47%, 100% 81%, 100% 100%, 0% 100%);
    }
  }
`;

export const SauceNumber = styled.div`
  font-family: ${({theme}) => theme.font.rooftop};
  font-size: 252px;
  line-height: 100%;
  text-align: right;
  position: absolute;
  top: 52%;
  right: -25px;
  transform: translateY(-50%);
  z-index: 0;
  pointer-events: none;
`;

export const SauceType = styled.h3`
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: ${({theme}) => theme.colors.black};
  position: absolute;
  bottom: 71px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const SauceSample = styled.p`
  margin-top: 32px;
  font-size: 22.75px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.orange};
  text-align: center;
`;

export const SauceTitle = styled.p`
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  text-transform: lowercase;
  color: ${({theme}) => theme.colors.white};
  margin-top: 11px;
  text-align: center;
`;

export const Button = styled(StyledButton)`
  padding: 41px;
  margin: 86px auto 0;
`;

export const VotePrompt = styled.span`
  display: block;
  width: 100%;
  font-size: 22px;
  line-height: 120%;
  text-align: center;
  text-transform: lowercase;
  color: ${({theme}) => theme.colors.white};
  opacity: 0.4;
  margin: 28px auto 0;
`;
