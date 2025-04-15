import { FC } from "react";
import { ColsWrapper, LeftCol, ResearchWrapper, RightCol } from "./styled";
import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { useTranslation } from "next-i18next";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { Button } from "@/components/Shared/Button/Button";

export const Research: FC = () => {
    const { t } = useTranslation('common');

    return <ResearchWrapper>
        <Container>
            <ColsWrapper>
                <LeftCol>
                    <SectionTitle isWhite={false}>{t('research.title')}</SectionTitle>
                    <SectionDescription>{t('research.subtitle')}</SectionDescription>
                    <SectionDescription>
                        <TextWithLineBreaks text={t('research.description')} />
                    </SectionDescription>
                    <Button style={{ marginTop: '40px' }} $width='610px' $backgroundColor="#111110">{t('buttons.results')}</Button>
                </LeftCol>
                <RightCol></RightCol>
            </ColsWrapper>
        </Container>
    </ResearchWrapper>
}