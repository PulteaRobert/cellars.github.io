import Vue from 'vue';
import App from './App.vue';

import background from './assets/image1.jpg';
import character1 from  './assets/character1.png';
import character2 from './assets/character2.png';

Vue.config.productionTip = false;

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

new Vue({
  render: h => h(App),
}).$mount('#app');
