import Dashboard from './components/dashboard/Dashboard.vue'import Details from './components/details/Details.vue'import Home from './components/Home.vue'export const routes = [    { path: '', component: Home },    { path: '/dashboard', component: Dashboard },    { path: '/campaigns', component: Details }];