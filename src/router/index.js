import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/aboutview',
        component: AboutView
    },
    {
        path: '/contact',
        component: ContactView
    },
    {
        path: '/product/:id',
        component: ProductDetailView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;