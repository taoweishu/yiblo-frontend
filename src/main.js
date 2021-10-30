import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mavonEditor)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
