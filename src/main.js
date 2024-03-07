import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import BroadcastPage from './pages/BroadcastPage.vue';
import Enter from './pages/Enter.vue';
import Auth from './pages/Auth.vue';
import CheckCode from './pages/CheckCode.vue';
import NotFound from './pages/NotFound.vue';

function isAuthenticated() {
  return localStorage.getItem('token') !== null;
}


const routes = [
  { path: '/', name: 'BroadcastPage', component: BroadcastPage, meta: { requiresAuth: true } },
  { path: '/enter', name: 'Enter', component: Enter, meta: { requiresAuth: true } },
  { path: '/auth', name: 'Auth', component: Auth },
  { path: '/check-code', name: 'CheckCode', component: CheckCode, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];


const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next();
    } else {
      next('/auth');
    }
  } else {
    next();
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
