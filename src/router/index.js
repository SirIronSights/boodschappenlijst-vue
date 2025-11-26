import { createWebHistory, createRouter } from 'vue-router'

import Create from "../domains/groceries/pages/Create.vue"
import Overview from "../domains/groceries/pages/Overview.vue";

const routes = [
    { path: '/create', component: Create },
    { path: '/edit/:id', name: 'edit', component: () => import('../domains/groceries/pages/Edit.vue')},
    { path: '/', component: Overview },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})