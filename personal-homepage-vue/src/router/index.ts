import { createRouter, createWebHistory, type RouteRecordRaw, type Router, } from 'vue-router'
import routes from './routes'

const router:Router = createRouter({
  history: createWebHistory('/'),
  routes: routes as Readonly<RouteRecordRaw[]>,
});

export default router
