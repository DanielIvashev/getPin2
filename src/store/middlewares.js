import { Dark } from 'quasar';
import { SUPPORT_LOCALES, loadLocaleMessages, i18n } from '@/i18n';

export const themeTogglerMiddleware = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'TOGGLE_THEME') {
      Dark.toggle();
    }
  });
};

export const languageMiddleware = (store) => {
  store.subscribe(async ({ type, payload }, state) => {
    if (type === 'SET_LANGUAGE') {
      const { locale } = payload;
      if (SUPPORT_LOCALES.includes(locale)) {
        await loadLocaleMessages(i18n, locale);
      }
    }
  });
};
