import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useTheme } from "styled-components";

import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { Container } from "@/components/Shared/Container/Container";
import { VotesBlock } from "@/components/VotesBlock/VotesBlock";

import { ResultsLeft, ResultsRight, ResultsWrapper } from "./styled";

export const Result: FC = () => {
    const { t } = useTranslation('common');

    const theme = useTheme();

    return <Container>
        <ResultsWrapper>
            <ResultsLeft>
                <SectionTitle isWhite={true}>
                    <TextWithLineBreaks text={t('results.title')} />
                </SectionTitle>
                <SectionDescription color={theme.colors.white}>10.05.</SectionDescription>
                <SectionDescription color={theme.colors.white}>
                    <TextWithLineBreaks text={t('results.description')} />
                </SectionDescription>
            </ResultsLeft>
            <ResultsRight>
                <VotesBlock percentages={[30, 50, 20]} />
            </ResultsRight>
        </ResultsWrapper>
    </Container>

}
