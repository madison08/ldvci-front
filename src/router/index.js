import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import ProductDetail from '../pages/ProductDetail.vue'
// import NotFound from '../pages/NotFound.vue'
import Colis from '../pages/Colis.vue'
import Pharmacie from '../pages/Pharmacie.vue'
import Volaille from '../pages/Volaille.vue'
import Pressing from '../pages/Pressing.vue'
import AlimentProduct from '../pages/AlimentProduct.vue'
import AlimentVivrier from '../pages/AlimentVivrier'
import FournitureScolaire from '../pages/FournitureScolaire.vue'
import PharmacyScreenO from '../pages/PharmacyScreenO.vue'

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
    path: '/aliment_product',
    name: 'AlimentProduct',
    component: AlimentProduct
  },
  {
    path: '/aliment_vivrier',
    name: 'AlimentVivrier',
    component: AlimentVivrier
  },
  {
    path: '/fourniture_scolaire',
    name: 'FournitureScolaire',
    component: FournitureScolaire
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
    path: '/product_single',
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
    path: '/pharmacie_screen',
    name: 'PharmacyScreenO',
    component: PharmacyScreenO
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
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../pages/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
