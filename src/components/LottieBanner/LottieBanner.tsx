import { FC, useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { usePublicJson } from "@/hooks/usePublicJson";
import { LottieWrapper } from "./styled";

interface ILottieBanner {
  path: string;
  width?: string | number;
  height?: string | number;
}

export const LottieBanner: FC<ILottieBanner> = ({ path, width, height }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationData = usePublicJson(path);
  const prevScrollY = useRef<number>(window.scrollY);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isVisibleRef = useRef<boolean>(false);

  const playForward = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(1);
      lottieRef.current.play();
    }
  };

  const playBackward = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
    }
  };

  const pause = () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          pause();
        }
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(wrapper);

    return () => {
      observer.unobserve(wrapper);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisibleRef.current || !lottieRef.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        playForward();
      } else if (currentScrollY < prevScrollY.current) {
        playBackward();
      }

      prevScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        pause();
      }, 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <LottieWrapper ref={wrapperRef}>
      <Lottie
        animationData={animationData}
        lottieRef={lottieRef}
        autoplay={false}
        loop={false}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
          hideOnTransparent: true,
        }}
        style={{ width, height }}
      />
    </LottieWrapper>
  );
};
