import { Dark } from 'quasar';

export const themeTogglerMiddleware = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'TOGGLE_THEME') {
      Dark.toggle();
    }
  });
};
