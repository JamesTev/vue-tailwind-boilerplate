import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './index.css'

import {helpers} from "@/utils/helpers.js"

import {ApiService} from "./services/api.service"
import {TokenService} from "./services/storage.service"

Vue.mixin({
  methods: helpers // register helper functions as mxiin that will be avail to all components through this.<method>
})

Vue.use(require('vue-cookies'))
Vue.$cookies.config('1d')

const baseURI = process.env.VUE_APP_BACKEND_URL

ApiService.init(baseURI)
if(TokenService.getToken()){
  ApiService.setHeader()
}

window.vm = {}

vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

