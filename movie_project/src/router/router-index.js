import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from "../views/HomeView.vue"
import MovieView from "../views/MovieView.vue"
import ActorView from "../views/ActorView.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history', //URL 해시값 제거
    routes : [
        {
            path: '/',
            redirect: '/home'
            // component : HomeView,
        },
        {
            path: '/home',
            component : HomeView,
        },
        {
            path: '/movie',
            name : 'movie',
            component : MovieView,
        },
        {
            path: '/actor',
            name : 'acotr',
            component : ActorView
        },
    ]
});