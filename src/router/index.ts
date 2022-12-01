import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostListView from '@/site/ApiBlog/views/PostListView.vue'
import PostView from '@/site/ApiBlog/views/PostView.vue'
import AuthorListView from '@/site/ApiBlog/views/AuthorListView.vue'
import AuthorView from '@/site/ApiBlog/views/AuthorView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/employee',
            name: 'employee',
            component: () => import((`@/site/ApiEmployees/AppLayout.vue`))
        },
    ]
})

export default router
