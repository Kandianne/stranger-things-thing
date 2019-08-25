import Vue from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './plugins/i18n';
import flagIcon from 'vue-flag-icon';

Vue.use(flagIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
  flagIcon
}).$mount('#app')
