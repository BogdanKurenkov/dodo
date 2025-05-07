import { FC } from "react";
import { useTranslation } from "next-i18next";

import { FooterLogo } from "./FooterLogo/FooterLogo";
import { Container } from "../Shared/Container/Container";

import {
    StyledFooter,
    FooterText,
    FooterWrapper,
    FooterTop,
    FooterBottom,
    FooterLink
} from "./styled";

interface IFooterProps {
    color?: string;
    background?: string
}

export const Footer: FC<IFooterProps> = ({ color = '#F4F4F1', background }) => {
    const { t } = useTranslation('common');

    return <StyledFooter id="contacts" $color={color} $background={background}>
        <Container>
            <FooterWrapper>
                <FooterTop>
                    <FooterLogo fill={color} />
                    <span>додо лаб</span>
                    <FooterText $bg={color}>
                        {t('footer.project')}
                    </FooterText>
                </FooterTop>
                <FooterBottom>
                    <FooterLink href="#">{t('footer.policy1')}</FooterLink>
                    <FooterLink href="#">{t('footer.policy2')}</FooterLink>
                </FooterBottom>
            </FooterWrapper>
        </Container>
    </StyledFooter>
}
