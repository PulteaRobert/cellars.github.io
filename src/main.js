import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Game from './Game.vue';
import Menu from './Menu.vue';

import background from './assets/image1.jpg';
import character1 from './assets/character1.png';
import character2 from './assets/character2.png';


export const GameState = {
  image: 0,
  characters: [],
  encounters: [],
};

export const GameData = {
  images: [
    background,
  ],
  characters: [
    character1,
    character2,
  ],
};

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
