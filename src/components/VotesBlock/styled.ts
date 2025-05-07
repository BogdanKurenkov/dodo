import Image from "next/image";
import styled, { keyframes } from "styled-components";

const growUp = keyframes`
  from {
    height: var(--min-height);
  }
  to {
    height: var(--height);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  & button {
    display: none;
  }

  @media (max-width: 500px) {
    & button {
      display: flex;
    }
  }
`;

export const BarsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  height: 300px;
  position: relative;
`;

export const AnimatedBar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${growUp} 1s ease-out forwards;
  position: absolute;
  bottom: 40px;
  left: 0;
  transition: all 0.3s;
  border-radius: 25px;
  border-radius: 25.46px;
  padding-top: 48.38px;
  padding-right: 28.01px;
  padding-bottom: 46.03px;
  padding-left: 31.83px;

  background: linear-gradient(
    169.11deg,
    rgba(70, 70, 80, 0.4) 10.47%,
    rgba(70, 70, 80, 0.2) 80.6%
  );

  box-shadow: 0px 6.37px 31.83px 0px #00000026;

  height: var(--min-height);
  max-height: 450px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 56px;
  line-height: 100%;
  z-index: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  & span {
    opacity: 40%;
  }

  &::after {
    content: "%";
    font-weight: 400;
    font-size: 43px;
    margin-top: 20px;
    position: relative;
    z-index: 2;
    opacity: 40%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25.46px;
    padding: 1.27px;
    background: linear-gradient(
      166.29deg,
      rgba(144, 144, 144, 0.5) 6.91%,
      rgba(144, 144, 144, 0) 51%,
      rgba(64, 64, 64, 0) 72.6%,
      rgba(64, 64, 64, 0.5) 95.08%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    padding-bottom: 30px;

    &::after {
      font-size: 32px;
    }
  }
`;

export const BarWrapper = styled.div<{ $isHighest: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  position: relative;
  z-index: 1;
  width: calc(33% - 12px);

  ${({ $isHighest }) =>
    $isHighest &&
    `
    & ${AnimatedBar} {
      background: linear-gradient(169.11deg, #612800 10.47%, #2f1300 80.6%);
      color: rgba(255, 105, 0, 1);

      & span {
        opacity: 1;
      }

      &::after {
        opacity: 1;
        color: rgba(255, 105, 0, 1);
      }
    }
  `}
`;

export const Sauce = styled(Image)`
  position: absolute;
  bottom: var(--sauce-bottom);
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  transition: bottom 1s ease-out;
  opacity: 0;
  animation: ${fadeIn} 0.7s ease-out 0.9s forwards;
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    width: 125%;
    height: 125%;
    object-fit: scale-down;
  }
`;

export const BarBottomBlock = styled.div<{
  $bottom?: string;
}>`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: -30px;
  left: 0;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 22px;
  font-weight: 400;
  line-height: 110%;

  & span {
    opacity: 40%;
  }

  @media (max-width: 500px) {
    bottom: ${({ $bottom }) => $bottom};
    font-size: 18px;
    width: 105px;
    transition: bottom 1s ease-out;
    opacity: 0;
    animation: ${fadeIn} 0.7s ease-out 0.9s forwards;
  }

  @media (max-width: 375px) {
    left: -6px;
  }
`;
