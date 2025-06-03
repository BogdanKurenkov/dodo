import { FC, useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";
import { useClient } from "@/hooks/useClient";

import { LottieWrapper } from "./styled";

interface ILottieSauceZoom {
  path: string;
  speed?: number;
  isPlaying?: boolean;
  onLoad?: () => void;
}

export const LottieSauceZoom: FC<ILottieSauceZoom> = ({
  path,
  isPlaying = false,
  speed = 1,
  onLoad,
}) => {
  const animationData = usePublicJson(path);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const client = useClient();

  useEffect(() => {
    if (animationData && onLoad) {
      onLoad();
    }
  }, [animationData, onLoad]);

  useEffect(() => {
    if (!lottieRef.current || !animationData) return;

    lottieRef.current.setSpeed(speed);

    if (isPlaying) {
      lottieRef.current.setDirection(1);
      lottieRef.current.goToAndPlay(0);
    } else {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
    }
  }, [isPlaying, animationData, speed]);

  return (
    <>
      {client && animationData && (
        <LottieWrapper>
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
          />
        </LottieWrapper>
      )}
    </>
  );
};
