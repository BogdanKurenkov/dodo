import { FC, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { isIOS } from 'react-device-detect';

import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useClient } from '@/hooks/useClient';

import {
  ImageContainer,
  LoaderOverlay,
  Spinner,
  VideoWrapper
} from './styled';


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
            {!isPlaying && (
              <>
                <Image
                  src={placeholderImage}
                  alt="sauce"
                  className="placeholder-image"
                  fill
                  priority
                />
                {!isLoaded && <LoaderOverlay>
                  <Spinner />
                </LoaderOverlay>}
              </>
            )}
          </ImageContainer>

          <video
            ref={videoRef}
            width={defaultSize}
            height={defaultSize}
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            muted
            playsInline
            onCanPlayThrough={() => setIsLoaded(true)}
            onLoadedMetadata={() => {
              if (isIOS) {
                setIsLoaded(true);
              }
            }}
            style={{
              display: 'block',
              width: defaultSize,
              height: defaultSize,
              position: 'absolute',
              top: 0,
              left: 0,
              objectFit: 'contain',
            }}
          >
            <source src={src} type='video/mp4' />
          </video>
        </VideoWrapper>
      )}
    </>
  );
};
