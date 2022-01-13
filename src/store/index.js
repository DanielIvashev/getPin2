import { createStore } from 'vuex';
import { rootActions } from './rootActions';
import { rootGetters } from './rootGetters';
import { rootMutations } from './rootMutations';

export const store = createStore({
  modules: {},
  state() {
    return {
      count: 0,
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
});
