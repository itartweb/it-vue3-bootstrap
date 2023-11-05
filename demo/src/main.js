import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import ItBootstrap from '../../src';

import Home from './views/Alert.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});

createApp(App).use(router).use(ItBootstrap).mount('#app');
