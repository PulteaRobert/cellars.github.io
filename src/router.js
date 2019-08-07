import Vue from 'vue';
import VueRouter from 'vue-router';

import Game from './routes/Game.vue';
import Menu from './routes/Menu.vue';
import Credits from './routes/Credits.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', name: 'menu', component: Menu },
    { path: '/game', name: 'game', component: Game },
    { path: '/credits', name: 'credits', component: Credits },
  ],
});
