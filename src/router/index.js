import VueRouter from 'vue-router';
import { routes } from '@/router/routes';

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
