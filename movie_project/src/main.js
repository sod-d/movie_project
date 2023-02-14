import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router-index.js';
import { store } from './store/index.js'
import api from './api/index.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  api
}).$mount('#app')
