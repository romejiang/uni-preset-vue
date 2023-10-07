import { createSSRApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router/router'

export function createApp() {
  const app = createSSRApp(App)

  app.use(router)
  return {
    app
  }
}
