import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import navTranslations from "./translations/nav.json";
import enTranslations from "./translations/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enTranslations,
          ...navTranslations.en
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);