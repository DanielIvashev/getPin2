import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import '@/styles/main.scss';
import { store } from '@/store';
import { router } from '@/router';
import App from './App.vue';

const app = createApp(App);
app.use(Quasar);
app.use(store);
app.use(router);
app.mount('#app');
