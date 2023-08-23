import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpleadosView from '../views/EmpleadosView.vue'
import EditarCuadreView from '../views/EditarCuadreView.vue'
import ConsultasView from '../views/ConsultasView.vue'
// import ReportesView from '../views/ReportesView.vue'
import CajasView from '../views/CajasView.vue'
import DetalleCierre from '../components/DetalleCierre.vue'
// import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/empleados',
    name: 'empleados',
    component: EmpleadosView
  },
  {
    path: '/detallecierre/:id',
    name: 'detallecierre',
    component: DetalleCierre,
    props(route) {
      return {
        cierre_id: parseInt(route.params.id)
      }
    }
  },
  {
    path: '/editarcuadre/:id',
    name: 'editarcuadre',
    component: EditarCuadreView
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: ConsultasView
  },
  {
    path: '/cajas',
    name: 'Cajas',
    component: CajasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
