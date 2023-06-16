import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/font.css";
import "./styles/tailwind.css";
import "./styles/App.css";
import App from "./App";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
// import reportWebVitals from "./reportWebVitals";

import axios from "axios";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "am"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "path", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locale/{{lng}}/translate.json",
    },
    react: { useSuspense: false },
  });

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
