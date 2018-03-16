// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'

import App from './App'
import router from './router'

import VueTrend from 'vuetrend'
Vue.use(iView)
import 'iview/dist/styles/iview.css'

Vue.component('trend', VueTrend);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
