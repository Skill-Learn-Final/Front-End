import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

export const useLocalization = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      //   lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
      fallbackLng: "en",
      detection: {
        order: [
          "htmlTag",
          "cookie",

          "querystring",
          "navigator",
          "path",
          "subdomain",
        ],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "locale/{{lng}}/translation.json",
      },
      react: { useSuspense: false },
    });

  const { t } = useTranslation();
  return { t };
};
