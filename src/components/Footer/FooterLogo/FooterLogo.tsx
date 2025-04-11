import { FC } from "react";

import FLogo from "@/assets/svg/dodo-lab.svg"

interface IFooterLogo {
    fill?: string
}

export const FooterLogo: FC<IFooterLogo> = ({ fill = '#111110' }) => {
    return (
        <FLogo fill={fill} />
    );
}; 