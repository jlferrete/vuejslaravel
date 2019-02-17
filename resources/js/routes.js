import Vue from 'vue'
import Router from  'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('./views/Home')
        },
        {
            path: '/blog',
            name: 'blog',
            component: require('./views/Blog')
        },
        {
            path: ':slug',
            name: 'post',
            component: require('./views/Post'),
            props: true
        },
        {
            path: '*',
            component: require('./views/404')
        },

    ],
    mode: 'history' // Elimina el # (hash) de la URL
})