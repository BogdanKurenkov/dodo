import { FC, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styled, { keyframes, css } from 'styled-components';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useClient } from '@/hooks/useClient';


interface IVideoRotate {
  src: string;
  placeholderImage: StaticImageData;
  isPlaying?: boolean;
  isAnimate?: boolean;
  direction?: 'up' | 'down';
  onLoaded?: () => void;
  playbackRate?: number;
}

export const VideoRotate: FC<IVideoRotate> = ({
  src,
  placeholderImage,
  isPlaying = false,
  isAnimate = false,
  direction,
  onLoaded,
  playbackRate
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const device = useDeviceDetect();
  const client = useClient();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(e => console.error("Video play failed:", e));
    } else {
      video.pause();
    }

    if (typeof playbackRate === 'number') {
      video.playbackRate = playbackRate;
    }
  }, [isPlaying, playbackRate]);

  useEffect(() => {
    if (isLoaded && onLoaded) {
      onLoaded();
    }
  }, [isLoaded, onLoaded]);

  const defaultSize = device === 'desktop' ? 350 : 230;

  return (
    <>
      {client && (
        <VideoWrapper $direction={direction} $isAnimate={isAnimate}>
          <ImageContainer $size={defaultSize} $direction={direction}>
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

          <video
            ref={videoRef}
            width={defaultSize}
            height={defaultSize}
            preload="auto"
            muted
            playsInline
            onCanPlayThrough={() => setIsLoaded(true)}
            style={{
              display: isLoaded ? 'block' : 'none',
              width: defaultSize,
              height: defaultSize,
              position: 'absolute',
              top: 0,
              left: 0,
              objectFit: 'contain',
              transform: direction === 'up' ? 'rotate(180deg)' : 'none',
            }}
          >
            <source src={src} type="video/webm" />
          </video>
        </VideoWrapper>
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
  $size: number;
  $direction?: 'up' | 'down';
}>`
  position: relative;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  
  .placeholder-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const levitateUp = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;
const levitateDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
`;

export const VideoWrapper = styled.div<{
  $isAnimate?: boolean;
  $direction?: "up" | "down";
}>`
  width: max-content;
  transition: transform 0.3s ease-out;
  cursor: pointer;

  /* ${({ $isAnimate, $direction = "up" }) =>
    $isAnimate &&
    css`
      animation: ${$direction === "up" ? levitateUp : levitateDown} 15s
        ease-in-out infinite;
      will-change: transform;
    `} */
`;
