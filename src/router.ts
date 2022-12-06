import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from "@/pages/index.vue";
import Ctf from "@/pages/CTF.vue";

const routes = [
    { path: '/', name: 'app', component: Index },
    { path: '/ctf-writeup', name: 'ctf', component: Ctf },
]
 
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
 
export default router;