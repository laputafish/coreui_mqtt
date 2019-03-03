// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueMqtt from 'vue-mqtt'

// todo
// cssVars()

Vue.use(BootstrapVue)
Vue.use(VueMqtt,
  'ws://dominic:yoovyoov@192.168.1.238:9001',
  {
    clientId: 'WebClient-' + parseInt(Math.random() * 100000)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
