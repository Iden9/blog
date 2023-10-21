import {createRouter, createWebHashHistory, onBeforeRouteUpdate} from "vue-router"


const routes = [
    {path: "/", name: "home", component: () => import("@/components/views/home")},
    {path: "/detail", name: "detail", component: () => import("@/components/views/detail")},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



export default router
