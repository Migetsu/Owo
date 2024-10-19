import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

export const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/contacts', name: 'contacts', component: () => import('@/pages/Contacts.vue')},
        {path: '/courses/computers', name: 'computers', component: () => import('@/pages/courses/Computers.vue')},
        {path: '/courses/blender', name: 'blender', component: () => import('@/pages/courses/Blender.vue')},
        {path: '/courses/web-development', name: 'web-development', component: () => import('@/pages/courses/Web-development.vue')},
        {path: '/courses/python', name: 'python', component: () => import('@/pages/courses/Python.vue')},
        // {path: '/employment', name: 'employment', component: () => import('@/pages/Employment.vue')},
    ]
})