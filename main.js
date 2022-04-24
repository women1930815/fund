import Vue from 'vue'
import App from './App'
import alert from './utils/alert.js'
import axios from './utils/request.js'
import store from './store/index.js'
Vue.prototype.$alert = alert;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
