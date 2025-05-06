import styled, { keyframes, css } from "styled-components";

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

export const LottieWrapper = styled.div<{
  $isAnimate?: boolean;
  $direction?: "up" | "down";
}>`
  width: max-content;
  transition: transform 0.3s ease-out;
  cursor: pointer;

  ${({ $isAnimate, $direction = "up" }) =>
    $isAnimate &&
    css`
      animation: ${$direction === "up" ? levitateUp : levitateDown} 15s
        ease-in-out infinite;
      will-change: transform;
    `}
`;
