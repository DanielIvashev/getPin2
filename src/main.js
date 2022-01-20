import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import { store } from '@/store';
import { router } from '@/router';
import { i18n } from '@/i18n';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import App from './App.vue';
import '@/styles/main.scss';

const app = createApp(App);
app.use(i18n);
app.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    notify: {
      position: 'top-right',
      group: false,
    },
  },
});
app.use(store);
app.use(router);
app.mount('#app');
