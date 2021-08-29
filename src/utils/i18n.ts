import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en.json";
i18n.use(initReactI18next).init({
  lng: "en",
  ns: "translations",
  defaultNS: "translations",
  resources: {
    en: { translations: en },
  },
  fallbackLng: "en",
  debug: true,
  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true,
  },
});

export default i18n;
