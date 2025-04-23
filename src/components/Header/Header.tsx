import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import { Burger } from "./Burger/Burger";
import { Container } from "@/components/Shared/Container/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

const Dodo = dynamic<{ fill?: string }>(
    () => import('@/assets/svg/logo_desktop.svg'),
    { ssr: false }
);

const DodoMobile = dynamic<{ fill?: string }>(
    () => import('@/assets/svg/logo_mobile.svg'),
    { ssr: false }
);
const DodoLabMobile = dynamic<{ fill?: string }>(
    () => import('@/assets/svg/dodo-lab_icon.svg'),
    { ssr: false }
);
const DodoLab = dynamic<{ fill?: string }>(
    () => import('@/assets/svg/dodo-lab_desktop.svg'),
    { ssr: false }
);
import { routes } from "@/constants/routes";

import { StyledHeader, StyledNav, HeaderIcons, Menu, MenuLink, LogoWrapper } from "./styled";
import { useTheme } from "styled-components";

export const Header = () => {
    const { t } = useTranslation('common');

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerStyle, setHeaderStyle] = useState({
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease',
    });

    const theme = useTheme();

    const handleBurgerToggle = (isOpen: boolean) => {
        setIsMenuOpen(isOpen);
        setTimeout(() => {
            setIsClosing((prev) => !prev)
        }, 500)
    };

    const handleAnchorClick = (anchorId: string) => {
        if (router.pathname !== '/') {
            router.push(`/#${anchorId}`).then(() => {
                const element = document.getElementById(anchorId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else {
            const element = document.getElementById(anchorId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    const device = useDeviceDetect();

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setHeaderStyle({
                        transform: 'translateY(-100%)',
                        transition: 'transform 0.3s ease',
                    });
                } else if (currentScrollY < lastScrollY) {
                    setHeaderStyle({
                        transform: 'translateY(0)',
                        transition: 'transform 0.3s ease',
                    });
                }

                setLastScrollY(currentScrollY);
            }
        };

        if (!isMenuOpen) {
            window.addEventListener('scroll', controlHeader);
        }

        return () => {
            window.removeEventListener('scroll', controlHeader);
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
                    <LogoWrapper href='/'>
                        {device === 'mobile' ? <DodoMobile /> : <Dodo />}
                    </LogoWrapper>
                    {device === 'mobile' ? <DodoLabMobile fill={theme.colors.white} /> : <DodoLab fill={theme.colors.white} />}
                    <Burger isOpen={isMenuOpen} onToggle={handleBurgerToggle} />
                </HeaderIcons>
                <Menu $isOpen={isMenuOpen}>
                    <StyledNav $isOpen={isMenuOpen}>
                        {Object.entries(routes).map(([key, translationKey]) => (
                            <MenuLink
                                key={key}
                                href={`#${key}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAnchorClick(key);
                                }}
                            >
                                {t(translationKey)}
                            </MenuLink>
                        ))}
                    </StyledNav>
                </Menu>
                <LanguageSwitcher isActive={isMenuOpen} />
            </Container>
        </StyledHeader>
    );
};