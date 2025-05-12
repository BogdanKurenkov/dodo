import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

import { RatingItem, RatingResponse } from "@/api/types";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useClient } from "@/hooks/useClient";

import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { Container } from "@/components/Shared/Container/Container";
import { VotesBlock } from "@/components/VotesBlock/VotesBlock";
import { Button } from "@/components/Shared/Button/Button";
import { Disclaimer } from "@/components/Shared/Disclaimer/Disclaimer";

import {
    ResultsLeft,
    ResultsRight,
    ResultsWrapper
} from "./styled";

interface IResult {
    ratingData: RatingResponse;
}

export const Result: FC<IResult> = ({ ratingData }) => {
    const { t } = useTranslation('common');

    const theme = useTheme();

    const router = useRouter();
    const { source } = router.query;

    const device = useDeviceDetect();
    const client = useClient();

    const handleNavigate = () => {
        router.push("/#participate")
    }

    const adaptRatingCounts = (data: RatingItem[], totalVotes: number): number[] => {
        if (totalVotes === 0) return [0, 0, 0];

        const rawPercentages = data.map(item => ({
            sauce: item.sauce,
            percent: (item.count / totalVotes) * 100,
            rounded: Math.round((item.count / totalVotes) * 100)
        })).sort((a, b) => b.percent - a.percent);

        const sum = rawPercentages.reduce((acc, curr) => acc + curr.rounded, 0);

        const adjustedPercentages = [...rawPercentages];
        let diff = 100 - sum;
        let i = 0;

        while (diff !== 0) {
            if (diff > 0) {
                adjustedPercentages[i % adjustedPercentages.length].rounded += 1;
                diff--;
            } else {
                adjustedPercentages[i % adjustedPercentages.length].rounded -= 1;
                diff++;
            }
            i++;
        }

        return Array.from({ length: 3 }, (_, i) => {
            const sauceId = i + 1;
            const item = adjustedPercentages.find(item => item.sauce === sauceId);
            return item ? item.rounded : 0;
        });
    };

    const percentages = adaptRatingCounts(ratingData.data, ratingData.total_votes);

    return <Container>
        <ResultsWrapper>
            <ResultsLeft>
                <SectionTitle isWhite={true}>
                    <TextWithLineBreaks text={t('results.title')} />
                </SectionTitle>
                <SectionDescription color={theme.colors.white}>{t('results.date')}</SectionDescription>
                <SectionDescription color={theme.colors.white}>
                    <TextWithLineBreaks text={t('results.description')} />
                </SectionDescription>
                {source !== 'qr' && client &&
                    <Button
                        $fullWidth={device === 'mobile'}
                        $width="410px"
                        $variant="glass"
                        style={{ height: '120px' }}
                        onClick={handleNavigate}
                    >
                        {t('buttons.event')}
                    </Button>
                }
                <Disclaimer variant="descktop" />
            </ResultsLeft>
            <ResultsRight>
                <VotesBlock percentages={percentages} />
            </ResultsRight>
        </ResultsWrapper>
    </Container>
}
