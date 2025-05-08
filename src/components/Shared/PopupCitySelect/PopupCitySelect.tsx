import { FC, useState, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
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
  label: string;
}

export const PopupCitySelect: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption["code"] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const { changeLanguage } = useLanguageSwitcher();
  const theme = useTheme();

  const languageOptions: LanguageOption[] = [
    { code: "ru", label: "Russia" },
    { code: "kz", label: "Kazakhstan" },
    { code: "by", label: "Belarus" },
  ];

  useEffect(() => {
    const cookies = parseCookies();
    const hasLocale = !!cookies.NEXT_LOCALE;
    const hasCountry = !!cookies.USER_COUNTRY;

    if (!hasLocale && !hasCountry) {
      setIsOpen(true);
    } else if (cookies.USER_COUNTRY === "kz" && !hasLocale) {
      setShowLanguageSwitcher(true);
    }
  }, []);

  const handleLanguageSelect = (language: LanguageOption["code"]) => {
    setSelectedLanguage(language);
  };

  const handleConfirm = () => {
    if (!selectedLanguage) return;

    setCookie(null, "USER_COUNTRY", selectedLanguage, {
      maxAge: 365 * 24 * 60 * 60
    });

    if (selectedLanguage !== "kz") {
      changeLanguage(selectedLanguage);
    }

    setIsOpen(false);

    if (selectedLanguage === "kz") {
      setShowLanguageSwitcher(true);
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
              <SectionDescription role="region" aria-labelledby="country-heading" color={theme.colors.white}>
                <TextWithLineBreaks text="Выберите страну" />
              </SectionDescription>
              <Language>
                {languageOptions.map((option) => (
                  <LanguageButton
                    key={option.code}
                    $isSelected={selectedLanguage === option.code}
                    onClick={() => handleLanguageSelect(option.code)}
                  >
                    {option.label}
                  </LanguageButton>
                ))}
              </Language>
              <Button
                $variant="glass"
                disabled={!selectedLanguage}
                onClick={handleConfirm}
              >
                Выбрать
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