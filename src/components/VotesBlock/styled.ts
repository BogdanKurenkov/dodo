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

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const BarsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  height: 300px;
  position: relative;
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const AnimatedBar = styled.div`
  width: 220px;
  background: linear-gradient(
    169.11deg,
    rgba(70, 70, 80, 0.4) 10.47%,
    rgba(70, 70, 80, 0.2) 80.6%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 46px;

  background-blend-mode: overlay;
  border-radius: 4px 4px 0 0;
  animation: ${growUp} 1s ease-out forwards;
  position: absolute;
  bottom: 40px;
  left: 0;
  transition: all 0.3s;
  box-shadow: 0px 6.37px 31.83px 0px #00000026;
  border-radius: 25px;

  backdrop-filter: blur(30.55645179748535px);
  border: 1.27px solid;
  border-image-source: linear-gradient(
    166.29deg,
    rgba(144, 144, 144, 0.5) 6.91%,
    rgba(144, 144, 144, 0) 51%,
    rgba(64, 64, 64, 0) 72.6%,
    rgba(64, 64, 64, 0.5) 95.08%
  );

  height: var(--min-height);
  max-height: 450px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Sauce = styled(Image)`
  position: absolute;
  bottom: var(--sauce-bottom);
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  transition: bottom 1s ease-out;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out 0.5s forwards;
`;

export const BarBottomBlock = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: -24px;
  left: 0;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 10px;

  & span {
    opacity: 40%;
  }
`;
