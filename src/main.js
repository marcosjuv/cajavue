import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import DataTable from 'datatables.net-vue3'
// import DataTablesCore from 'datatables.net'

createApp(App).use(store).use(router).mount('#app')
