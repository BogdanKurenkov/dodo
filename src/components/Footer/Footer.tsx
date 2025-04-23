import { FC } from "react";
import { StyledFooter, FooterText } from "./styled";
import { FooterLogo } from "./FooterLogo/FooterLogo";
import { useTranslation } from "next-i18next";

interface IFooterProps {
    color?: string;
    background?: string
}

export const Footer: FC<IFooterProps> = ({ color = '#F4F4F1', background }) => {
    const { t } = useTranslation('common');

    return <StyledFooter id="contacts" $color={color} $background={background}>
        <FooterLogo fill={color} />
        <span>додо лаб</span>
        <FooterText $bg={color}>
            {t('footer.project')}
        </FooterText>
    </StyledFooter>
}
