import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import NotFound from '../pages/NotFound.vue'
import Colis from '../pages/Colis.vue'
import Pharmacie from '../pages/Pharmacie.vue'
import Volaille from '../pages/Volaille.vue'
import Pressing from '../pages/Pressing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop', 
    component: Shop
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product-single',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/colis',
    name: 'Colis',
    component: Colis
  },
  {
    path: '/pharmacie',
    name: 'Pharmacie',
    component: Pharmacie
  },
  {
    path: '/volaille',
    name: 'Volaille',
    component: Volaille
  },
  {
    path: '/pressing',
    name: 'Pressing',
    component: Pressing
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "*",
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
