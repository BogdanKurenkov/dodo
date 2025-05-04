import { FC, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "next-i18next";

import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

import { Container } from "@/components/Shared/Container/Container";
import { Footer } from "@/components/Footer/Footer";

import Logo from "@/assets/svg/dodo-lab_desktop.svg";

import {
  PopupWrapper,
  Header,
  LogoWrapper,
  PopupContent,
  Language,
  LanguageButton,
  Button,
} from "./styled";

interface LanguageOption {
  code: "ru" | "kz" | "by";
}

export const PopupCitySelect: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption["code"] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { changeLanguage } = useLanguageSwitcher();

  const { t } = useTranslation();

  useEffect(() => {
    const localeCookie = Cookies.get("NEXT_LOCALE");
    if (!localeCookie) {
      setIsOpen(true);
    }
  }, []);

  const handleLanguageSelect = (language: LanguageOption["code"]) => {
    setSelectedLanguage(language);
  };

  const handleConfirm = () => {
    if (selectedLanguage) {
      changeLanguage(selectedLanguage);
      Cookies.set('USER_COUNTRY', selectedLanguage, { expires: 365 })
      setIsOpen(false);
    }
  };


  if (!isOpen) return null;

  return (
    <PopupWrapper>
      <Header>
        <Container>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Container>
      </Header>
      <Container>
        <PopupContent>
          <Language>
            <LanguageButton
              $isSelected={selectedLanguage === "ru"}
              onClick={() => handleLanguageSelect("ru")}
            >
              ru
            </LanguageButton>
            <LanguageButton
              $isSelected={selectedLanguage === "kz"}
              onClick={() => handleLanguageSelect("kz")}
            >
              kz
            </LanguageButton>
            <LanguageButton
              $isSelected={selectedLanguage === "by"}
              onClick={() => handleLanguageSelect("by")}
            >
              by
            </LanguageButton>
          </Language>
          <Button
            $variant="glass"
            disabled={!selectedLanguage}
            onClick={handleConfirm}
          >
            {t('buttons.select')}
          </Button>
        </PopupContent>
      </Container>
      <Footer />
    </PopupWrapper>
  );
};