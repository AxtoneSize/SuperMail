import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Data = () => import('views/data/Data')
const Search = () => import('views/search/Search')
const Profile = () => import('views/profile/ProFile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home      
  },
  {
    path: '/data',
    component: Data      
  },
  {
    path: '/search',
    component: Search      
  },
  {
    path: '/profile',
    component: Profile      
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router