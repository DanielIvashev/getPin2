const Dashboard = () => import('../pages/Dashboard.vue');
const Locations = () => import('../pages/Locations.vue');
const Statistics = () => import('../pages/Statistics.vue');
const Login = () => import('../pages/Login.vue');
const NotFound = () => import('../pages/NotFound.vue');

import guest from './middlewares/guest';
import auth from './middlewares/auth';

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'guests-layout',
      middleware: [guest],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      layout: 'guests-layout',
    },
  },
];
