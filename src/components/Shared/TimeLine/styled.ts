import styled from "styled-components";

export const Date = styled.p<{ $isWhite: boolean }>`
  color: ${({ theme, $isWhite }) =>
    $isWhite ? theme.colors.white : theme.colors.black};
  line-height: 110%;
  font-weight: 500;
  font-size: 32px;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 22px;
  }
`;

export const Line = styled.p<{ $isWhite: boolean }>`
  height: 2px;
  background: ${({ theme, $isWhite }) =>
    $isWhite ? theme.colors.white : theme.colors.black};
  flex-grow: 1;
`;

export const TimeLineWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
