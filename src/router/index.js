import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sympotoms from '../views/Symptoms.vue'
import prevetion from '../views/Preventions.vue'
import treaq from '../views/TREATMENT.vue'
import faq from '../views/FAQ.vue'
import news from '../views/NEWS.vue'
import dodont from '../views/DODONT.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/Symptoms',
    name:'sympotoms',
    component:Sympotoms
  },{
    path:'/prevetion',
    name:"prevetion",
    component:prevetion
  },{
    name:"treaq",
    path:'/treaq',
    component:treaq
  },{
    name:'faq',
    path:'/faq',
    component:faq
  },{
    name:'news',
    path:'/news',
    component:news
  },{
    name:'dodont',
    path:'/dodont',
    component:dodont
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
