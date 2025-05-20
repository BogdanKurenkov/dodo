import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const levitateUp = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;
const levitateDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
`;

export const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #000;
  animation: ${spin} 1s ease-in-out infinite;
`;

export const ImageContainer = styled.div<{
  $size: number;
  $direction?: "up" | "down";
}>`
  position: relative;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  .placeholder-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const VideoWrapper = styled.div<{
  $isAnimate?: boolean;
  $direction?: "up" | "down";
}>`
  width: max-content;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  z-index: 20;

  /* ${({ $isAnimate, $direction = "up" }) =>
    $isAnimate &&
    css`
      animation: ${$direction === "up" ? levitateUp : levitateDown} 15s
        ease-in-out infinite;
      will-change: transform;
    `} */
`;
