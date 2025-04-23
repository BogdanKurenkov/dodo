import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

import { Container } from "@/components/Shared/Container/Container";
import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";

import {
    BtnDesktop,
    BtnMobile,
    ColsWrapper,
    FirstBar,
    Graphics,
    LeftCol,
    ResearchWrapper,
    RightCol,
    SecondBar,
    ThirdBar
} from "./styled";
import { useTheme } from "styled-components";

export const Research: FC = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    const theme = useTheme();

    const handleNavigate = () => {
        router.push('results')
    }

    return <ResearchWrapper id="results">
        <Container>
            <ColsWrapper>
                <LeftCol>
                    <SectionTitle isWhite={false}>{t('research.title')}</SectionTitle>
                    <SectionDescription>{t('research.subtitle')}</SectionDescription>
                    <SectionDescription>
                        <TextWithLineBreaks text={t('research.description')} />
                    </SectionDescription>
                    <BtnDesktop onClick={handleNavigate} $width='610px' $backgroundColor={theme.colors.black}>{t('buttons.results')}</BtnDesktop>
                </LeftCol>
                <RightCol>
                    <Graphics>
                        <FirstBar />
                        <SecondBar />
                        <ThirdBar />
                    </Graphics>
                    <BtnMobile onClick={handleNavigate} $backgroundColor={theme.colors.black}>{t('buttons.results')}</BtnMobile>
                </RightCol>
            </ColsWrapper>
        </Container>
    </ResearchWrapper>
}
