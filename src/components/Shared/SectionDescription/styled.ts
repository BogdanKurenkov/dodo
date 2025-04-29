import styled from "styled-components";

export const Text = styled.p<{ $color: string; $maxWidth?: string }>`
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: ${({ $color }) => $color};
  max-width: ${({ $maxWidth }) => $maxWidth};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 22px;
  }
`;
