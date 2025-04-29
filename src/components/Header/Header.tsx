import { useEffect, useState } from "react";
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

export const Header = () => {
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
  const isAuth = true;

  const handleBurgerToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
    setTimeout(() => {
      setIsClosing((prev) => !prev);
    }, 500);
  };

  const handleAnchorClick = (anchorId: string) => {
    if (router.pathname !== "/") {
      if (router.pathname === '/auth' && !isAuth) {
        return
      } else {
        router.push('/?source=qr')
      }
      router.push(`/#${anchorId}`).then(() => {
        const element = document?.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      const element = document?.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
    >
      <Container>
        <HeaderIcons>
          <LogoWrapper href="/" $isOpen={isMenuOpen}>
            {device === "mobile" ? <DodoMobile /> : <Dodo />}
          </LogoWrapper>
          {device === "mobile" ? (
            <DodoLabWrapper $isOpen={isMenuOpen}>
              <DodoLabMobile fill={theme.colors.white} className="dodLab-icon" />
              <DodoLabTextMobile fill={theme.colors.white} className="dodLab-text" />
            </DodoLabWrapper>
          ) : (
            <DodoLab fill={theme.colors.white} />
          )}
          <Burger isOpen={isMenuOpen} onToggle={handleBurgerToggle} />
        </HeaderIcons>
        <Menu $isOpen={isMenuOpen}>
          <StyledNav $isOpen={isMenuOpen}>
            {client &&
              Object.entries(source === "qr" ? routesQr : routesLink).map(
                ([key, translationKey], index) => (
                  <MenuLink
                    key={key}
                    href={`#${key}`}
                    aria-disabled={!isAuth && source === "qr" && index !== 0}
                    onClick={(e) => {
                      if (!isAuth && source === "qr" && index !== 0) {
                        e.preventDefault();
                        return;
                      }
                      e.preventDefault();
                      handleAnchorClick(key);
                    }}
                    style={
                      !isAuth && source === "qr" && index !== 0
                        ? {
                          pointerEvents: "none",
                          opacity: 0.5,
                          cursor: "not-allowed",
                        }
                        : {}
                    }
                  >
                    {t(translationKey)}
                  </MenuLink>
                ),
              )}
          </StyledNav>
        </Menu>
        <LanguageSwitcher isActive={isMenuOpen} />
      </Container>
    </StyledHeader>
  );
};
