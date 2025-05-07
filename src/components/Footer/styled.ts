import Link from "next/link";
import styled from "styled-components";

export const StyledFooter = styled.footer<{
  $color?: string;
  $background?: string;
}>`
  padding: 65px 0;
  background: ${({ $background }) => $background};
  color: ${({ $color }) => $color};

  @media (max-width: 500px) {
    padding: 40px 0;
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

export const FooterWrapper = styled.div``;

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
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

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  margin-top: 30px;
`;

export const FooterLink = styled(Link)`
  text-decoration: underline;
  color: #979797;

  &::first-letter {
    text-transform: uppercase;
  }
`;
