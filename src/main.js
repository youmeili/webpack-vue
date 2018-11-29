import Vue from "vue";
import 'vant/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from "vue-router";
import App from "./App";
import store from "./store"
import "./assets/styles/style.css";
import Home from "./pages/home/Home";
import Foo from "./pages/home/Foo";
import Bar from "./pages/home/Bar";
import About from "./pages/about/About";
import Connect from "./pages/connect/Connect";

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            // path: "/home",
            // component:Home,
            // children: [
            //     {path: "foo", component: Foo},
            //     {path: "bar", component: Bar}
            // ],
            // beforeEnter: (to, from, next)=>{
            //     next();
            // }
            path: "/",
            component:Home,
        },
        {
            path: "/about/:id",
            component: About
        },
        {
            path: '/connect',
            component: Connect
        }
    ]
})

new Vue({
    el: "#app",
    router,
    store,
    components:{
        App
    },
    template: "<App/>"
});