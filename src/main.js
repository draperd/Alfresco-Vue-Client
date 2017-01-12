// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import auth from 'alfresco-js-utils/lib/Authentication';
// import App from './App';

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      redirect: '/home'
   },
   {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
         if (auth.loggedIn()) {
            next();
         } else {
            next('/login');
         }
      }
   },
   { path: '/login', component: Login }
];

export const router = new VueRouter({
   routes: routes
});

new Vue({
   router
}).$mount('#app');
