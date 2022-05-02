import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import MoviesDb from './components/MoviesDb'
import HomePage from './components/HomePage'
import MovieDetail from './components/MovieDetail'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: "/movies", component:MoviesDb},
    {path: "/", component: HomePage},
    {path: "/movie/:id" , component: MovieDetail}
  ]
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
