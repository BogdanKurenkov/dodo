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
    let lastScrollY = window.scrollY;

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

    useEffect(() => {
        if (!wrapperRef.current || !lottieRef.current) return;

        let isVisible = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.5 }
        );

        observer.observe(wrapperRef.current);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isVisible) {
                if (currentScrollY > lastScrollY) {
                    playForward();
                } else if (currentScrollY < lastScrollY) {
                    playBackward();
                }
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <LottieWrapper ref={wrapperRef}>
            <Lottie
                animationData={animationData}
                lottieRef={lottieRef}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                    progressiveLoad: true,
                    hideOnTransparent: true,
                }}
                style={{
                    width: width,
                    height: height,
                }}
            />
        </LottieWrapper>
    );
};
