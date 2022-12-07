import { createRouter,createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router';
import Index from "@/pages/index.vue";
import Ctf from "@/pages/CTF.vue";
import Test from "@/pages/test/a.vue";
import routes from '~pages';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})



export default router;