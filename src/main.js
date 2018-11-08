import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'
import CardDash from './components/dashboard/Card.vue'
import CardDet from './components/details/Card'
import Dashboard from './components/dashboard/Dashboard.vue'
import Details from './components/details/Details'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.component('app-details', Details);
Vue.component('app-card-dash', CardDash);
Vue.component('app-card-det', CardDet);
Vue.component('app-dashboard', Dashboard);

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
