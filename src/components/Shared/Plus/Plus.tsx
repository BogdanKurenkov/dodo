import { HorizontalLine, IconContainer, VerticalLine } from './styled';

interface PlusProps {
    isCross: boolean;
}

export const Plus = ({ isCross }: PlusProps) => {
    return (
        <IconContainer>
            <HorizontalLine $isCross={isCross} />
            <VerticalLine $isCross={isCross} />
        </IconContainer>
    );
};