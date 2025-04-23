import { FC, ReactNode, CSSProperties } from "react";
import { StyledContainer } from "./styled";

interface ContainerProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const Container: FC<ContainerProps> = ({ children, style }) => {
    return <StyledContainer style={style}>{children}</StyledContainer>;
};