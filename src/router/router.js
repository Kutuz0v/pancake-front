import {createRouter, createWebHistory} from "vue-router";
import WelcomePage from "@/pages/WelcomePage";
import ClientsPage from "@/pages/ClientsPage";


const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/clients',
        component: ClientsPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;