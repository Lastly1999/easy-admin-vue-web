import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setupElementUi from "@/plugins/elementUi"

setupElementUi(Vue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
