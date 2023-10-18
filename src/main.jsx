import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./components/context/AuthContext";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

import engTranslation from "./locale/en.json";
import ruTranslation from "./locale/ru.json";

i18n.init({
  lng: "en",
  resources: {
    en: {
      translation: engTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
});

ReactDOM.render( 
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
