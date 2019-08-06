import Vue from 'vue';

import App from './App.vue';

import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: appRender => appRender(App),
}).$mount('#app');
