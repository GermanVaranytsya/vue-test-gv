import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'
import Card from './components/Card.vue'

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.component('app-card', Card);

new Vue({
  el: '#app',
  render: h => h(App)
})
