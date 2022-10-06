import HomePage from '@/views/HomePage.vue'
import {createRouter,createWebHistory} from "vue-router";





const routes = [
    {path:"/", name: HomePage, component: HomePage},
    {path: "/about", name : "AboutPage", component: ()=>import("@/views/AboutPage.vue")},
    {path: "/brazil", name: "Brazil", component: ()=>import('@/views/Brazil.vue')},
    {path: "/hawaii", name: "Hawaii", component: ()=>import("@/views/Hawaii.vue")},
    {path: "/panama", name: "Panama", component: ()=>import("@/views/Panama.vue")},
    {path: "/jamaica", name: "Jamaica", component: ()=>import("@/views/Jamaica.vue")},
    {path:"/destination/:id", component: ()=>import("@/views/DestinationShow.vue")}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:"vue-school-active-link"
})

export default router