import { FC, useRef, useState, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";

import { LottieWrapper } from "./styled";

interface ILottieBase {
    path: string;
    speed?: number;
    autoplay?: boolean;
    loop?: boolean;
    onClickPlay?: boolean;
    hoverPlay?: boolean;
    width?: string | number;
    height?: string | number;
}

export const LottieBase: FC<ILottieBase> = ({
    path,
    speed = 1,
    autoplay = false,
    loop = false,
    onClickPlay = true,
    hoverPlay = false,
    width,
    height
}) => {
    const [isPlayingForward, setIsPlayingForward] = useState(false);

    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const animationData = usePublicJson(path);

    const handleSetSpeed = () => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(speed);
        }
    };

    const playForward = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(1);
            lottieRef.current.play();
            setIsPlayingForward(true);
        }
    };

    const playBackward = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(-1);
            lottieRef.current.play();
            setIsPlayingForward(false);
        }
    };

    const toggleAnimationDirection = () => {
        if (isPlayingForward) {
            playBackward();
        } else {
            playForward();
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node) &&
            isPlayingForward
        ) {
            playBackward();
        }
    };

    const handleMouseEnter = () => {
        if (hoverPlay && lottieRef.current) {
            playForward();
        }
    };

    const handleMouseLeave = () => {
        if (hoverPlay && lottieRef.current) {
            playBackward();
        }
    };

    useEffect(() => {
        if (onClickPlay) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPlayingForward, onClickPlay]);

    return (
        <LottieWrapper ref={containerRef}>
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                lottieRef={lottieRef}
                onDOMLoaded={handleSetSpeed}
                onClick={onClickPlay ? toggleAnimationDirection : undefined}
                onMouseEnter={hoverPlay ? handleMouseEnter : undefined}
                onMouseLeave={hoverPlay ? handleMouseLeave : undefined}
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                }}
                style={{
                    width: width,
                    height: height,
                    cursor: onClickPlay ? 'pointer' : 'default',
                }}
            />
        </LottieWrapper>
    );
};