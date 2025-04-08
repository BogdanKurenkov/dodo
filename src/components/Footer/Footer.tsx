import { FC } from "react";
import { StyledFooter, FooterText } from "./styled";
import { FooterLogo } from "./FooterLogo/FooterLogo";

interface IFooterProps {
    color?: string
}

export const Footer: FC<IFooterProps> = ({ color = '#F4F4F1' }) => {
    return <StyledFooter $color={color}>
        <FooterLogo fill={color} />
        <FooterText>dsgsdg</FooterText>
    </StyledFooter>
}