import { FC, ReactNode } from "react"

import { StyledTitle } from "./styled"


interface ITitle {
    children: ReactNode;
    isWhite: boolean;
}

export const SectionTitle: FC<ITitle> = ({ children, isWhite }) => {
    return <StyledTitle $isWhite={isWhite}>{children}</StyledTitle>
}