import Vue from 'vue'
import VueRouter from 'vue-router'

console.log(process.env)

Vue.use(VueRouter)

/**
 * 路由自动化注册
 */
const requireComponent = require.context('@/views', true, /index.vue$/) // 找到views路径下的所有文件
const dynamicRoute = requireComponent.keys().filter(fileName => {
  if (fileName === './index.vue') { // 过滤掉父节点的路由
    return false
  } else {
    return true
  }
})
  .map(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '')// 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
    const componentNameRe = componentName.replace(/\//g, '-') // 设置name为文件夹名-index
    const component = Vue.component(componentNameRe, componentConfig.default || componentConfig) // 根据路径注册成组件
    const result = {
      path: `/${componentName.toLowerCase()}`,
      name: componentNameRe,
      component
    }
    return result
  })

const router = new VueRouter({
  dynamicRoute
})

export default router
