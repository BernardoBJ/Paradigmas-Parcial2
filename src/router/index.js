import { createRouter, createWebHistory } from 'vue-router'
import ListarLibros from '@/components/ListarLibros'
import EditarLibro from '@/components/EditarLibro'
import EliminarLibro from '@/components/EliminarLibro'
import CrearLibro from '@/components/CrearLibro'

const routes = [
  {
    path: '/',
    name: 'ListarLibros',
    component: ListarLibros
  },
  {
    path: '/create',
    name: 'CrearLibro',
    component: CrearLibro
  },
  {
    path: '/edit/:id',
    name: 'EditarLibro',
    component: EditarLibro
  },
  {
    path: '/delete/:id',
    name: 'EliminarLibro',
    component: EliminarLibro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;