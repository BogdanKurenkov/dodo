import { FC, ReactNode } from "react";

import { StyledContainer } from "./styled";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>
}