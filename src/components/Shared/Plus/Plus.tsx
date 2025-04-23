import { HorizontalLine, IconContainer, VerticalLine } from "./styled";

interface PlusProps {
  isCross: boolean;
  className?: string;
}

export const Plus = ({ isCross, className }: PlusProps) => {
  return (
    <IconContainer className={className}>
      <HorizontalLine $isCross={isCross} />
      <VerticalLine $isCross={isCross} />
    </IconContainer>
  );
};
