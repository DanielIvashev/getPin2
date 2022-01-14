const Dashboard = () => import('../pages/Dashboard.vue');
const Locations = () => import('../pages/Locations.vue');
const Statistics = () => import('../pages/Statistics.vue');

export const routes = [
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
];
