import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Our_works from '@/components/Our_works.vue';
import Contact from '@/components/Contact.vue';
import Project from '@/components/Project.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/our_works/:category?', name: 'Our_works', component: Our_works, props: true },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/project/:productId',name: 'project',component: Project},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
