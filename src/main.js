import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'

// Styles
import './style.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
//const pinia = createPinia()

app.use(PrimeVue)

app.mount('#app')
