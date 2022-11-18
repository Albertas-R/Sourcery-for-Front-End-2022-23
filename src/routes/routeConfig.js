import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Developers = lazy(() => import('../pages/academy/Developers'));
const Testers = lazy(() => import('../pages/academy/Testers'));
const FrontEnd = lazy(() => import('../pages/academy/FrontEnd'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = {
  home: '/',
  developers: '/academy/developers',
  testers: '/academy/testers',
  frontEnd: '/academy/front-end',
  register: '/register',
  notFound: '*',
};

export const routeConfig = {
  home: {
    path: routes.home,
    component: Home,
  },
  developers: {
    path: routes.developers,
    component: Developers,
  },
  testers: {
    path: routes.testers,
    component: Testers,
  },
  frontEnd: {
    path: routes.frontEnd,
    component: FrontEnd,
  },
  register: {
    path: routes.register,
    component: Register,
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
  },
};
