import { useTranslation } from "next-i18next";

import { Burger } from "./Burger/Burger";
import Dodo from '@/assets/svg/logo_desktop.svg'
import { StyledHeader } from "./styled";
import { Container } from "../Shared/Container/Container";


export const Header = () => {
    const { t } = useTranslation('common');

    return <Container>
        <StyledHeader>
            <Dodo />
            <Burger />
        </StyledHeader>
    </Container>
}