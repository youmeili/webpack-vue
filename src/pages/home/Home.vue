<template>
    <!--<transition name="home">-->
        <div>
            <p :class="{a: isRed}">This is Home page</p>
            <Doc />
            <p>{{docs}}</p>
            <p>{{name}}</p>
            <!--<img src="../../assets/images/ban_img1.jpg"/>-->
            <router-view></router-view>
        </div>
    <!--</transition>-->
</template>

<script>
    import Doc from './Doc';
    import axios from 'axios';
    import http from '../../fetch/http';
    export default {
        name: "Home",
        data(){
            return {
                isRed: true,
                docs: Doc.__docs,
                name: ""
            }
        },
        components: {
            Doc
        },
        beforeRouteEnter: function (to, from, next) {
            next();
        },
        created: function(){
            const url = '/proxy';
            http.get(url).then(res => {
                console.log('res', res);
                this.name = res.absolutePath;
            }).catch(error => {
                console.log('error', error);
            });
        }
    }
</script>

<style scoped>
    .a{
        color: red;
    }
</style>