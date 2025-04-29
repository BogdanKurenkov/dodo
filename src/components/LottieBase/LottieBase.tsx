import { FC, useRef, useState, useEffect, useCallback } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";

import { LottieWrapper } from "./styled";

const allAnimations = new Set<{
    ref: LottieRefCurrentProps;
    reset: () => void;
}>();

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
    height,
}) => {
    const [isPlayingForward, setIsPlayingForward] = useState(false);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const animationData = usePublicJson(path);

    const resetAnimation = useCallback(() => {
        if (lottieRef.current) {
            playBackward();
            setIsPlayingForward(false);
        }
    }, []);

    const handleSetSpeed = () => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(speed);
        }
    };

    const playForward = () => {
        if (lottieRef.current) {
            allAnimations.forEach((anim) => {
                if (anim.ref !== lottieRef.current) {
                    anim.reset();
                }
            });

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
        if (!lottieRef.current) return;

        const animation = {
            ref: lottieRef.current,
            reset: resetAnimation,
        };

        allAnimations.add(animation);

        return () => {
            allAnimations.delete(animation);
        };
    }, [resetAnimation]);

    return (
        <LottieWrapper>
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
                    preserveAspectRatio: "xMidYMid slice",
                    progressiveLoad: true,
                    hideOnTransparent: true,
                }}
                style={{
                    width: width,
                    height: height,
                    cursor: onClickPlay ? "pointer" : "default",
                }}
            />
        </LottieWrapper>
    );
};