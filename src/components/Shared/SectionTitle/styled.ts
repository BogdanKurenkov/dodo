import styled from "styled-components";

export const StyledTitle = styled.h2<{ $isWhite: boolean }>`
  color: ${({ theme, $isWhite }) =>
    $isWhite ? theme.colors.white : theme.colors.black};
  font-size: 62px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.01em;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 42px;
  }
`;
