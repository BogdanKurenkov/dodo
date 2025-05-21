import { FC, useEffect, useRef, useCallback, useState } from 'react';

interface IVideoOpen {
    src: string;
    isPlaying?: boolean;
    onClick?: () => void;
    onReverseComplete?: () => void;
}

export const VideoOpen: FC<IVideoOpen> = ({
    src,
    isPlaying = false,
    onClick,
    onReverseComplete
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const rewindInterval = useRef<number | null>(null);
    const [isReady, setIsReady] = useState(false);

    const isAndroid = useCallback(() => {
        return /Android/i.test(navigator.userAgent);
    }, []);

    const cancelRewind = useCallback(() => {
        if (rewindInterval.current) {
            cancelAnimationFrame(rewindInterval.current);
            rewindInterval.current = null;
        }
    }, []);

    const playBackwards = useCallback(() => {
        const video = videoRef.current;
        if (!video || !isReady) return;

        video.pause();
        cancelRewind();

        const startTime = video.currentTime;
        const targetDuration = 1000;
        const startTimestamp = performance.now();

        const rewindFrame = (timestamp: number) => {
            const progress = Math.min(1, (timestamp - startTimestamp) / targetDuration);
            let newTime = startTime * (1 - progress);

            if (isAndroid()) {
                newTime = Math.round(newTime * 100) / 100;
                video.currentTime = Math.max(0, newTime);
                video.pause();
            } else {
                video.currentTime = Math.max(0, newTime);
            }

            if (progress < 1) {
                rewindInterval.current = requestAnimationFrame(rewindFrame);
            } else {
                video.currentTime = 0;
                onReverseComplete?.();
            }
        };

        rewindInterval.current = requestAnimationFrame(rewindFrame);
    }, [isReady, cancelRewind, isAndroid, onReverseComplete]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            cancelRewind();
            video.currentTime = 0;
            video.play().catch(e => console.error("Play error:", e));
        } else {
            playBackwards();
        }

        return () => {
            cancelRewind();
        };
    }, [isPlaying, playBackwards, cancelRewind]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedData = () => {
            if (isAndroid()) {
                video.currentTime = video.duration;
                video.pause();
            }
            setIsReady(true);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
        };
    }, [isAndroid]);

    const handleClick = () => {
        if (!isPlaying) {
            onClick?.();
        }
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <video
                ref={videoRef}
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                muted
                playsInline
                preload="auto"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            >
                <source src={src} type='video/mp4' />
            </video>
        </div>
    );
};