import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePaginate from 'vue-paginate'

createApp(App).use(store).use(router).use(VuePaginate).mount('#app')
