import { FC, ReactNode } from "react";

import { Text } from "./styled";

interface ISectionDescription {
    children: ReactNode;
    color?: string
}

export const SectionDescription: FC<ISectionDescription> = ({ children, color = "#111110" }) => {
    return <Text $color={color}>{children}</Text>
}