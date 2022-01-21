import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';
import { store } from '@/store';
import middlewareFactory from './middlewareFactory';

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: 'smooth' });
      }, 500);
    });
  },
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;

  if (!middleware) {
    return next();
  }

  const context = {
    to,
    from,
    next,
    store,
  };

  return middleware[0]({
    ...context,
    next: middlewareFactory(context, middleware, 1),
  });
});
