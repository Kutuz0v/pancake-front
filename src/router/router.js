import {createRouter, createWebHistory} from "vue-router";
import WelcomePage from "@/pages/WelcomePage";
import ClientsPage from "@/pages/ClientsPage";
import PancakesPage from "@/pages/PancakesPage";


const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/clients',
        component: ClientsPage
    },
    {
        path: '/pancakes',
        component: PancakesPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;