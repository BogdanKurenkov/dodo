import { useCallback } from 'react';

import { BurgerButton, BurgerLine } from './styled';

interface IBurgerProps {
    isOpen: boolean;
    onToggle?: (isOpen: boolean) => void;
    ariaLabel?: string;
}

export const Burger = ({
    isOpen,
    onToggle,
    ariaLabel = 'Menu'
}: IBurgerProps) => {

    const handleClick = useCallback(() => {
        onToggle?.(!isOpen);
    }, [isOpen, onToggle]);

    return (
        <BurgerButton
            $isOpen={isOpen}
            onClick={handleClick}
            aria-label={ariaLabel}
            aria-expanded={isOpen}
        >
            {[...Array(3)].map((_, index) => (
                <BurgerLine key={index} $isOpen={isOpen} />
            ))}
        </BurgerButton>
    );
};