import Vue from 'vue'
import App from './App.vue'
import router from './router'
import completedBooks from './completedBooks.js'

Vue.config.productionTip = false

let data = {
  completedBooks: completedBooks
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
