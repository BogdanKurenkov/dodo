import { FC } from 'react';

import { ButtonProps } from './types';

import { StyledButton } from './styled';

export const Button: FC<ButtonProps> = ({
    children,
    $variant = 'primary',
    $backgroundColor,
    $fullWidth = false,
    disabled = false,
    type = 'button',
    ...props
}) => (
    <StyledButton
        type={type}
        disabled={disabled}
        $variant={$variant}
        $backgroundColor={$backgroundColor}
        $fullWidth={$fullWidth}
        {...props}
    >
        {children}
    </StyledButton>
);