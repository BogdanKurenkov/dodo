import { FC } from "react";
import { useTranslation } from "next-i18next";

import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useClient } from "@/hooks/useClient";

import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { Button } from "@/components/Shared/Button/Button";

import { AuthWrapper } from "./styled";
import { useTheme } from "styled-components";

export const TgAuth: FC = () => {
    const { t } = useTranslation('common');

    const device = useDeviceDetect();
    const client = useClient();
    const theme = useTheme();

    return <AuthWrapper>
        <Container>
            <SectionTitle isWhite={true}>
                <TextWithLineBreaks text={t('auth.title')} />
            </SectionTitle>
            <SectionDescription color={theme.colors.white}>{t('auth.description')}</SectionDescription>
            {
                client && <Button $fullWidth={device === 'mobile'} $variant="glass" $width="610px">{t('auth.bot')}</Button>
            }
        </Container>
    </AuthWrapper>
}