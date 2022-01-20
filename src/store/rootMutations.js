export const rootMutations = {
  TOGGLE_THEME(state) {
    state.isLightTheme = !state.isLightTheme;
  },
  SET_LOCALE_SUCCESS(state, { locale }) {
    state.localeLoading = false;
    state.localeError = null;
    state.locale = locale;
  },
  SET_LOCALE_LOADING(state) {
    state.localeLoading = true;
    state.localeError = null;
  },
  SET_LOCALE_ERROR(state, { error }) {
    state.localeLoading = false;
    state.localeError = error;
  },
};
