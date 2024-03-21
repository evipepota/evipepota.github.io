import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import router from './router'
import generatedRoutes from 'virtual:generated-pages'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const routes = generatedRoutes

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(vuetify)
})
