import { FC, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import styled, { keyframes } from "styled-components";

import { usePublicJson } from "@/hooks/usePublicJson";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useClient } from "@/hooks/useClient";

import { LottieWrapper } from "../LottieBase/styled";

interface ILottieRotate {
    path: string;
    placeholderImage: StaticImageData;
    speed?: number;
    width?: string | number;
    height?: string | number;
    isPlaying?: boolean;
    isAnimate?: boolean;
    direction?: "up" | "down";
    onLoad?: () => void;
    onLoaded?: (loaded: boolean) => void;
}

export const LottieRotate: FC<ILottieRotate> = ({
    path,
    placeholderImage,
    height,
    width,
    isPlaying = false,
    isAnimate = false,
    direction,
    onLoad,
    onLoaded
}) => {
    const animationData = usePublicJson(path);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const device = useDeviceDetect();
    const client = useClient();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (animationData && onLoad) {
            onLoad();
        }
    }, [animationData, onLoad]);

    useEffect(() => {
        if (isLoaded && onLoaded) {
            onLoaded(true);
        }
    }, [isLoaded, onLoaded]);

    useEffect(() => {
        if (isPlaying) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop();
        }
    }, [isPlaying]);

    const defaultWidth = device === "desktop" ? 350 : 230;
    const defaultHeight = device === "desktop" ? 350 : 230;
    const containerWidth = width || defaultWidth;
    const containerHeight = height || defaultHeight;

    return (
        <>
            {client && (
                <LottieWrapper $direction={direction} $isAnimate={isAnimate}>
                    <ImageContainer
                        $width={containerWidth}
                        $height={containerHeight}
                        $direction={direction}
                    >
                        {!isLoaded && (
                            <>
                                <Image
                                    src={placeholderImage}
                                    alt="sauce"
                                    className="placeholder-image"
                                    fill
                                    priority
                                />
                                <LoaderOverlay>
                                    <Spinner />
                                </LoaderOverlay>
                            </>
                        )}
                    </ImageContainer>

                    <Lottie
                        lottieRef={lottieRef}
                        animationData={animationData}
                        autoplay={false}
                        loop={false}
                        onLoadedImages={() => {
                            setIsLoaded(true);
                        }}
                        rendererSettings={{
                            preserveAspectRatio: "xMidYMid slice",
                            progressiveLoad: true,
                            hideOnTransparent: true,
                        }}
                        initialSegment={isPlaying ? undefined : [0, 0]}
                        style={{
                            width: containerWidth,
                            height: containerHeight,
                            visibility: isLoaded ? "visible" : "hidden",
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    />
                </LottieWrapper>
            )}
        </>
    );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #000;
  animation: ${spin} 1s ease-in-out infinite;
`;

const ImageContainer = styled.div<{
    $width: string | number,
    $height: string | number,
    $direction?: "up" | "down",
}>`
  position: relative;
  width: ${props => typeof props.$width === 'number' ? `${props.$width}px` : props.$width};
  height: ${props => typeof props.$height === 'number' ? `${props.$height}px` : props.$height};
  transform: ${props => props.$direction === 'up' ? 'rotate(180deg)' : 'none'};
  
  .placeholder-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;