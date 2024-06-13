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
    path: '/menuSecciones',
    name: 'MenuSeccionesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuSecciones/MenuSeccionesView.vue')
  },
  {
    path: '/ListaEstudiantes',
    name: 'ListaEstudiantesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaEstudiantes/ListaEstudiantesView.vue')
  },
  {
    path: '/SubirArchivo',
    name: 'SubirArchivoView',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubirArchivo/SubirArchivoView.vue')
  },
  {
    path: '/ExamenDigitalizadoNotas',
    name: 'ExamenDigitalizadoNotasView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExamenDigitalizadoNotas/ExamenDigitalizadoNotasView.vue')
  },
  {
    path: '/RegistrarDocente',
    name: 'RegistrarDocenteView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrarDocenteU/RegistrarDocenteView.vue')
  },
  {
    path: '/Restablecer',
    name: 'RegistrarContraseñaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestablecerContraseña/Restablecer.vue')
  },
  {
    path: '/boletaNotas',
    name:'BoletaNotasView',
    component: () => import(/* webpackChunkName: "about" */ '../views/BoletaNotas/BoletaNotaView.vue')
  },
  {
    path: '/multiArchivos',
    name:'MultiArchivosView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MultiArchivos/MultiArchivos.vue')
  },
  {
    path: '/adminLogin=admin',
    name:'LoginAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginAdmin/LoginAdminView.vue')
  },
  {
    path: '/menuAdmin=$ma',
    name:'MenuAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuAdmin/menuAdminView.vue')
  },
  {
    path: '/dashBoardAdmin$$',
    name:'DashAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardAdmin/dashboarAdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
