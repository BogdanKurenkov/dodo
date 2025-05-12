import { FC } from "react";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";

import LogoDark from "@/assets/svg/footer-logo-dark.svg";
import LogoDarkKz from "@/assets/svg/footer-logo-dark-kz.svg";
import LogoLight from "@/assets/svg/footer-logo-light.svg";
import LogoLightKz from "@/assets/svg/footer-logo-light-kz.svg";
import LogoDarkMob from "@/assets/svg/footer-logo-dark-mob.svg";
import LogoDarkKzMob from "@/assets/svg/footer-logo-dark-kz-mob.svg";
import LogoLightMob from "@/assets/svg/footer-logo-light-mob.svg";
import LogoLightKzMob from "@/assets/svg/footer-logo-light-kz-mob.svg";

interface IFooterLogo {
  isLightBackground: boolean;
  locale: string;
  alt?: string;
}

export const FooterLogo: FC<IFooterLogo> = ({
  isLightBackground,
  locale,
  alt,
}) => {
  const device = useDeviceDetect();

  const logoPair = isLightBackground
    ? locale === "kz"
      ? { desktop: LogoLightKz, mobile: LogoLightKzMob }
      : { desktop: LogoLight, mobile: LogoLightMob }
    : locale === "kz"
    ? { desktop: LogoDarkKz, mobile: LogoDarkKzMob }
    : { desktop: LogoDark, mobile: LogoDarkMob };

  const LogoComponent =
    device === "mobile" ? logoPair.mobile : logoPair.desktop;

  return <LogoComponent alt={alt} />;
};
