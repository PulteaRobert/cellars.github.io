import Vue from 'vue';
import VueRouter from 'vue-router';

import Game from './routes/Game.vue';
import Menu from './routes/Menu.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', name: 'menu', component: Menu },
    { path: '/game', name: 'game', component: Game },
  ],
});
