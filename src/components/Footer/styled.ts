import styled from "styled-components";

export const StyledFooter = styled.footer<{
  $color?: string;
  $background?: string;
}>`
  ${({ theme }) => theme.mixins.flexCenter}
  gap: 2px;
  color: ${({ $color }) => $color};
  padding: 70px 0;
  background: ${({ $background }) => $background};
`;

export const FooterText = styled.p<{ $bg: string }>`
  font-size: 26px;
  font-weight: 500;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  margin-bottom: 6px;

  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: ${({ $bg }) => $bg};
    margin-bottom: 4px;
  }
`;
