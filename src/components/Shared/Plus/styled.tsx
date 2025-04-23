import styled, { css } from "styled-components";

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
`;

export const Line = styled.div<{ $isCross: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  transition: transform 0.3s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HorizontalLine = styled(Line)`
  width: 50px;
  height: 1.5px;
  
  ${({ $isCross }) => $isCross && css`
    transform: translate(-50%, -50%) rotate(45deg);
  `}
`;

export const VerticalLine = styled(Line)`
  width: 2px;
  height: 50px;

  ${({ $isCross }) => $isCross && css`
    transform: translate(-50%, -50%) rotate(45deg);
  `}
`;
