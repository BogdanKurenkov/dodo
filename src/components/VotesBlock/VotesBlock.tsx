import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { useClient } from '@/hooks/useClient';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

import { Button } from '@/components/Shared/Button/Button';
import { Disclaimer } from '@/components/Shared/Disclaimer/Disclaimer';

import SauceImage from '@/assets/images/sauce.png';

import {
  AnimatedBar,
  BarBottomBlock,
  BarsContainer,
  BarWrapper,
  Container,
  Sauce
} from './styled';


interface IVotesBlock {
  percentages: number[];
}

interface CustomCSS extends React.CSSProperties {
  '--height': string;
  '--min-height': string;
}

export const VotesBlock = ({ percentages }: IVotesBlock) => {
  const [heights, setHeights] = useState([0, 0, 0]);
  const [displayPercentages, setDisplayPercentages] = useState([0, 0, 0]);

  const { t } = useTranslation('common');

  const device = useDeviceDetect();
  const client = useClient();

  const router = useRouter();
  const { source } = router.query;

  const maxValue = Math.max(...percentages);
  const maxIndices = percentages.reduce((acc, curr, index) => {
    if (curr === maxValue) acc.push(index);
    return acc;
  }, [] as number[]);

  const getDeviceParams = () => {
    if (device === 'mobile') {
      return {
        pxPerPercent: 7,
        minHeightPx: 150,
        maxHeightPx: 300,
        sauceHeight: 70,
        barBottomDesktop: '-30px',
        barBottomMobile: (barHeight: number) => `${barHeight + 60}px`
      };
    } else {
      return {
        pxPerPercent: 11,
        minHeightPx: 200,
        maxHeightPx: 460,
        sauceHeight: 100,
        barBottomDesktop: '-30px',
        barBottomMobile: () => '-30px'
      };
    }
  };

  const deviceParams = getDeviceParams();
  const { pxPerPercent, minHeightPx, maxHeightPx, sauceHeight, barBottomDesktop, barBottomMobile } = deviceParams;

  const saucesInfo = ["sauces.sauce1.name", "sauces.sauce2.name", "sauces.sauce3.name"];

  useEffect(() => {
    setHeights([0, 0, 0]);
    setDisplayPercentages([0, 0, 0]);

    const timer = setTimeout(() => {
      setHeights(percentages);

      const duration = 1000;
      const startTime = Date.now();

      const animateNumbers = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const newDisplayPercentages = percentages.map((p) => {
          return Math.floor(progress * p);
        });

        setDisplayPercentages(newDisplayPercentages);

        if (progress < 1) {
          requestAnimationFrame(animateNumbers);
        }
      };

      requestAnimationFrame(animateNumbers);
    }, 50);

    return () => clearTimeout(timer);
  }, [percentages]);

  return (
    <Container>
      <BarsContainer>
        {heights.map((height, index) => {
          const baseHeight = height * pxPerPercent;
          const barHeight = Math.min(
            Math.max(baseHeight, minHeightPx),
            maxHeightPx
          );

          const sauceBottom = barHeight - 40 - sauceHeight / 2 + (device === 'mobile' ? 8 : 11);

          return (
            <BarWrapper key={index} $isHighest={maxIndices.includes(index)}>
              <AnimatedBar
                style={{
                  '--height': `${barHeight}px`,
                  '--min-height': `${minHeightPx}px`,
                } as CustomCSS}
                aria-label={`${height}%`}
              >
                <span>{displayPercentages[index]}</span>
              </AnimatedBar>
              <Sauce
                alt="sauce"
                src={SauceImage}
                style={{
                  bottom: `${sauceBottom}px`,
                }}
              />
              <BarBottomBlock
                $bottom={device === 'mobile' ? barBottomMobile(barHeight + 55) : barBottomDesktop}
              >
                <span>{`${t('results.sample')} №${index + 1}`}</span>
                {t(saucesInfo[index])}
              </BarBottomBlock>
            </BarWrapper>
          );
        })}
      </BarsContainer>
      {source !== 'qr' && client && <Button style={{
        height: '92px'
      }} $variant='glass' $fullWidth>{t('buttons.event')}</Button>}
      <Disclaimer variant="mobile" />
    </Container>
  );
};