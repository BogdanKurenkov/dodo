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

export const FooterText = styled.p<{ $bg: string; $locale: string }>`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: ${({ $bg }) => $bg};
    margin-bottom: ${({ $locale }) => ($locale === "kz" ? "4px" : "2px")};
  }

  @media (max-width: 500px) {
    &::before {
      margin-bottom: ${({ $locale }) => ($locale === "kz" ? "2px" : "1px")};
    }
  }
`;

export const FooterWrapper = styled.div``;

export const FooterTop = styled.div<{ $locale: string }>`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 26px;
  font-weight: 500;

  & span {
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    font-size: ${({ $locale }) => ($locale === "kz" ? "17.68px" : "19.78px")};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  margin-top: 30px;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterLink = styled(Link)<{ $bg: string }>`
  text-decoration: underline;
  font-size: 18px;
  transition: 0.5s ease;

  color: ${({ $bg }) => ($bg !== "#F4F4F1" ? "#979797" : "#676767")};

  @media (hover: hover) {
    &:hover span {
      color: ${({ theme, $bg }) =>
        $bg !== "#F4F4F1" ? theme.colors.black : theme.colors.white};
    }

    &:hover {
      text-decoration-color: ${({ theme, $bg }) =>
        $bg !== "#F4F4F1" ? theme.colors.black : theme.colors.white};
      color: ${({ theme, $bg }) =>
        $bg !== "#F4F4F1" ? theme.colors.black : theme.colors.white} !important;
    }
  }

  & br {
    display: none;
  }

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    & br {
      display: block !important;
    }
  }
`;

export const BgLogoWrapper = styled.div`
  height: 17px;
`;

// export const BgLogo = styled(Image)`
//   height: 17px;
// `;
