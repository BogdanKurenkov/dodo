import { useCallback, useState } from 'react';
import { BurgerButton, BurgerLine } from './styled';

interface IBurgerProps {
    onToggle?: (isOpen: boolean) => void;
    ariaLabel?: string;
}

export const Burger = ({ onToggle, ariaLabel = 'Menu' }: IBurgerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = useCallback(() => {
        const newState = !isOpen;
        setIsOpen(newState);
        onToggle?.(newState);
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