import { FC, ReactNode } from "react";

import { StyledBgWrapper } from "./styled";

interface IBgWrapper {
    children: ReactNode;
    isQr: boolean
}

export const BgWrapper: FC<IBgWrapper> = ({ children, isQr }) => {
    return <StyledBgWrapper $isQr={isQr}>{children}</StyledBgWrapper>
}