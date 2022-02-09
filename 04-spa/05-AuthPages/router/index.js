import { routeConfig } from './paths';
import VueRouter from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('../views/IndexPage'),
  },
  {
    path: routeConfig.Register.path,
    name: routeConfig.Register.name,
    component: () => import('../views/RegisterPage'),
  },
  {
    path: routeConfig.Login.path,
    name: routeConfig.Login.name,
    component: () => import('../views/LoginPage'),
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: '/04-spa/05-AuthPages',
  routes,
});
