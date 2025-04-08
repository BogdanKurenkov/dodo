import { FC, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";

interface ILottieBase {
    path: string;
    speed?: number;
    autoplay?: boolean;
    loop?: boolean
}

export const LottieBase: FC<ILottieBase> = ({
    path,
    speed = 0.5,
    autoplay = true,
    loop = true
}) => {
    const animationData = usePublicJson(path);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const handleSetSpeed = () => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(speed);
        }
    };

    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            lottieRef={lottieRef}
            onDOMLoaded={handleSetSpeed}
        />
    );
};