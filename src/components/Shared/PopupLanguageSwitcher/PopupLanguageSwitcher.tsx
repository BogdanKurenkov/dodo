import { FC, useState } from "react";

import { Container } from "@/components/Shared/Container/Container";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";
import { LANGUAGES } from "@/constants/languages";

import {
  PopupOverlay,
  PopupContent,
  PopupDescription,
  StyledLanguageSwitcher,
  SwitcherWrapper,
  Divider,
  Button,
} from "./styled";

interface ILanguageSwitcher {
  isActive: boolean;
  onClose: () => void;
}

export const PopupLanguageSwitcher: FC<ILanguageSwitcher> = ({
  isActive,
  onClose,
}) => {
  const { changeLanguage, currentLocale } = useLanguageSwitcher();
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  const handleLanguageSelect = (newLocale: string) => {
    setSelectedLocale(newLocale);
  };

  const handleConfirm = () => {
    if (selectedLocale !== currentLocale && selectedLocale) {
      changeLanguage(selectedLocale);
    }
    onClose();
  };

  return (
    <PopupOverlay>
      <Container>
        <PopupContent>
          <PopupDescription>Выбери язык</PopupDescription>
          <SwitcherWrapper
            $isActive={isActive}
            role="group"
            aria-label="Language switcher"
          >
            <StyledLanguageSwitcher
              $active={
                selectedLocale === LANGUAGES.RU ||
                selectedLocale === LANGUAGES.BY
              }
              onClick={() => handleLanguageSelect(LANGUAGES.RU)}
              aria-current={selectedLocale === LANGUAGES.RU ? "true" : "false"}
              aria-label="Russian language"
            >
              {LANGUAGES.RU}
            </StyledLanguageSwitcher>

            <Divider aria-hidden="true">/</Divider>

            <StyledLanguageSwitcher
              $active={selectedLocale === LANGUAGES.KZ}
              onClick={() => handleLanguageSelect(LANGUAGES.KZ)}
              aria-current={selectedLocale === LANGUAGES.KZ ? "true" : "false"}
              aria-label="Kazakh language"
            >
              {LANGUAGES.KZ}
            </StyledLanguageSwitcher>
          </SwitcherWrapper>
          <Button $variant="glass" onClick={handleConfirm}>
            Выбрать
          </Button>
        </PopupContent>
      </Container>
    </PopupOverlay>
  );
};
