import Vue from 'vue'
import App from './App.vue'
import router from './router'
import books from './completedBooks.js'

Vue.config.productionTip = false

let data = {
  completedList: books
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
