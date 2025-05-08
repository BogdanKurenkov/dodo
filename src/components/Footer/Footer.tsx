import { FC } from "react";
import { useTranslation } from "next-i18next";

import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { FooterLogo } from "./FooterLogo/FooterLogo";

import BgLogoWhite from "@/assets/images/bglogo_white.png";
import BgLogoDark from "@/assets/images/bglogo_dark.png";

import {
    StyledFooter,
    FooterText,
    FooterWrapper,
    FooterTop,
    FooterBottom,
    FooterLink,
    BgLogo
} from "./styled";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

interface IFooterProps {
    color?: string;
    background?: string
}

export const Footer: FC<IFooterProps> = ({ color = '#F4F4F1', background }) => {
    const { t } = useTranslation('common');
    const { currentLocale } = useLanguageSwitcher();

    return <StyledFooter id="contacts" $color={color} $background={background}>
        <Container>
            <FooterWrapper>
                <FooterTop $locale={currentLocale!}>
                    <FooterLogo fill={color} />
                    <span>додо лаб</span>
                    <FooterText $bg={color} $locale={currentLocale!}>
                        {t('footer.project')}
                    </FooterText>
                </FooterTop>
                <FooterBottom>
                    <FooterLink
                        style={{ color: color !== "#F4F4F1" ? "#979797" : "#676767" }}
                        href="#"
                    >
                        {t('footer.policy1')}
                    </FooterLink>
                    <FooterLink
                        href="#"
                        style={{ color: color !== "#F4F4F1" ? "#979797" : "#676767" }}
                    >
                        <TextWithLineBreaks text={t('footer.policy2')} />
                    </FooterLink>
                    <BgLogo alt="dodo pizza" src={color === "#F4F4F1" ? BgLogoDark : BgLogoWhite} />
                </FooterBottom>
            </FooterWrapper>
        </Container>
    </StyledFooter>
}
