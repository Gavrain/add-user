import Vue from 'vue'
import VueRouter from 'vue-router'
import AddUser from '../views/AddUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/add'
  },
  {
    path: '/add',
    component: AddUser
  }
]

const router = new VueRouter({
  routes
})

export default router
