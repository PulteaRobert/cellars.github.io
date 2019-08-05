import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Game from './routes/Game.vue';
import Menu from './routes/Menu.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Menu },
      { path: '/game', component: Game },
    ],
  }),
  render: h => h(App),
}).$mount('#app');
