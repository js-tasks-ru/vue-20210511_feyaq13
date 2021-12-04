import { paths } from './paths';
import VueRouter from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('../views/IndexPage'),
  },
  {
    path: paths.Register,
    component: () => import('../views/RegisterPage'),
  },
  {
    path: paths.Login,
    component: () => import('../views/LoginPage'),
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: '/04-spa/05-AuthPages',
  routes,
});
