import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./helps/register"
import { permissionRouteIntercept } from "./helps/intercept"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
})

// todo 权限拦截路由
permissionRouteIntercept(router)

export default router
