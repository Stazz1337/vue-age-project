import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import BroadcastPage from './pages/BroadcastPage.vue';
import Enter from './pages/Enter.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  { path: '/', name: 'BroadcastPage', component: BroadcastPage },
  { path: '/enter', name: 'Enter', component: Enter },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({ history: createWebHistory(), routes });

const app = createApp(App);

app.use(router);

app.mount('#app');