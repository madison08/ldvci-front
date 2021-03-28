import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import $ from 'jquery'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// var $ = require('jquery')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
