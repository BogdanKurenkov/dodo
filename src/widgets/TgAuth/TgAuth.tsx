import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useTheme } from "styled-components";

import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useClient } from "@/hooks/useClient";

import { SectionTitle } from "@/components/Shared/SectionTitle/SectionTitle";
import { Container } from "@/components/Shared/Container/Container";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { Button } from "@/components/Shared/Button/Button";

import { AuthWrapper } from "./styled";

const botLinks = {
    ru: "https://t.me/dodo_ru_bot?start=landing_sauces",
    by: "https://t.me/dodo_by_bot?start=landing_sauces",
    kz: "https://t.me/dodo_kz_bot?start=landing_sauces"
};

export const TgAuth: FC = () => {
    const { t } = useTranslation('common');

    const { userCountry } = useLanguageSwitcher();
    const device = useDeviceDetect();
    const client = useClient();
    const theme = useTheme();

    const handleButtonClick = () => {
        const link = botLinks[userCountry as keyof typeof botLinks] || "https://t.me/dodo_ru_bot?start=landing_sauces;"
        if (typeof window !== 'undefined') {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return <AuthWrapper>
        <Container>
            <SectionTitle isWhite={true}>
                <TextWithLineBreaks text={t('auth.title')} />
            </SectionTitle>
            <SectionDescription color={theme.colors.white}>{t('auth.description')}</SectionDescription>
            {
                client && <Button
                    $fullWidth={device === 'mobile'}
                    $variant="glass"
                    $width="610px"
                    onClick={handleButtonClick}
                    style={{ height: device === 'desktop' ? "120px" : "92px" }}
                >
                    {t('auth.bot')}
                </Button>
            }
        </Container>
    </AuthWrapper>
}