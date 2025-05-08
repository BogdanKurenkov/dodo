import { FC, useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePublicJson } from "@/hooks/usePublicJson";
import { LottieWrapper } from "./styled";

gsap.registerPlugin(ScrollTrigger);

interface ILottieBanner {
  path: string;
  width?: string | number;
  height?: string | number;
  customAnimation?: boolean;
}

export const LottieBanner: FC<ILottieBanner> = ({
  path,
  width,
  height,
  customAnimation = false,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationData = usePublicJson(path);

  useEffect(() => {
    if (!lottieRef.current || !animationData || !wrapperRef.current) return;

    const anim = lottieRef.current;
    const totalFrames = anim.getDuration(true);

    if (customAnimation) {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top -=20%",
        end: "bottom top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          if (totalFrames !== undefined) {
            const frame = self.progress * totalFrames;
            anim.goToAndStop(frame, true);
          }
        },
      });
    } else {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          if (totalFrames !== undefined) {
            const frame = self.progress * totalFrames;
            anim.goToAndStop(frame, true);
          }
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [animationData, customAnimation]);

  return (
    <LottieWrapper ref={wrapperRef}>
      <Lottie
        animationData={animationData}
        lottieRef={lottieRef}
        autoplay={false}
        loop={false}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        style={{ width, height }}
      />
    </LottieWrapper>
  );
};
