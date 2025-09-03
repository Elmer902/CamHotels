import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        stays: "Stays",
        bookings: "Bookings",
        signin: "Sign In",
        signup: "Sign Up",
      },
    },
    fr: {
      translation: {
        home: "Accueil",
        stays: "Séjours",
        bookings: "Réservations",
        signin: "Connexion",
        signup: "Créer un compte",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
