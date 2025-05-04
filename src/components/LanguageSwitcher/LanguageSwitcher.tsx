import { FC } from 'react';

import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';

import { LANGUAGES } from '@/constants/languages';

import {
    StyledLanguageSwitcher,
    SwitcherWrapper,
    Divider
} from './styled';

interface ILanguageSwitcher {
    isActive: boolean;
}

export const LanguageSwitcher: FC<ILanguageSwitcher> = ({ isActive }) => {
    const { changeLanguage, currentLocale: locale } = useLanguageSwitcher();

    const handleLanguageChange = (newLocale: string) => {
        if (locale !== newLocale) {
            changeLanguage(newLocale);
        }
    };

    return (
        <SwitcherWrapper $isActive={isActive} role="group" aria-label="Language switcher">
            <StyledLanguageSwitcher
                $active={locale === LANGUAGES.RU || locale === LANGUAGES.BY}
                onClick={() => handleLanguageChange(LANGUAGES.RU)}
                aria-current={locale === LANGUAGES.RU ? 'true' : 'false'}
                aria-label="Russian language"
            >
                {LANGUAGES.RU}
            </StyledLanguageSwitcher>

            <Divider aria-hidden="true">/</Divider>

            <StyledLanguageSwitcher
                $active={locale === LANGUAGES.KZ}
                onClick={() => handleLanguageChange(LANGUAGES.KZ)}
                aria-current={locale === LANGUAGES.KZ ? 'true' : 'false'}
                aria-label="Kazakh language"
            >
                {LANGUAGES.KZ}
            </StyledLanguageSwitcher>
        </SwitcherWrapper>
    );
};