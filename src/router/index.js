import Vue from 'vue'
import VueRouter from 'vue-router'
import registerRoutes from "./helps/register"
import { permissionRouteIntercept } from "./helps/intercept"

Vue.use(VueRouter)

const redirectUrl = "/base/login/index"
const redirectPath = { path: '/', redirect: redirectUrl }

const router = new VueRouter({
  mode: "history",
  routes: [
    ...registerRoutes,
    redirectPath,
  ]
})

// todo 权限拦截路由
permissionRouteIntercept(router)

export default router
