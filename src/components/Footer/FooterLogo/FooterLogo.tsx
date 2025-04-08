import FLogo from "@/assets/svg/footer-logo_black.svg";
import { FC } from "react";

interface IFooterLogo {
    fill?: string
}

export const FooterLogo: FC<IFooterLogo> = ({ fill = '#111110' }) => {
    return (
        <FLogo fill={fill} />
    );
};