import { FC } from "react";
import { useTranslation } from "next-i18next";

import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { FooterLogo } from "./FooterLogo/FooterLogo";

import BgLogoWhite from "@/assets/svg/bglogo_white.svg";
import BgLogoDark from "@/assets/svg/bglogo_dark.svg";

import {
  StyledFooter,
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterLink,
  BgLogoWrapper,
} from "./styled";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

type Locale = "ru" | "kz" | "by";

const docs: Record<Locale, { policy1: string; policy2: string }> = {
  ru: {
    policy1:
      "https://docs.google.com/document/d/1aGmDWUeG16VnljDBecIwuxSmcsN-c0WvTgajh-P_IJ0/edit?tab=t.0",
    policy2:
      "https://docs.google.com/document/d/1iezmDrZCGXu2poWZ4Euaj3oeVDaMQp-7/edit?tab=t.0",
  },
  kz: {
    policy1:
      "https://docs.google.com/document/d/1ksPFKflu7Az5-xN-auA-ukdzEl01dfpVS-msJKB2FgI/edit?tab=t.0",
    policy2:
      "https://docs.google.com/document/d/1iu-1wSaWK768eFs-DyNknjOybvYLdrGe/edit?tab=t.0",
  },
  by: {
    policy1:
      "https://docs.google.com/document/d/1aGmDWUeG16VnljDBecIwuxSmcsN-c0WvTgajh-P_IJ0/edit?tab=t.0",
    policy2:
      "https://docs.google.com/document/d/1iezmDrZCGXu2poWZ4Euaj3oeVDaMQp-7/edit?tab=t.0",
  },
};

const DEFAULT_LOCALE: Locale = "ru";

interface IFooterProps {
  color?: string;
  background?: string;
  style?: React.CSSProperties;
  as?: string;
}

export const Footer: FC<IFooterProps> = ({
  color = "#F4F4F1",
  background,
  style,
  as,
}) => {
  const { t } = useTranslation("common");
  const { currentLocale } = useLanguageSwitcher();

  const isLightBackground = color === "#F4F4F1";
  const locale: Locale =
    currentLocale && ["ru", "kz", "by"].includes(currentLocale)
      ? (currentLocale as Locale)
      : DEFAULT_LOCALE;

  return (
    <StyledFooter
      id="contacts"
      $color={color}
      $background={background}
      aria-labelledby="footer-heading"
      style={style}
      as={as}
    >
      <Container>
        <FooterWrapper>
          <FooterTop $locale={locale}>
            <FooterLogo
              isLightBackground={isLightBackground}
              locale={locale}
              alt="Dodo Lab brand logo"
            />
          </FooterTop>
          <FooterBottom as="nav" aria-label="Legal links and logo">
            <FooterLink
              target="_blank"
              $bg={color}
              href={docs[locale].policy1}
              aria-label={t("footer.policy1")}
            >
              {t("footer.policy1")}
            </FooterLink>
            <FooterLink
              target="_blank"
              $bg={color}
              href={docs[locale].policy2}
              aria-label={t("footer.policy2")}
            >
              <TextWithLineBreaks text={t("footer.policy2")} />
            </FooterLink>
            <BgLogoWrapper>
              {isLightBackground ? (
                <BgLogoDark
                  width={210}
                  height={17}
                  alt="Dodo Pizza brand logo"
                />
              ) : (
                <BgLogoWhite
                  width={210}
                  height={17}
                  alt="Dodo Pizza brand logo"
                />
              )}
            </BgLogoWrapper>
          </FooterBottom>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};
