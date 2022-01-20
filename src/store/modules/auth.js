import { router } from '@/router';

export const auth = {
  namespaced: true,
  state: () => ({
    loggedIn: false,
  }),
  mutations: {
    SET_LOGGED_IN(state, { loggedIn }) {
      state.loggedIn = loggedIn;
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
    isLoggedIn(state) {
      return state.loggedIn;
    },
  },
};
