import Vue from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import Carousel3d  from 'vue-carousel-3d'

Vue.use(FlagIcon);
Vue.use(Carousel3d);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')
