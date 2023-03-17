import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import pinia from './stores/index.js'
// import { createPinia } from 'pinia';



const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

// // register the jw-pagination component
// Vue.component("jw-pagination", JwPagination);

