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
        return Array.from({ length: 3 }, (_, i) => {
            const sauceId = i + 1;
            const item = data.find(item => item.sauce === sauceId);
            const count = item?.count || 0;
            return totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
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
