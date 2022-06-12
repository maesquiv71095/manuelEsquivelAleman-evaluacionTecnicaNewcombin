import Vue from 'vue'
import VueRouter from 'vue-router'
import USERS_ROUTES from '@/router/Users/RUsers.js';
import PageNotFound from '../views/VPageNotFound.vue';

Vue.use(VueRouter)

const routes = [
  ...USERS_ROUTES,
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
