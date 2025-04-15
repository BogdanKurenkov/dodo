import styled from "styled-components";
import {Text} from "@/components/Shared/SectionDescription/styled";
import {StyledButton} from "@/components/Shared/Button/styled";
import {Sauce as SauceStyled} from "@/components/VotesBlock/styled";

export const ResultBackground = styled.section`
  background-image: url("/images/voteResult-background.png");
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: center right;
  position: relative;
  z-index: 0;
  padding: 90px 0;
`;

export const ContainerInner = styled.div`
  position: relative;
  z-index: 1;
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
  }
`;

export const ResultTitle = styled.h2`
  font-size: 96px;
  line-height: 95%;
  text-transform: lowercase;
  margin-bottom: 48px;
`;

export const ResultDescription = styled(Text)<{ $color?: string }>`
  color: ${({theme}) => theme.colors.white};
  text-transform: lowercase;
`;

export const ResultSubtitle = styled.h3`
  font-size: 42px;
  line-height: 120%;
  margin-top: 62px;
  margin-bottom: 18px;

  span {
    font-size: 62px;
  }
`;

export const Button = styled(StyledButton)`
  padding: 41px;
  margin: 120px 0 0;
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
`;
