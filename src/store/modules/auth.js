import { router } from '@/router';
import { getField, updateField } from 'vuex-map-fields';

export const auth = {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    loginForm: {
      name: '',
      age: '',
    },
  }),
  mutations: {
    updateField,
    SET_LOGGED_IN(state, { loggedIn }) {
      state.loggedIn = loggedIn;
    },
    CHANGE_FIELD(state, { fieldName, value }) {
      state.loginForm[fieldName] = value;
    },
  },
  actions: {
    async logout({ commit }) {
      try {
        localStorage.removeItem('jwt');
        await router.push({ name: 'Login' });
        commit('SET_LOGGED_IN', { loggedIn: false });
      } catch {}
    },
    logIn({ commit }) {
      router.push({ name: 'Dashboard' });
    },
  },
  getters: {
    getField,
    isLoggedIn(state) {
      return state.loggedIn;
    },
    loginForm(state) {
      return state.loginForm;
    },
  },
};
