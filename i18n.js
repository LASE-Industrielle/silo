import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import React from "react";

const resources = {
  en: {
    translation: {
      // details
      'silos': 'Silos',
      'full': ' full',
      'content': 'Content',
      'capacity': 'Capacity',
      'average': 'Average',
      'analytics': 'ANALYTICS',
      // navigation
      'Analytics': 'Analytics',
      'profile': 'Profile',
      'configuration': 'Configuration',
      'notifications': 'Notifications',
      // graph
      'no data to show': 'No data to show',
      'select period to show': 'Select period to show',
      'last hour': 'Last Hour',
      'last day': 'Last Day',
      'last week': 'Last Week',
      'last month': 'Last Month',
      'custom date': 'Custom Date',
      //datepicker
      'Select Date & Time': 'Select Date & Time',
      'Start date and time': 'Start date and time',
      'End date and time': 'End date and time',
      'APPLY': 'APPLY',
      'CANCEL': 'CANCEL',
      'BACK': 'BACK',
      'NEXT': 'NEXT',
      'DONE': 'DONE',
      'Salt': 'Salt',
      'Time': 'Time',
      'Date': 'Date',
      'Start': 'Start',
      'End': 'End',
      'Width': 'Width',
      'Height': 'Height',
      'Location': 'Location',
      'Serial Number': 'Serial Number',
      'Type': 'Type',
      'synchronization': 'Synchronization',
      'Logout': 'Logout',
      'German language enabled': 'German language enabled',
      'Mark all as read': 'Mark all as read',
      'Clear all': 'Clear all',
      'No notifications': 'No notifications',
      'Read': 'Read',
      'Sign In': 'Sign In',
      'Email': 'Email',
      'Password': 'Password',
      'Forgot Password': 'Forgot Password',
      'LOG IN': 'LOG IN',
      "Don't have an account?": "Don't have an account?",
      'Sign up': 'Sign up'
    }
  },
  de: {
    translation: {
      'silos': 'Silos',
      'full': ' voll',
      'content': 'Inhalt',
      'capacity': 'Kapazität',
      'average': 'durchschnittlich',
      'analytics': 'ANALYTIK',
      'Analytics': 'Analytik',
      'profile': 'Profil',
      'configuration': 'Konfiguration',
      'notifications': 'Benachrichtigungen',
      'no data to show': 'Keine Daten zum Anzeigen',
      'select period to show': 'Zeitraum auswählen',
      'last hour': 'Letzte Stunde',
      'last day': 'Letzter Tag',
      'last week': 'Letzte Woche',
      'last month': 'iLetzten Monat',
      'custom date': 'Benutzerdefiniertes Datum',
      'Select Date & Time': 'Wählen Sie Datum und Uhrzeit',
      'Start date and time': 'Startdatum und -zeit',
      'End date and time': 'Enddatum und -zeit',
      'APPLY': 'ANWENDEN',
      'CANCEL': 'STORNIEREN',
      'BACK': 'ZURÜCK',
      'NEXT': 'NÄCHSTER',
      'DONE': 'ERLEDIGT',
      'Salt': 'Salz',
      'Time': 'Zeit',
      'Date': 'Datum',
      'Start': 'Start',
      'End': 'Ende',
      'Width': 'Breite',
      'Height': 'Höhe',
      'Location': 'Ort',
      'Serial Number': 'Seriennummer',
      'Type': 'Typ',
      'synchronization': 'Synchronisation',
      'Logout': 'Ausloggen',
      'German language enabled': 'Deutsche Sprache aktiviert',
      'Mark all as read': 'Markiere alle als gelesen',
      'Clear all': 'Alles löschen',
      'No notifications': 'Keine Benachrichtigungen',
      'Read': 'gelesen',
      'Sign In': 'Einloggen',
      'Email': 'Email',
      'Password': 'Passwort',
      'Forgot Password': 'Passwort vergessen',
      'LOG IN': 'EINLOGGEN',
      "Don't have an account?": "Sie haben noch keinen Account?",
      'Sign up': 'Anmelden'
    }
  }
}

i18n
// pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'de',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;
