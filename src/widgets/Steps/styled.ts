import styled from "styled-components";

import { Text } from "@/components/Shared/SectionDescription/styled";
import { StyledTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { Accordion as AccordionStyled } from "@/components/Accordion/Accordion";
import { StyledButton } from "@/components/Shared/Button/styled";

export const StepsWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 0 80px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 60px 0;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    top: -150px;
    right: -70%;
    background-image: url("/images/steps-background.png");
    background-size: auto;
    background-repeat: no-repeat;
    z-index: -1;
    display: none;
    pointer-events: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: block;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      top: -150px;
      right: -60%;
    }
  }
`;

export const StepsHeader = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

export const SectionTitle = styled(StyledTitle)`
  font-size: 96px;
`;

export const SectionDescription = styled(Text)<{ $color?: string }>`
  color: ${({ theme }) => theme.colors.black};
  margin: 48px 0 88px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    order: 3;
    margin: 0;
  }
`;

export const AccordionList = styled.div`
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: 48px;
    gap: 28px;
  }
`;

export const StepsSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 49px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const StepsStage = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.orange};
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 18px;
  }
`;

export const StepsTitle = styled.h3`
  font-weight: 500;
  font-size: 42px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 26px;
  }
`;

export const StepsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-left: 142px;
  margin-right: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 32px;
  }
`;

export const StepsText = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 110%;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
  }
`;

export const StepsNote = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
`;

export const StepsCard = styled.div`
  max-width: 260px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: stretch;
  border-radius: 24px;
  gap: 1.5px;
  background: transparent;
  cursor: pointer;
  order: 3;
`;

export const StepsItem = styled.li`
  padding: 28px 0;
  display: flex;
  align-items: center;
  gap: 42px;
  justify-content: flex-start;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
  }

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #b4b4b4;
  }

  &:first-child {
    padding-top: 10px;
    padding-bottom: 28px;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      padding-top: 0;
    }
  }

  &:last-child {
    padding-top: 28px;
    padding-bottom: 0;
    &::after {
      display: none;
    }
  }
`;

export const Accordion = styled(AccordionStyled)`
  position: relative;
  padding: 42px 45px 45px 55px;
  border-radius: 48px;
  background: linear-gradient(
    153.34deg,
    rgba(255, 255, 255, 0.7) 33.29%,
    rgba(255, 255, 255, 0.4) 83.71%
  );
  box-shadow: 0px 5px 15px -1px #0000001a;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 38px 22px 42px 25px;
    border-radius: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 48px;
    padding: 1px;
    background: linear-gradient(
      168.23deg,
      rgba(255, 255, 255, 0.8) 8.05%,
      rgba(255, 255, 255, 0) 51.63%,
      rgba(244, 244, 241, 0) 73.43%,
      rgba(244, 244, 241, 0.7) 95.22%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      border-radius: 30px;
    }
  }

  &:nth-child(1) {
    ${StepsItem} {
      &:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 42px;
        grid-row-gap: 10px;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        ${StepsText} {
          grid-area: 1 / 1 / 2 / 2;
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            order: 1;
          }
        }

        ${StepsNote} {
          grid-area: 2 / 1 / 3 / 2;
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            order: 3;
          }
        }

        ${StepsCard} {
          grid-area: 1 / 2 / 3 / 3;
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            order: 2;
          }
        }
      }
    }
  }
`;

export const StepsButton = styled.button`
  background: #ffffff;
  box-shadow: 0px 5px 15px -1px #0000001a;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 10px;
  padding: 9px 12px;
  border: none;
  display: flex;
  gap: 14px;
  max-width: 240px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 9px 10px;
  }
`;

export const ButtonImage = styled.div`
  max-width: 45px;
  width: 100%;
  height: auto;
`;

export const ButtonContent = styled.div``;

export const ButtonTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -4%;
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  margin-bottom: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 14px;
  }
`;

export const ButtonCopyright = styled.span`
  display: block;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -3.5%;
  color: #1d55aa;
  text-align: left;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 24px;
  box-shadow: -4px 1px 8px 0px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
  background: #ffffff;

  &::after {
    content: "";
    width: 4px;
    height: 30px;
    position: absolute;
    top: 25px;
    right: -3px;
    background: #ffffff;
    border-radius: 10px;
    z-index: -1;
  }
`;

export const CardSubtitle = styled.span`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  letter-spacing: 6%;
  text-transform: uppercase;
  color: rgba(23, 23, 23, 0.5);
  margin-bottom: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 7px;
    margin-bottom: 5px;
  }
`;

export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -1%;
  margin-bottom: 3px;
  color: #171717;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 9px;
  }
`;

export const CardNote = styled.span`
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  letter-spacing: -1%;
  margin-bottom: 18px;
  display: block;
  color: rgba(23, 23, 23, 0.5);
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 8px;
    margin-bottom: 16px;
  }
`;

export const CardButton = styled.button`
  font-family: ${({ theme }) => theme.font.rooftop};
  font-weight: 500;
  font-size: 9px;
  line-height: 12px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  padding: 4px 9px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 8px;
  }
`;

export const CardImagesWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  box-shadow: 4px 1px 8px 0px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
  background: #ffffff;
  padding: 10px;

  &::after {
    content: "";
    width: 4px;
    height: 30px;
    position: absolute;
    bottom: 25px;
    left: -3px;
    background: #ffffff;
    border-radius: 10px;
    z-index: -1;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardImageInfo = styled.div`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 15px;
  height: 15px;
`;

export const StepsQrWrapper = styled.div`
  max-width: 240px;
  width: 100%;
  padding: 14px;
  display: flex;
  gap: 36px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 12px;
  box-shadow: 0px 6.05px 18.16px -1.21px #0000001a;
  backdrop-filter: blur(29px);
  -webkit-backdrop-filter: blur(29px);
`;

export const QrTitle = styled.span`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
`;

export const QrCodeImage = styled.img`
  width: 68px;
  height: 68px;
  object-fit: cover;
`;

export const Button = styled(StyledButton)`
  && {
    padding: 41px;
    margin: 88px 0 0;
    width: 610px;
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      padding: 31px 45px 38px;
      margin: 26px auto 0;
      width: 100%;
    }
  }
`;
