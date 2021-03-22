import { createRouter, createWebHistory } from '@ionic/vue-router';
import Users from '../pages/Users.vue';


const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
