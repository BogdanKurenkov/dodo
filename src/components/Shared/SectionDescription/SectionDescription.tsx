import { FC, ReactNode } from "react";

import { Text } from "./styled";

interface ISectionDescription {
    children: ReactNode;
    color?: string;
    maxWidth?: string;
}

export const SectionDescription: FC<ISectionDescription> = ({ children, color = "#111110", maxWidth }) => {
    return <Text $maxWidth={maxWidth} $color={color}>{children}</Text>
}