import { createStore } from 'vuex';
import { rootActions } from './rootActions';
import { rootGetters } from './rootGetters';
import { rootMutations } from './rootMutations';
import { navigation } from './modules/navigation';
import { themeTogglerMiddleware } from './middlewares';

export const store = createStore({
  modules: {
    navigation,
  },
  state() {
    return {
      isLightTheme: true,
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
