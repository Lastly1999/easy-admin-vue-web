import Vue from 'vue'
import VueRouter from 'vue-router'
import registerRoutes from "./helps/register"
import { permissionRouteIntercept } from "./helps/intercept"

Vue.use(VueRouter)

// 重定向url
const redirectUrl = "/main/base/login/index"
// 重定向----route栈
const redirectPath = { path: '/', redirect: redirectUrl }
// 登录页----route栈
const loginRoute = { path: `/login`, name: "login", component: () => import("@/views/Login") }

console.log(`当前路由栈:`, registerRoutes)

const router = new VueRouter({
  mode: "history",
  routes: [
    ...registerRoutes,
    loginRoute,
    redirectPath,
  ]
})

// todo 权限拦截路由
permissionRouteIntercept(router)

export default router
