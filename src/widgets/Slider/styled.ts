import Image from "next/image";
import styled, { css } from "styled-components";
import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent,
} from "swiper/react";

import { Plus as PlusStyled } from "@/components/Shared/Plus/Plus";
import { Line as LineStyled } from "@/components/Shared/Plus/styled";
import { Accordion as AccordionStyled } from "@/components/Accordion/Accordion";

export const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 90px 0 0;
  height: 100%;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 60px 0 80px;
  }
`;

export const SwiperWrapper = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  padding: 85px 30px 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 0;
    margin: 0;
  }
`;

export const AccordionBackground = styled.section`
  max-width: 433px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    169.11deg,
    rgba(70, 70, 80, 0.4) 10.47%,
    rgba(70, 70, 80, 0.2) 80.6%
  );
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  box-shadow: 0px 5px 25px 0px #00000026;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 30px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }

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

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: none;
    }
  }
`;

export const Sauce = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  height: 300px;
  transform: translateY(-50%) translateX(-100%);
  object-fit: cover;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 270px;
    height: 240px;
    transform: translateY(-50%) translateX(-130%);
  }
`;

export const SauceZoomMob = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: ${({ $isPlaying }) =>
    $isPlaying
      ? "translateY(-50%) translateX(-50%) scale(1)"
      : "translateY(-50%) translateX(-50%) scale(0.6)"};
  object-fit: cover;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 720ms ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
`;

export const SauceBackground = styled(Image)<{
  $index: number;
  $isActive: boolean;
  $isMobile: boolean;
  $direction: "bottom" | "top" | null;
}>`
  position: absolute;
  bottom: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: contain;
  object-position: -10%;
  transition: transform 0.8s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    object-position: 20%;
  }

  @media (min-width: 2560px) {
    object-position: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    bottom: initial;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    height: 100%;
    object-position: center;
    object-fit: cover;
    opacity: 1;
  }

  ${({ $index }) =>
    $index === 0 &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        transform: translate(-80%, -50%) scale(1.6);
      }
    `}

  ${({ $index }) =>
    $index === 1 &&
    css`
      object-position: 15%;
      height: 70%;
      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        object-position: 30%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        height: 100%;
        transform: translate(-45%, -40%) scale(1.3) rotate(-9deg);
        object-position: 50%;
      }
    `}

  ${({ $index }) =>
    $index === 2 &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        transform: translate(-60%, -50%) scale(1.6) rotate(-2deg);
        object-position: 50%;
      }
    `}
`;

export const Swiper = styled(SwiperComponent)`
  width: 100%;
  height: 100%;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin: 68px auto 0;
    padding-bottom: 68px;
  }
`;

export const SwiperSlide = styled(SwiperSlideComponent)`
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  isolation: isolate;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    background: linear-gradient(
      169.11deg,
      rgba(70, 70, 80, 0.4) 10.47%,
      rgba(70, 70, 80, 0.2) 80.6%
    );
    position: relative;
    box-shadow: 0px 5px 25px 0px #00000026;
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    min-height: 100%;

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

export const PaginationWrapper = styled.div`
  max-width: 1260px;
  padding: 0 30px;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: 1;
  pointer-events: none;

  .custom-pagination {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    height: calc(100% - 280px);
    width: 50px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    gap: 40px;
    pointer-events: all;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      height: auto;
      top: initial;
      bottom: 0;
      left: 50%;
      transform: translateY(0%) translateX(-50%);
      width: 265px;
    }
  }

  .swiper-pagination-bullet {
    font-weight: 500;
    font-size: 32px;
    line-height: 110%;
    width: 100%;
    height: auto;
    background: transparent;
    opacity: 0.4;
    position: relative;
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 1s ease-in-out;
    gap: 0px;
    margin: 0 !important;

    @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      flex-direction: row;
      font-size: 22px;
      width: auto;
      height: 100%;
    }

    &:first-child {
      justify-content: flex-start;
      .pagination-line.top {
        display: none;
      }
    }

    &:last-child {
      justify-content: flex-end;
      .pagination-line.bottom {
        display: none;
      }
    }
  }

  .pagination-line {
    margin: 0 auto;
    flex-grow: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
    transition: all 1s ease-in-out;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      width: 0;
      height: 2px;
      margin: 0;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    position: relative;
    flex: 1;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      gap: 20px;
    }

    .pagination-line {
      flex-grow: 1;

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 100%;
      }
    }
  }
`;

export const BackgroundImages = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 420px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;

export const Accordion = styled(AccordionStyled)`
  margin-left: auto;
  padding: 42px 32px;
  max-width: 433px;
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border-radius: 30px;
  cursor: auto;
  background: linear-gradient(
    169.11deg,
    rgba(70, 70, 80, 0.4) 10.47%,
    rgba(70, 70, 80, 0.2) 80.6%
  );
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  box-shadow: 0px 5px 25px 0px #00000026;
  border-radius: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-left: 0;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    border-top: 1px solid #555555;
    padding: 18px 22px 32px;
    cursor: pointer;
  }

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
    -webkit-mask: linear-gradient(to right, #fff 0%, #fff 100%) content-box,
      linear-gradient(to right, #fff 0%, #fff 100%);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: none;
    }
  }
`;

export const SauceSummary = styled.div``;

export const SauceSample = styled.span`
  display: block;
  font-weight: 500;
  font-size: 22.75px;
  line-height: 100%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.orange};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const SauceTitle = styled.h3`
  font-size: 42px;
  font-weight: 500;
  line-height: 100%;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 32px;
  }
`;

export const Plus = styled(PlusStyled)`
  display: none;

  & ${LineStyled} {
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: block;
  }
`;

export const SauceDescription = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  margin-top: 28px;
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
    margin-top: 41px;
  }
`;

export const SauceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 32px;
  }
`;

export const SauceItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const SauceHighlight = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 110%;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 12px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
  }
`;

export const SauceDetail = styled.span`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  padding-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
  }
`;
