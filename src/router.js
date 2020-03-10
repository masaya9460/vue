import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Study from './views/Study.vue';
import Contact from './views/Contact.vue';


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{path: '/', component: Home},{path: '/study', component: Study},{path: '/contact', component: Contact}]
});
