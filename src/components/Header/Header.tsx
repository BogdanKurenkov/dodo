import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useClient } from "@/hooks/useClient";

import { Container } from "@/components/Shared/Container/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Burger } from "./Burger/Burger";

const Dodo = dynamic<{ fill?: string }>(
  () => import("@/assets/svg/logo_desktop.svg"),
  { ssr: false },
);
const DodoMobile = dynamic<{ fill?: string }>(
  () => import("@/assets/svg/logo_mobile.svg"),
  { ssr: false },
);
const DodoLabMobile = dynamic<{ fill?: string, className?: string }>(
  () => import("@/assets/svg/dodo-lab_icon.svg"),
  { ssr: false },
);
const DodoLabTextMobile = dynamic<{ fill?: string, className?: string }>(
  () => import("@/assets/svg/dodo-lab_text.svg"),
  { ssr: false },
);
const DodoLab = dynamic<{ fill?: string }>(
  () => import("@/assets/svg/dodo-lab_desktop.svg"),
  { ssr: false },
);
import { routesLink, routesQr } from "@/constants/routes";

import {
  StyledHeader,
  StyledNav,
  HeaderIcons,
  Menu,
  MenuLink,
  LogoWrapper,
  DodoLabWrapper
} from "./styled";

interface IHeader {
  country?: string
}

export const Header: FC<IHeader> = ({ country }) => {
  const { t } = useTranslation("common");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({
    transform: "translateY(0)",
    transition: "transform 0.3s ease",
  });

  const router = useRouter();
  const theme = useTheme();
  const device = useDeviceDetect();
  const client = useClient();

  const { source } = router.query;

  const handleBurgerToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
    setTimeout(() => {
      setIsClosing((prev) => !prev);
    }, 500);
  };

  const handleAnchorClick = (anchorId: string, index: number) => {
    if (source === 'qr' && router.pathname === '/' && index === 0) {
      router.push("/auth?source=qr");
      setIsMenuOpen(false);
      return;
    }

    if (router.pathname === '/auth' && index === 0) {
      setIsMenuOpen(false);
      return;
    }

    if (router.pathname !== "/") {
      const targetPath = source === "qr" ? `/?source=qr#${anchorId}` : `/#${anchorId}`;
      router.push(targetPath).then(() => {
        const element = document?.getElementById(anchorId);
        element?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      document?.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHeaderStyle({
            transform: "translateY(-100%)",
            transition: "transform 0.3s ease",
          });
        } else if (currentScrollY < lastScrollY) {
          setHeaderStyle({
            transform: "translateY(0)",
            transition: "transform 0.3s ease",
          });
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (!isMenuOpen) {
      window.addEventListener("scroll", controlHeader);
    }

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY, isMenuOpen]);

  return (
    <StyledHeader
      $isClosing={isClosing}
      $isOpen={isMenuOpen}
      style={!isMenuOpen ? headerStyle : {}}
      role="banner"
      aria-label="header"
    >
      <Container>
        <HeaderIcons role="group" aria-label="Header icons and controls">
          <LogoWrapper
            href={source === "qr" ? "/?source=qr" : "/"}
            $isOpen={isMenuOpen}
            aria-label="Logo"
          >
            {device === "mobile" ? (
              <DodoMobile aria-hidden="true" />
            ) : (
              <Dodo aria-hidden="true" />
            )}
          </LogoWrapper>
          {device === "mobile" ? (
            <DodoLabWrapper $isOpen={isMenuOpen}>
              <DodoLabMobile
                fill={theme.colors.white}
                className="dodLab-icon"
                aria-hidden="true"
              />
              <DodoLabTextMobile
                fill={theme.colors.white}
                className="dodLab-text"
                aria-hidden="true"
              />
            </DodoLabWrapper>
          ) : (
            <DodoLab fill={theme.colors.white} aria-hidden="true" />
          )}
          <Burger
            isOpen={isMenuOpen}
            onToggle={handleBurgerToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          />
        </HeaderIcons>
        <Menu
          $isOpen={isMenuOpen}
          role="navigation"
          aria-label="Main navigation"
          id="main-navigation"
        >
          <StyledNav $isOpen={isMenuOpen} role="menu">
            {client &&
              Object.entries(source === "qr" ? routesQr : routesLink).map(
                ([key, translationKey], index) => (
                  <MenuLink
                    key={key}
                    href={`#${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchorClick(key, index);
                    }}
                    role="menuitem"
                    aria-label={t(translationKey)}
                  >
                    {t(translationKey)}
                  </MenuLink>
                ),
              )}
          </StyledNav>
        </Menu>
        {country === "kz" && (
          <LanguageSwitcher
            isActive={isMenuOpen}
            aria-label="Language switcher"
          />
        )}
      </Container>
    </StyledHeader>
  );
};