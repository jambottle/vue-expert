import { createRouter, createWebHistory } from 'vue-router';

import SigninPage from '@/views/SigninPage.vue';
import SignupPage from '@/views/SignupPage.vue';

const routes = [
  {
    path: '/signin',
    component: SigninPage,
  },
  {
    path: '/signup',
    component: SignupPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
