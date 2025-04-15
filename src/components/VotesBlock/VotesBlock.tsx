import { useEffect, useState } from 'react';
import SauceImage from '@/assets/images/sauce.png'
import { useTranslation } from 'next-i18next';
import { AnimatedBar, BarBottomBlock, BarsContainer, BarWrapper, Container, Sauce } from './styled';

interface IVotesBlock {
  percentages: number[];
}

interface CustomCSS extends React.CSSProperties {
  '--height': string;
  '--min-height': string;
  '--sauce-bottom': string;
}

export const VotesBlock = ({ percentages }: IVotesBlock) => {
  const [heights, setHeights] = useState([0, 0, 0]);
  const { t } = useTranslation('common');

  const MIN_HEIGHT_PERCENTAGE = 10;

  const saucesInfo = ["sauces.sauce1.name", "sauces.sauce2.name", "sauces.sauce3.name"];

  useEffect(() => {
    if (JSON.stringify(percentages) !== JSON.stringify(heights)) {
      setHeights(percentages);
    }
  }, [percentages, heights]);

  return (
    <Container>
      <BarsContainer>
        {heights.map((height, index) => {
          const barHeight = Math.max(height, MIN_HEIGHT_PERCENTAGE) * 3;

          return (
            <BarWrapper key={index}>
              <AnimatedBar
                style={{
                  '--height': `${barHeight}%`,
                  '--min-height': `${MIN_HEIGHT_PERCENTAGE * 3}%`,
                  '--sauce-bottom': `calc(${barHeight}% + 20px)`,
                } as CustomCSS}
                aria-label={`${height}%`}
              >
                {percentages[index]}%
              </AnimatedBar>
              <Sauce
                alt='sauce'
                src={SauceImage}
                style={{
                  bottom: `calc(${barHeight}% - 80px)`,
                }}
              />
              <BarBottomBlock>
                <span>{`${t('results.sample')} №${index}`}</span>
                {t(saucesInfo[index])}
              </BarBottomBlock>
            </BarWrapper>
          );
        })}
      </BarsContainer>
    </Container>
  );
};