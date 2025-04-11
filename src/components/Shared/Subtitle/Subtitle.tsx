import { FC, ReactNode } from "react"

import { StyledSubtitle } from "./styled"

interface ISubtitle {
    children: ReactNode
}

export const Subtitle: FC<ISubtitle> = ({ children }) => {
    return <StyledSubtitle>{children}</StyledSubtitle>
}