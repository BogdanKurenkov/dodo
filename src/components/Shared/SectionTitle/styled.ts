import styled from "styled-components";

export const StyledTitle = styled.h2<{ $isWhite: boolean }>`
  color: ${({ theme, $isWhite }) =>
    $isWhite ? theme.colors.white : theme.colors.black};
  font-size: 62px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: -50%;
      width: calc(100% + 600px);
      height: calc(100% + 300px);
      transform: translateY(-50%);
      z-index: -1;
      background-image: url("/images/title-bg.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 100% 100%;
      pointer-events: none;
      display: ${({ $isWhite }) => ($isWhite ? "block" : "none")};
    }
  }

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    font-size: 42px;
  }
`;
