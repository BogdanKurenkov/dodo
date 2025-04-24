import styled, { keyframes } from "styled-components";

const levitate = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const LottieWrapper = styled.div`
  width: max-content;
  /* animation: ${levitate} 3s ease-in-out infinite; */
`;
