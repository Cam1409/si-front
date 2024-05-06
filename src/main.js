import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

app.config.globalProperties.$axios = axios;

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
