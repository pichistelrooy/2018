import Vue from 'vue'
import Router from 'vue-router'
import Personas from './views/Personas.vue'
import Listado from './views/Listado.vue'
import BuscarID from './views/BuscarID.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/personas',
      name: 'personas',
      component: Personas
    },
    {
      path: '/listado',
      name: 'listado',
      component: Listado
    },
    {
      path: '/buscarid',
      name: 'buscarid',
      component: BuscarID
    }
  ]
})
