import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'
import Card from './components/dashboard/Card.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Header from './components/dashboard/Header.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.component('app-card', Card);
Vue.component('app-dashboard', Dashboard);
Vue.component('app-header', Header);


new Vue({
  el: '#app',
  render: h => h(App)
})
