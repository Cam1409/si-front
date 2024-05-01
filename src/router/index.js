import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  },
  {
    path: '/menu',
    name: 'MenuView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu/MenuView.vue')
  },
  {
    path:'/menuSecciones',
    name:'MenuSeccionesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuSecciones/MenuSeccionesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
