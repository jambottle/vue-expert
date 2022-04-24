import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    component: () => import('@/views/SigninPage.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;