import styled from "styled-components";

export const StyledFooter = styled.footer<{
  $color?: string;
  $background?: string;
}>`
  ${({ theme }) => theme.mixins.flexCenter}
  gap: 2px;
  color: ${({ $color }) => $color};
  padding: 65px 0;
  background: ${({ $background }) => $background};
  font-size: 26px;
  font-weight: 500;

  & span {
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    padding: 40px 0;
    font-size: 17px;
  }
`;

export const FooterText = styled.p<{ $bg: string }>`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: ${({ $bg }) => $bg};
    margin-bottom: 4px;
  }
`;
