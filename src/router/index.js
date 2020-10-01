import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: 'shelf'
        },
        {
            path: '/enjoy',
            name: 'enjoy',
            component: () =>
                import ('../views/enjoy/index.vue')
        },
        {
            path: '/letter',
            name: 'letter',
            component: () =>
                import ('../views/letter/index.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            component: () =>
                import ('../views/mine/index.vue')
        },
        {
            path: '/shelf',
            name: 'shelf',
            component: () =>
                import ('../views/shelf/index.vue')
        }
    ],
    linkActiveClass: 'active'
})

export default router