import { createStore } from 'vuex';
import { rootActions } from './rootActions';
import { rootGetters } from './rootGetters';
import { rootMutations } from './rootMutations';
import { navigation } from './modules/navigation';
import { auth } from './modules/auth';
import { themeTogglerMiddleware } from './middlewares';

export const store = createStore({
  modules: {
    navigation,
    auth,
  },
  state() {
    return {
      isLightTheme: true,
      locale: '',
      localeLoading: false,
      localeError: null,
    };
  },
  getters: {
    ...rootGetters,
  },
  mutations: {
    ...rootMutations,
  },
  actions: {
    ...rootActions,
  },
  plugins: [themeTogglerMiddleware],
});
