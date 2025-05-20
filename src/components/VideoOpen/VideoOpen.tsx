import { FC, useEffect, useRef } from 'react';

import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useClient } from '@/hooks/useClient';

interface IVideoOpen {
    src: string;
    isPlaying?: boolean;
    onClick?: () => void;
}

export const VideoOpen: FC<IVideoOpen> = ({
    src,
    isPlaying = false,
    onClick,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const device = useDeviceDetect();
    const client = useClient();
    const rewindInterval = useRef<NodeJS.Timeout | null>(null);

    const defaultSize = device === 'desktop' ? 350 : 230;

    const playBackwards = () => {
        if (!videoRef.current) return;

        const video = videoRef.current;
        video.pause();

        if (rewindInterval.current) {
            clearInterval(rewindInterval.current);
        }

        const fps = 30;
        rewindInterval.current = setInterval(() => {
            if (video.currentTime <= 0) {
                if (rewindInterval.current) {
                    clearInterval(rewindInterval.current);
                }
                video.currentTime = 0;
            } else {
                video.currentTime -= 0.033;
            }
        }, 1000 / fps);
    };

    useEffect(() => {
        if (!videoRef.current) return;

        const video = videoRef.current;

        if (isPlaying) {
            if (rewindInterval.current) {
                clearInterval(rewindInterval.current);
            }
            video.currentTime = 0;
            video.play().catch(e => console.error("Play error:", e));
        } else {
            playBackwards();
        }

        return () => {
            if (rewindInterval.current) {
                clearInterval(rewindInterval.current);
            }
        };
    }, [isPlaying]);

    const handleClick = () => {
        if (!isPlaying) {
            onClick?.();
        }
    };

    return (
        <div
            style={{
                width: defaultSize,
                height: defaultSize,
                position: 'relative',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            {client && (
                <video
                    ref={videoRef}
                    width={defaultSize}
                    height={defaultSize}
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                >
                    <source src={src} type='video/mp4' />
                </video>
            )}
        </div>
    );
};