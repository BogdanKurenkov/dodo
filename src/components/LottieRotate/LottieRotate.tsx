import { FC, useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";

import { LottieWrapper } from "../LottieBase/styled";

interface ILottieRotate {
    path: string;
    speed?: number;
    width?: string | number;
    height?: string | number;
    isPlaying?: boolean;
    isAnimate?: boolean;
    direction?: "up" | "down";
}

export const LottieRotate: FC<ILottieRotate> = ({
    path,
    height,
    width,
    isPlaying = false,
    isAnimate = false,
    direction
}) => {
    const animationData = usePublicJson(path);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (isPlaying) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop();
        }
    }, [isPlaying]);

    return (
        <LottieWrapper $direction={direction} $isAnimate={isAnimate}>
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                autoplay={false}
                loop={false}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                    progressiveLoad: true,
                    hideOnTransparent: true,
                }}
                initialSegment={isPlaying ? undefined : [0, 0]}
                style={{
                    width: width,
                    height: height,
                }}
            />
        </LottieWrapper>
    );
};