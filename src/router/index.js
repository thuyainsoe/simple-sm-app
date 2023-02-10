import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import HomePage from '../views/HomePage.vue'
import {auth} from '../firebase/config'

const routes = [
 {
  path: '/',
  name: 'Welcome',
  component: Welcome,
  beforeEnter(to,from,next) {
    let user = auth.currentUser;
    console.log(user)
    if(!user) {
      next()
    }else {
      next({name:"HomePage"})
    }
  }
 },
 {
  path: '/home',
  name: 'HomePage',
  component: HomePage,
  beforeEnter(to,from,next) {
    let user = auth.currentUser;
    if(user) {
      next()
    }else {
      next({name:"Welcome"})
    }
  }
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
