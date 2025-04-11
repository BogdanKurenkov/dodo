import { useTranslation } from "next-i18next";
import { Burger } from "./Burger/Burger";
import Dodo from '@/assets/svg/logo_desktop.svg'
import DodoLab from '@/assets/svg/dodo-lab_desktop.svg'
import { StyledHeader, StyledNav, HeaderIcons, Menu, MenuLink, LogoWrapper } from "./styled";
import { Container } from "../Shared/Container/Container";
import { routes } from "@/constants/routes";
import { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";


export const Header = () => {
    const { t } = useTranslation('common');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerToggle = (isOpen: boolean) => {
        setIsMenuOpen(isOpen);
    };

    return (
        <Container>
            <StyledHeader $isOpen={isMenuOpen}>
                <HeaderIcons>
                    <LogoWrapper href='/'>
                        <Dodo />
                    </LogoWrapper>
                    <DodoLab fill="#F4F4F1" />
                    <Burger isOpen={isMenuOpen} onToggle={handleBurgerToggle} />
                </HeaderIcons>
                <Menu $isOpen={isMenuOpen}>
                    <StyledNav $isOpen={isMenuOpen}>
                        {Object.entries(routes).map(([key, translationKey]) => (
                            <MenuLink
                                key={key}
                                href={`#${key}`}
                                onClick={() => handleBurgerToggle(false)}
                            >
                                {t(translationKey)}
                            </MenuLink>
                        ))}
                    </StyledNav>
                </Menu>
                <LanguageSwitcher isActive={isMenuOpen} />
            </StyledHeader>
        </Container>
    );
};