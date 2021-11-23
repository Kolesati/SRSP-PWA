import Vue from 'vue'
import App from './App.vue'

// Service Worker
import './registerServiceWorker'

// plugins
import '@/plugins/firebase'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
