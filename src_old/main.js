import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Styles
import './main.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
