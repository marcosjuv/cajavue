import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpleadosView from '../views/EmpleadosView.vue'
import EditarCuadreView from '../views/EditarCuadreView.vue'
import CargosView from '../views/ConsultasView.vue'
import ReportesView from '../views/ReportesView.vue'
import CajasView from '../views/CajasView.vue'
import DetalleCierre from '../components/DetalleCierre.vue'

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
    component: DetalleCierre
  },
  {
    path: '/editarcuadre/:id',
    name: 'editarcuadre',
    component: EditarCuadreView
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: CargosView
  },
  {
    path: '/cajas',
    name: 'Cajas',
    component: CajasView
  },
  {
    path: '/reportes',
    name: 'Reportes',
    component: ReportesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
