import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { auth } from '@/includes/firebase'

import '@/assets/base.css'

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
  }
})
