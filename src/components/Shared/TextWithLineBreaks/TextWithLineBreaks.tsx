import React from 'react';

interface ITextWithLineBreaks {
    text: string;
    style?: React.CSSProperties;
}

export const TextWithLineBreaks: React.FC<ITextWithLineBreaks> = ({ text, style }) => {
    return (
        <span style={{ ...style, display: 'block' }}>
            {text?.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </React.Fragment>
            ))}
        </span>
    );
};