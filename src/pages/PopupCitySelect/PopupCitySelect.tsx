import { FC, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "next-i18next";
import { useTheme } from "styled-components";

import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

import { Container } from "@/components/Shared/Container/Container";
import { SectionDescription } from "@/components/Shared/SectionDescription/SectionDescription";
import { TextWithLineBreaks } from "@/components/Shared/TextWithLineBreaks/TextWithLineBreaks";
import { Footer } from "@/components/Footer/Footer";
import { PopupLanguageSwitcher } from "@/components/Shared/PopupLanguageSwitcher/PopupLanguageSwitcher";

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

const PopupCitySelect: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<
    LanguageOption["code"] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const { changeLanguage } = useLanguageSwitcher();

  const { t } = useTranslation();

  const theme = useTheme();

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
      Cookies.set("USER_COUNTRY", selectedLanguage, { expires: 365 });
      setIsOpen(false);
      if (selectedLanguage === "kz") {
        setShowLanguageSwitcher(true);
      }
    }
  };

  const handleCloseLanguageSwitcher = () => {
    setShowLanguageSwitcher(false);
  };

  if (!isOpen && !showLanguageSwitcher) return null;

  return (
    <>
      {isOpen && (
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
              <SectionDescription color={theme.colors.white}>
                <TextWithLineBreaks text={t("Выберите страну")} />
              </SectionDescription>
              <Language>
                <LanguageButton
                  $isSelected={selectedLanguage === "ru"}
                  onClick={() => handleLanguageSelect("ru")}
                >
                  Russia
                </LanguageButton>
                <LanguageButton
                  $isSelected={selectedLanguage === "kz"}
                  onClick={() => handleLanguageSelect("kz")}
                >
                  Kazakhstan
                </LanguageButton>
                <LanguageButton
                  $isSelected={selectedLanguage === "by"}
                  onClick={() => handleLanguageSelect("by")}
                >
                  Belarus
                </LanguageButton>
              </Language>
              <Button
                $variant="glass"
                disabled={!selectedLanguage}
                onClick={handleConfirm}
              >
                {t("buttons.select")}
              </Button>
            </PopupContent>
          </Container>
          <Footer />
        </PopupWrapper>
      )}
      {showLanguageSwitcher && (
        <PopupLanguageSwitcher
          isActive={true}
          onClose={handleCloseLanguageSwitcher}
        />
      )}
    </>
  );
};

export default PopupCitySelect