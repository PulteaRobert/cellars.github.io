import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export const GameState = {
  image: 0,
  characters: [],
  encounters: [],
  background: 0,
};

export const GameData = {
  images: [
    require('./assets/image1.jpg'),
  ],
  characters: [
    require('./assets/character1.png'),
    require('./assets/character2.png'),
  ],
  backgrounds: [
    require('./assets/bg1.png'),
  ],
};

new Vue({
  render: h => h(App),
}).$mount('#app');
