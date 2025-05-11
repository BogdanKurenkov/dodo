import React from 'react';
import styled from 'styled-components';

interface ITextWithLineBreaks {
    text: string;
    style?: React.CSSProperties;
    noMobileBr?: boolean;
    noDesktopBr?: boolean;
}

const StyledBr = styled.br<{ noMobile?: boolean; noDesktop?: boolean }>`
    ${({ noMobile }) => noMobile && `
        @media (max-width: 500px) {
            display: none;
        }
    `}
    
    ${({ noDesktop }) => noDesktop && `
        @media (min-width: 501px) {
            display: none;
        }
    `}
`;

export const TextWithLineBreaks: React.FC<ITextWithLineBreaks> = ({
    text,
    style,
    noMobileBr,
    noDesktopBr
}) => {
    return (
        <span style={{ ...style, display: 'block' }}>
            {text?.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && (
                        <StyledBr
                            noMobile={noMobileBr}
                            noDesktop={noDesktopBr}
                        />
                    )}
                </React.Fragment>
            ))}
        </span>
    );
};