import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import User from '../views/User.vue'
import Posts from '../views/Posts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/user/:id', component: User },
  { path: '/posts', component: Posts } 
]

export default createRouter({
  history: createWebHistory(),
  routes
})