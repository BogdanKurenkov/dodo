import { FC, useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useClient } from "@/hooks/useClient";

import { LottieWrapper } from "../LottieBase/styled";

interface ILottieRotate {
    path: string;
    speed?: number;
    width?: string | number;
    height?: string | number;
    isPlaying?: boolean;
    isAnimate?: boolean;
    direction?: "up" | "down";
    onLoad?: () => void;
}

export const LottieRotate: FC<ILottieRotate> = ({
    path,
    height,
    width,
    isPlaying = false,
    isAnimate = false,
    direction,
    onLoad
}) => {
    const animationData = usePublicJson(path);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const device = useDeviceDetect();
    const client = useClient();

    useEffect(() => {
        if (animationData && onLoad) {
            onLoad();
        }
    }, [animationData, onLoad]);

    useEffect(() => {
        if (isPlaying) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop();
        }
    }, [isPlaying]);

    return (
        <>
            {client && (
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
                            width: width ? width : device === "desktop" ? 350 : 230,
                            height: height ? height : device === "desktop" ? 350 : 230,
                        }}
                    />
                </LottieWrapper>
            )}
        </>
    );
};