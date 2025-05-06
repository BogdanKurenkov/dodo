import { useRouter } from "next/router";
import Cookies from "js-cookie";

export const useLanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;
  const userCountry = Cookies.get("USER_COUNTRY");

  const changeLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });

    const pathWithoutHash = router.asPath?.split("#")[0];
    router.push(pathWithoutHash, pathWithoutHash, {
      locale: userCountry === "by" && newLocale === "ru" ? "by" : newLocale,
      scroll: false,
    });
  };

  return { changeLanguage, currentLocale: locale, userCountry };
};
