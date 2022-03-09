import { createRouter, createWebHistory } from 'vue-router'
import ActionView from '../views/ActionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'action',
      component: ActionView
    },
  ]
})

export default router
