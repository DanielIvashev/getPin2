export const rootGetters = {
  getIsLightTheme(state) {
    return state.isLightTheme;
  },
  getLocale(state) {
    return state.locale;
  },
  isLocaleChanging(state) {
    return state.localeLoading;
  },
};
