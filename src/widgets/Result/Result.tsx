import { FC } from "react";
import { useTranslation } from "next-i18next";

import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { Container } from "@/components/Shared/Container/Container";

import { ResultsLeft, ResultsRight, ResultsWrapper } from "./styled";
import { VotesBlock } from "@/components/VotesBlock/VotesBlock";

export const Result: FC = () => {
    const { t } = useTranslation('common');

    return <Container>
        <ResultsWrapper>
            <ResultsLeft>
                <SectionTitle isWhite={true}>
                    <TextWithLineBreaks text={t('results.title')} />
                </SectionTitle>
                <SectionDescription color="#F4F4F1">10.05.</SectionDescription>
                <SectionDescription color="#F4F4F1">
                    <TextWithLineBreaks text={t('results.description')} />
                </SectionDescription>
            </ResultsLeft>
            <ResultsRight>
                <VotesBlock percentages={[32, 48, 20]} />
            </ResultsRight>
        </ResultsWrapper>
    </Container>

}
