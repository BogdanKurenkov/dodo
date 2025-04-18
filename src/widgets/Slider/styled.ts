import styled, { css } from "styled-components";

import { Swiper as SwiperComponent, SwiperSlide as SwiperSlideComponent } from "swiper/react";

import { Sauce as SauceStyled } from "@/components/VotesBlock/styled";

export const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 90px 0 0;
  height: 100%;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
`;

export const SauceBackground = styled.img<{ $index: number; $isActive: boolean }>`
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: -1;
  object-fit: contain;
  object-position: -10%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  ${({ $index }) =>
    $index === 1 &&
    css`
      object-position: 15%;
      height: 70%;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    object-position: 20%;
  }
  @media (min-width: 2560px) {
    object-position: 40%;
  }
`;

export const Swiper = styled(SwiperComponent)`
  width: 100%;
  height: 100%;
  margin: 85px 0 97px;

  .swiper-pagination {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    gap: 40px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: calc(100% - 60px);
    width: 50px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    gap: 0px;

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
    transition: all 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    position: relative;
    flex: 1;
    gap: 40px;

    .pagination-line {
      flex-grow: 1;
    }
  }
`;

export const SwiperSlide = styled(SwiperSlideComponent)`
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  transition: opacity 0.3s ease-in-out;
`;

export const Sauce = styled(SauceStyled)`
  top: 50%;
  left: 50%;
  width: 340px;
  height: 300px;
  transform: translateY(-50%) translateX(-100%);
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

export const CardSauce = styled.div`
  margin-left: auto;
  padding: 42px 32px;
  max-width: 433px;
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(
    169.11deg,
    rgba(70, 70, 80, 0.4) 10.47%,
    rgba(70, 70, 80, 0.2) 80.6%
  );
  position: relative;
  box-shadow: 0px 5px 25px 0px #00000026;
  backdrop-filter: blur(24px);
  border-radius: 30px;
  transform: translate3d(0, 0, 0);
  will-change: transform, filter;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;

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
`;

export const SauceSample = styled.span`
  display: block;
  font-weight: 500;
  font-size: 22.75px;
  line-height: 100%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.orange};
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 18px;
  }
`;

export const SauceTitle = styled.h3`
  font-size: 42px;
  font-weight: 500;
  line-height: 100%;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 28px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
  }
`;

export const SauceDescription = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.4;
  margin-bottom: 28px;
`;

export const SauceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;
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
  opacity: 0.4;
  padding-top: 12px;
`;
export { SwiperSlideComponent };
