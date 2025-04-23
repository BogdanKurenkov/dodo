import { FC, ReactNode } from "react";

import { StyledPageWrapper } from "./styled";

interface IPageWrapper {
    children: ReactNode;
}

export const PageWrapper: FC<IPageWrapper> = ({ children }) => {
    return <StyledPageWrapper>
        {children}
    </StyledPageWrapper>
}