// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCordova from 'vue-cordova-plugin'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueCordova)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
