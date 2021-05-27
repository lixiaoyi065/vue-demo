// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'

import Element from 'element-ui'
import '@/styles/element-variables.scss'

import '@/styles/index.scss'

import App from './App'
import router from './router'

import * as filters from './filters'
import api from './api'

Vue.prototype.$api = api;
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

console.log(Vue)
