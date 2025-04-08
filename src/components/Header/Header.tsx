import { useTranslation } from "next-i18next";

import { Burger } from "./Burger/Burger";
import Dodo from '@/assets/svg/logo_desktop.svg'
import { StyledHeader } from "./styled";


export const Header = () => {
    const { t } = useTranslation('common');

    return <StyledHeader>
        <Dodo />
        <Burger />
    </StyledHeader>
}