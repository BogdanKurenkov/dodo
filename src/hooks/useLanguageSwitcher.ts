import { useRouter } from "next/router";
import Cookies from "js-cookie";

export const useLanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return { changeLanguage, currentLocale: locale };
};
