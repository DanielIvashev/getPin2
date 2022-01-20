import { i18n, SUPPORT_LOCALES, loadLocaleMessages } from '@/i18n';
import { createNotification } from '@/utils';

export const rootActions = {
  initialize({ commit, dispatch }) {
    const setLocale = dispatch('setLocale', { locale: 'en' });
    return Promise.allSettled([setLocale]);
  },
  async setLocale({ commit, dispatch }, { locale }) {
    if (SUPPORT_LOCALES.includes(locale)) {
      try {
        commit('SET_LOCALE_LOADING');
        await loadLocaleMessages(i18n, locale || 'en');
        commit('SET_LOCALE_SUCCESS', { locale });
      } catch (error) {
        commit('SET_LOCALE_ERROR', { error });
        createNotification({
          type: 'error',
          group: true,
          message: 'Locales loading failed',
        });
      }
    }
  },
};
