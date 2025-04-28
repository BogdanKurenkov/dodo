import { FC } from "react";
import { LottieWrapper } from "../LottieBase/styled";
import Lottie from "lottie-react";
import { usePublicJson } from "@/hooks/usePublicJson";

interface ILottieRotate {
    path: string;
    speed?: number;
    width?: string | number;
    height?: string | number;
}

export const LottieRotate: FC<ILottieRotate> = ({ path, height, speed, width }) => {
    const animationData = usePublicJson(path);

    return <LottieWrapper>
        <Lottie
            animationData={animationData}
            style={{
                width: width,
                height: height,
            }}
        />
    </LottieWrapper>
}




