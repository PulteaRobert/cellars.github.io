import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Game from './routes/Game.vue';
import Menu from './routes/Menu.vue';
import Combat from './routes/Combat.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Menu },
      { path: '/game', name: 'game', component: Game },
      { path: '/combat', name: 'combat', component: Combat },
    ],
  }),
  render: h => h(App),
}).$mount('#app');
