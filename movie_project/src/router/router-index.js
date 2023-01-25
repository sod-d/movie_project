import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from "../views/HomeView.vue"
import MovieDetailView from "../views/MovieDetailView.vue"
import ActorView from "../views/ActorView.vue"
import { Store } from 'vuex';

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
            name : 'home',
            component : HomeView,
            // beforeEnter : (to,from,next) => {
                
                // this.$store.dispatch('FETCH_BOXOFFICE')
                // .then(() =>{
                //     console.log('fetched');
                //     next();
                // })
                // .catch((error) => {
                //     console.log(error);
                // })
            // },
        },
        {
            path: '/MovieDetailView/:id',
            name : 'MovieDetailView',
            component : MovieDetailView,
            // beforeEnter : (id) => {
            //     Store.dispatch("FETCH_MOVIEDETAIL", id )
            //     .then(() =>{
            //         console.log("FETCH_MOVIEDETAIL");
            //     })
            // }
        },
        {
            path: '/actor',
            name : 'acotr',
            component : ActorView
        },
    ]
});