import { FC } from "react";

import FLogo from "@/assets/svg/dodo-lab_icon.svg"
import FLogoMobile from "@/assets/svg/dodo-lab_icon-mobile.svg"
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

interface IFooterLogo {
    fill?: string
}

export const FooterLogo: FC<IFooterLogo> = ({ fill = '#111110' }) => {

    const device = useDeviceDetect()

    return (
        device === 'mobile' ? <FLogoMobile fill={fill} /> : <FLogo fill={fill} />
    );
}; 