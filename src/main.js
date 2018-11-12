import Vue from "vue";
import 'vant/lib/index.css';
import VueRouter from "vue-router";
import App from "./App";
import "./assets/styles/style.css";
import Home from "./pages/home/Home";
import Foo from "./pages/home/Foo";
import Bar from "./pages/home/Bar";
import About from "./pages/about/About";

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: "/home",
            component:Home,
            children: [
                {path: "foo", component: Foo},
                {path: "bar", component: Bar}
            ],
            beforeEnter: (to, from, next)=>{
                next();
            }
        },
        {
            path: "/about/:id",
            component: About
        }
    ]
})

new Vue({
    el: "#app",
    router,
    components:{
        App
    },
    template: "<App/>"
});