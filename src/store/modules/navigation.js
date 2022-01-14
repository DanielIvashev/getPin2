export const navigation = {
  namespaced: true,
  state: () => ({
    drawerOpen: false,
    drawerNavigationItems: [
      {
        label: 'Dashboard',
        id: '3',
        icon: 'dashboard',
        to: { name: 'Dashboard' },
        children: [
          {
            id: '3.1',
            label: 'Dashboard SubPage',
            icon: 'dashboard_customize',
            to: { name: 'Dashboard SubPage' },
          },
        ],
      },
      {
        label: 'Locations',
        id: '1',
        tag: 'a',
        icon: 'map',
        to: { name: 'Locations' },
      },
      {
        label: 'Statistics',
        id: '2',
        tag: 'a',
        icon: 'insights',
        to: { name: 'Statistics' },
      },
    ],
    headerTitle: 'GetPin 2.0',
  }),
  mutations: {
    SET_DRAWER_OPEN(state, { value }) {
      state.drawerOpen = value;
    },
  },
  actions: {},
  getters: {
    getDrawerState(state) {
      return state.drawerOpen;
    },
    getDrawerNavigationItems(state) {
      return state.drawerNavigationItems;
    },
    getHeaderTitle(state) {
      return state.headerTitle;
    },
  },
};
