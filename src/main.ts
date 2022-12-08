import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import router from './router'
import generatedRoutes from 'virtual:generated-pages';

const routes = generatedRoutes

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, routes, isClient, initialState }) => {
    },
)